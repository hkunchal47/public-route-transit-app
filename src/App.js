import React from 'react';
import RouteForm from './components/routeForm/RouteForm';
import RouteList from './components/routeList/RouteList';
import MapView from './components/mapView/MapView';
import useRoutes from './hooks/useRoutes';

const App = () => {
  const { routes, addRoute, deleteRoute } = useRoutes();

  return (
    <div className="app-container">
      <h1>Public Transit Route</h1>
      <RouteForm onAddRoute={addRoute} />
      <RouteList routes={routes} onDeleteRoute={deleteRoute} />
      {routes.length > 0 ? (
        <MapView routes={routes} />
      ) : (
        <div className="no-routes-message">No routes available to display on the map.</div>
      )}
    </div>
  );
};

export default App;
