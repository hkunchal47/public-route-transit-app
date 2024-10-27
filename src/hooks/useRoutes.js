import { useState } from 'react';
import { addRoute, deleteRoute } from '../services/RouteService';

const useRoutes = () => {
  const [routes, setRoutes] = useState([]);

  const handleAddRoute = (route) => setRoutes((prevRoutes) => addRoute(prevRoutes, route));
  const handleDeleteRoute = (routeId) => setRoutes((prevRoutes) => deleteRoute(prevRoutes, routeId));

  return { routes, addRoute: handleAddRoute, deleteRoute: handleDeleteRoute };
};

export default useRoutes;
