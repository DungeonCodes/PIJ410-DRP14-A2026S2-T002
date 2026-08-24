#!/usr/bin/env python3
"""Busca bibliografica em bases academicas abertas e formata referencias em ABNT.

Bases consultadas (nenhuma exige chave de API):
  crossref  - api.crossref.org      - amplo, indexa periodicos brasileiros
  openalex  - api.openalex.org      - metadados ricos, contagem de citacoes
  s2        - api.semanticscholar.org - bom para revisoes de literatura

Uso:
    python buscar.py "marketing digital captacao de alunos"
    python buscar.py "learning analytics dashboard" --desde 2019 --limite 15
    python buscar.py "evasao escolar" --bases crossref,openalex --formato json

Saida padrao: lista ranqueada com metadados + referencia pronta em ABNT
(NBR 6023:2018). Conferir sempre antes de colar no relatorio: os metadados
vem das bases e podem ter falhas de capitalizacao ou autoria.

Somente biblioteca padrao - nao requer pip install.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import date

TIMEOUT = 30
# Crossref e OpenAlex pedem identificacao no User-Agent e priorizam quem envia.
UA = "PIJ410-UNIVESP/1.0 (projeto academico; mailto:relacoespublicas@colegiosapucaia.com.br)"

MESES_ABNT = {
    1: "jan.", 2: "fev.", 3: "mar.", 4: "abr.", 5: "maio", 6: "jun.",
    7: "jul.", 8: "ago.", 9: "set.", 10: "out.", 11: "nov.", 12: "dez.",
}


def _get(url: str) -> dict | None:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return json.loads(r.read().decode("utf-8"))
    except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, json.JSONDecodeError) as e:
        print(f"  [aviso] falha ao consultar {url.split('/')[2]}: {e}", file=sys.stderr)
        return None


class Obra:
    """Registro normalizado, independente da base de origem."""

    def __init__(self, titulo, autores, ano, veiculo, doi, url, citacoes, base,
                 volume=None, numero=None, paginas=None, tipo=None, local=None):
        self.titulo = html.unescape((titulo or "").strip())
        self.autores = autores or []          # lista de (sobrenome, prenomes)
        self.ano = ano
        self.veiculo = html.unescape((veiculo or "").strip())
        self.doi = (doi or "").strip()
        self.url = (url or "").strip()
        self.citacoes = citacoes or 0
        self.base = base
        self.volume = volume
        self.numero = numero
        self.paginas = paginas
        self.tipo = tipo or "artigo"
        self.local = local

    @property
    def chave(self) -> str:
        """Chave de deduplicacao: DOI quando existe, senao titulo normalizado."""
        if self.doi:
            return self.doi.lower()
        return re.sub(r"[^a-z0-9]", "", self.titulo.lower())[:80]

    def autores_abnt(self) -> str:
        """NBR 6023:2018 - ate 3 autores lista todos; acima disso, primeiro + et al.

        Sem autoria identificada retorna string vazia: a norma manda entrar
        pelo titulo, com a primeira palavra em maiusculas (ver referencia_abnt).
        """
        if not self.autores:
            return ""
        fmt = [f"{s.upper()}, {p}".rstrip(", ") for s, p in self.autores[:3]]
        if len(self.autores) > 3:
            sobrenome, prenomes = self.autores[0]
            return f"{sobrenome.upper()}, {prenomes} et al.".replace(" ,", "")
        return "; ".join(fmt)

    def referencia_abnt(self) -> str:
        """Referencia de artigo de periodico conforme NBR 6023:2018."""
        hoje = date.today()
        acesso = f"{hoje.day} {MESES_ABNT[hoje.month]} {hoje.year}"

        autores = self.autores_abnt()
        if autores:
            partes = [autores + ".", f"{self.titulo}."]
        else:
            # Sem autoria: entrada pelo titulo, primeira palavra em maiusculas.
            palavras = self.titulo.split()
            if palavras:
                palavras[0] = palavras[0].upper()
            partes = [" ".join(palavras) + "."]
        if self.veiculo:
            partes.append(f"**{self.veiculo}**,")
        if self.volume:
            partes.append(f"v. {self.volume},")
        if self.numero:
            partes.append(f"n. {self.numero},")
        if self.paginas:
            partes.append(f"p. {self.paginas},")
        partes.append(f"{self.ano or '[s. d.]'}.")
        if self.doi:
            partes.append(f"DOI: {self.doi}.")
        if self.url:
            partes.append(f"Disponível em: {self.url}. Acesso em: {acesso}.")

        ref = " ".join(partes)
        return re.sub(r"\s+", " ", ref).replace(" ,", ",").replace("..", ".")


def _partir_nome(nome_completo: str) -> tuple[str, str]:
    """'Maria Silva Santos' -> ('Santos', 'Maria Silva')."""
    nome_completo = (nome_completo or "").strip()
    if not nome_completo:
        return ("", "")
    partes = nome_completo.split()
    if len(partes) == 1:
        return (partes[0], "")
    return (partes[-1], " ".join(partes[:-1]))


def buscar_crossref(q: str, limite: int, desde: int | None) -> list[Obra]:
    params = {
        "query": q,
        "rows": str(limite),
        "sort": "relevance",
        "select": "title,author,issued,DOI,container-title,volume,issue,page,URL,is-referenced-by-count,type",
    }
    if desde:
        params["filter"] = f"from-pub-date:{desde}-01-01"
    d = _get("https://api.crossref.org/works?" + urllib.parse.urlencode(params))
    if not d:
        return []
    out = []
    for it in d.get("message", {}).get("items", []):
        autores = [(a.get("family", ""), a.get("given", "")) for a in it.get("author", []) if a.get("family")]
        ano = None
        dp = it.get("issued", {}).get("date-parts", [[None]])
        if dp and dp[0]:
            ano = dp[0][0]
        out.append(Obra(
            titulo=(it.get("title") or [""])[0],
            autores=autores,
            ano=ano,
            veiculo=(it.get("container-title") or [""])[0],
            doi=it.get("DOI", ""),
            url=it.get("URL", ""),
            citacoes=it.get("is-referenced-by-count", 0),
            base="crossref",
            volume=it.get("volume"),
            numero=it.get("issue"),
            paginas=it.get("page"),
            tipo=it.get("type"),
        ))
    return out


def buscar_openalex(q: str, limite: int, desde: int | None) -> list[Obra]:
    params = {"search": q, "per-page": str(limite)}
    if desde:
        params["filter"] = f"from_publication_date:{desde}-01-01"
    d = _get("https://api.openalex.org/works?" + urllib.parse.urlencode(params))
    if not d:
        return []
    out = []
    for w in d.get("results", []):
        autores = [_partir_nome(a.get("author", {}).get("display_name", ""))
                   for a in w.get("authorships", [])]
        autores = [a for a in autores if a[0]]
        loc = (w.get("primary_location") or {}).get("source") or {}
        bib = w.get("biblio") or {}
        paginas = None
        if bib.get("first_page"):
            paginas = bib["first_page"] + (f"-{bib['last_page']}" if bib.get("last_page") else "")
        out.append(Obra(
            titulo=w.get("title") or "",
            autores=autores,
            ano=w.get("publication_year"),
            veiculo=loc.get("display_name") or "",
            doi=(w.get("doi") or "").replace("https://doi.org/", ""),
            url=w.get("doi") or (w.get("primary_location") or {}).get("landing_page_url", ""),
            citacoes=w.get("cited_by_count", 0),
            base="openalex",
            volume=bib.get("volume"),
            numero=bib.get("issue"),
            paginas=paginas,
            tipo=w.get("type"),
        ))
    return out


def buscar_s2(q: str, limite: int, desde: int | None) -> list[Obra]:
    campos = "title,year,authors,venue,externalIds,citationCount,url,publicationTypes"
    params = {"query": q, "limit": str(limite), "fields": campos}
    if desde:
        params["year"] = f"{desde}-"
    d = _get("https://api.semanticscholar.org/graph/v1/paper/search?" + urllib.parse.urlencode(params))
    if not d:
        return []
    out = []
    for p in d.get("data", []) or []:
        autores = [_partir_nome(a.get("name", "")) for a in p.get("authors", [])]
        autores = [a for a in autores if a[0]]
        doi = (p.get("externalIds") or {}).get("DOI", "")
        out.append(Obra(
            titulo=p.get("title") or "",
            autores=autores,
            ano=p.get("year"),
            veiculo=p.get("venue") or "",
            doi=doi,
            url=f"https://doi.org/{doi}" if doi else (p.get("url") or ""),
            citacoes=p.get("citationCount", 0),
            base="s2",
            tipo=(p.get("publicationTypes") or [None])[0],
        ))
    return out


def buscar_arxiv(q: str, limite: int, desde: int | None) -> list[Obra]:
    """arXiv: essencial para computacao e IA, onde muito resultado so existe como preprint.

    ATENCAO: preprint nao passou por revisao por pares. A rubrica da UNIVESP exige
    fontes confiaveis; use o preprint apenas quando nao houver versao publicada, e
    prefira sempre a versao em periodico ou anais quando ela existir (campo journal_ref).
    """
    import xml.etree.ElementTree as ET

    ATOM = "{http://www.w3.org/2005/Atom}"
    ARX = "{http://arxiv.org/schemas/atom}"

    params = {
        "search_query": f"all:{q}",
        "max_results": str(limite),
        "sortBy": "relevance",
        "sortOrder": "descending",
    }
    url = "https://export.arxiv.org/api/query?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            raiz = ET.fromstring(r.read().decode("utf-8"))
    except Exception as e:  # rede, XML malformado, HTTP
        print(f"  [aviso] falha ao consultar arxiv: {e}", file=sys.stderr)
        return []

    out = []
    for e in raiz.findall(ATOM + "entry"):
        titulo = (e.findtext(ATOM + "title") or "").strip()
        publicado = e.findtext(ATOM + "published") or ""
        ano = int(publicado[:4]) if publicado[:4].isdigit() else None
        if desde and ano and ano < desde:
            continue
        autores = [_partir_nome(a.findtext(ATOM + "name") or "")
                   for a in e.findall(ATOM + "author")]
        autores = [a for a in autores if a[0]]
        doi = (e.findtext(ARX + "doi") or "").strip()
        journal = (e.findtext(ARX + "journal_ref") or "").strip()
        arxiv_url = (e.findtext(ATOM + "id") or "").strip()
        out.append(Obra(
            titulo=re.sub(r"\s+", " ", titulo),
            autores=autores,
            ano=ano,
            # Sem journal_ref o trabalho e preprint; marcar explicitamente na referencia.
            veiculo=journal or "arXiv (preprint)",
            doi=doi,
            url=f"https://doi.org/{doi}" if doi else arxiv_url,
            citacoes=0,  # arXiv nao expoe contagem de citacoes
            base="arxiv",
            tipo="preprint" if not journal else "artigo",
        ))
    return out


BASES = {
    "crossref": buscar_crossref,
    "openalex": buscar_openalex,
    "s2": buscar_s2,
    "arxiv": buscar_arxiv,
}


def deduplicar(obras: list[Obra]) -> list[Obra]:
    """Mantem o registro mais completo de cada obra (mais campos preenchidos)."""
    melhor: dict[str, Obra] = {}
    for o in obras:
        if not o.chave or not o.titulo:
            continue
        atual = melhor.get(o.chave)
        if atual is None:
            melhor[o.chave] = o
            continue
        def completude(x):
            return sum(bool(v) for v in (x.autores, x.veiculo, x.volume, x.numero, x.paginas, x.doi))
        if completude(o) > completude(atual):
            o.citacoes = max(o.citacoes, atual.citacoes)
            melhor[o.chave] = o
        else:
            atual.citacoes = max(atual.citacoes, o.citacoes)
    return list(melhor.values())


def main() -> int:
    ap = argparse.ArgumentParser(description="Busca bibliografica academica com saida em ABNT")
    ap.add_argument("termo", help="termo de busca (use aspas)")
    ap.add_argument("--bases", default="crossref,openalex,s2",
                    help="bases separadas por virgula: crossref,openalex,s2")
    ap.add_argument("--limite", type=int, default=10, help="resultados por base (padrao 10)")
    ap.add_argument("--desde", type=int, default=None, help="ano minimo de publicacao")
    ap.add_argument("--formato", choices=["texto", "json", "abnt"], default="texto")
    args = ap.parse_args()

    escolhidas = [b.strip() for b in args.bases.split(",") if b.strip() in BASES]
    if not escolhidas:
        print("Nenhuma base valida. Use: crossref, openalex, s2", file=sys.stderr)
        return 2

    todas: list[Obra] = []
    for nome in escolhidas:
        print(f"  consultando {nome}...", file=sys.stderr)
        todas.extend(BASES[nome](args.termo, args.limite, args.desde))

    obras = deduplicar(todas)
    obras.sort(key=lambda o: (o.citacoes, o.ano or 0), reverse=True)

    if not obras:
        print("Nenhum resultado. Tente outros termos ou remova --desde.", file=sys.stderr)
        return 1

    if args.formato == "json":
        print(json.dumps([{
            "titulo": o.titulo, "ano": o.ano, "veiculo": o.veiculo, "doi": o.doi,
            "citacoes": o.citacoes, "base": o.base, "url": o.url,
            "autores": [f"{s}, {p}" for s, p in o.autores],
            "referencia_abnt": o.referencia_abnt(),
        } for o in obras], ensure_ascii=False, indent=2))
    elif args.formato == "abnt":
        for o in sorted(obras, key=lambda x: x.autores_abnt()):
            print(o.referencia_abnt())
            print()
    else:
        print(f"\n{len(obras)} obras unicas (de {len(todas)} registros brutos)\n")
        for i, o in enumerate(obras, 1):
            print(f"[{i}] {o.titulo}")
            print(f"    {o.ano or 's.d.'} | {o.veiculo or 'veiculo nao informado'} "
                  f"| {o.citacoes} citacoes | {o.base}")
            if o.doi:
                print(f"    https://doi.org/{o.doi}")
            print(f"    ABNT: {o.referencia_abnt()}")
            print()

    return 0


if __name__ == "__main__":
    sys.exit(main())
