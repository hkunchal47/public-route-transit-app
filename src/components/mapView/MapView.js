import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import './MapView.css';

const MapView = ({ routes }) => {
  const mapContainerStyle = { width: '800px', height: '600px' };
  const center = { lat: 20.5937, lng: 78.9629 };
  const [map, setMap] = useState(null); 

  const getPathForRoute = (route) => {
    if (!route?.stops || route.stops.length === 0) return [];

    return route.stops
      .filter(stop => stop.lat != null && stop.lng != null)
      .map(stop => ({ lat: parseFloat(stop.lat), lng: parseFloat(stop.lng) }));
  };

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      routes.forEach(route => {
        const path = getPathForRoute(route);
        if (path.length > 0) {
          path.forEach(stop => bounds.extend(stop));
        }
      });
      map.fitBounds(bounds); 
    }
  }, [routes, map]); 

  const onLoad = (mapInstance) => {
    setMap(mapInstance); 
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="AIzaSyBOWbRsEmlaL66aRgwmg3jlyijpRSs3zm0">
        <GoogleMap
          onLoad={onLoad} 
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
        >
          {routes.map((route) => {
            const path = getPathForRoute(route);
            return (
              path.length > 0 && (
                <Polyline
                  key={route.id}
                  path={path}
                  options={{
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                  }}
                />
              )
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;
