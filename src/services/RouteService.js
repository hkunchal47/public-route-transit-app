export const addRoute = (routes, newRoute) => [...routes, newRoute];
export const deleteRoute = (routes, routeId) => routes.filter((route) => route.id !== routeId);
