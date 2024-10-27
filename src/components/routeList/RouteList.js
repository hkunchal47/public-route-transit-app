import React from 'react';
import './RouteList.css'; 

const RouteList = ({ routes, onDeleteRoute }) => (
  <div className="route-list"> 
    <h2>Routes</h2>
    <ul>
      {routes.map((route) => (
        <li key={route.id}>
          {route.name} ({route.direction}) - {route.status}
          <button onClick={() => onDeleteRoute(route.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default RouteList;
