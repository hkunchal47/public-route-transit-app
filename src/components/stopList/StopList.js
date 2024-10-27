import React from 'react';

const StopList = ({ stops }) => (
  <ul>
    {stops.map((stop) => (
      <li key={stop.id}>{stop.name} ({stop.lat}, {stop.lng})</li>
    ))}
  </ul>
);

export default StopList;
