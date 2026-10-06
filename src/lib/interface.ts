// Versionamento de apresentação, independente de dados, algoritmos e feature gates.
export const UI_VERSIONS = ['v1', 'v2'] as const;
export type UIVersion = (typeof UI_VERSIONS)[number];
export const CURRENT_UI_VERSION: UIVersion = UI_VERSIONS[0];
export type UIQuery = Record<string, string | string[] | undefined>;

export function isUIVersion(value: string): value is UIVersion {
  return (UI_VERSIONS as readonly string[]).includes(value);
}

export function versionedPath(version: UIVersion, path = '/'): string {
  return `/${version}${path === '/' ? '' : path}`;
}

export function unversionedPath(path: string): string {
  const [version, ...segments] = path.slice(1).split('/');
  return isUIVersion(version) ? `/${segments.join('/')}` : path;
}

// Preserva inclusive parâmetros repetidos, sem permitir destino externo.
export function canonicalTarget(path: string, query: UIQuery = {}): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) for (const item of Array.isArray(value) ? value : [value]) params.append(key, item);
  }
  const suffix = params.toString();
  return `${versionedPath(CURRENT_UI_VERSION, path)}${suffix ? `?${suffix}` : ''}`;
}
