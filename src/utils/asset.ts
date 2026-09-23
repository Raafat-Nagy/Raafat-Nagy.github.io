/**
 * Resolve a path inside `public/` against the Vite base URL so local assets
 * keep working regardless of where the site is deployed (user site at `/`
 * or a project site such as `/my-repo/`).
 */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base.endsWith('/') ? base : `${base}/`}${path.replace(/^\/+/, '')}`;
}
