export interface Route {
  path: string;
  pattern: RegExp;
  paramNames: string[];
  render: (params: Record<string, string>) => import('lit').TemplateResult;
  title: string;
  description: string;
}

const routes: Route[] = [];

const BASE: string = import.meta.env.BASE_URL ?? '/';

function stripBase(pathname: string): string {
  if (BASE && BASE !== '/' && pathname.startsWith(BASE)) {
    return pathname.slice(BASE.length - 1) || '/';
  }
  return pathname || '/';
}

export function addRoute(
  path: string,
  render: Route['render'],
  title: string,
  description: string,
): void {
  const paramNames: string[] = [];
  const patternStr = path.replace(/:([^/]+)/g, (_, name: string) => {
    paramNames.push(name);
    return '([^/]+)';
  });
  const pattern = new RegExp(`^${patternStr}$`);
  routes.push({ path, pattern, paramNames, render, title, description });
}

export function matchRoute(pathname: string): Route | null {
  const cleanPath = stripBase(pathname);
  for (const route of routes) {
    const match = route.pattern.exec(cleanPath);
    if (match) {
      const params: Record<string, string> = {};
      route.paramNames.forEach((name, i) => {
        params[name] = decodeURIComponent(match[i + 1]);
      });
      (route as Route & { matchedParams?: Record<string, string> }).matchedParams = params;
      return route;
    }
  }
  return null;
}

export function getMatchedParams(route: Route): Record<string, string> {
  return (route as Route & { matchedParams?: Record<string, string> }).matchedParams ?? {};
}

export function navigate(path: string): void {
  const fullPath = `${BASE.replace(/\/$/, '')}${path}`;
  window.history.pushState({}, '', fullPath);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function getCurrentPath(): string {
  return stripBase(window.location.pathname || '/');
}
