export function getImageUrl(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // @ts-ignore - Vite provides import.meta.env
  const base = import.meta.env.BASE_URL || '/';
  
  if (path.startsWith('/')) {
    return `${base}${path.slice(1)}`;
  }
  return `${base}${path}`;
}
