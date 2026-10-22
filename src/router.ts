export interface Route {
  path: string;
  pattern: RegExp;
  paramNames: string[];
  render: (params: Record<string, string>) => import('lit').TemplateResult;
  title: string;
  description: string;
}

const routes: Route[] = [];

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
  for (const route of routes) {
    const match = route.pattern.exec(pathname);
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
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function getCurrentPath(): string {
  return window.location.pathname || '/';
}
