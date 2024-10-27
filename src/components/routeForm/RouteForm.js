import React, { useState } from 'react';
import FileUploader from '../fileUploader/FileUploader';
import StopList from '../stopList/StopList';
import { validateLatitude, validateLongitude } from './../../utils/coordinateValidator';
import './RouteForm.css';

const RouteForm = ({ onAddRoute }) => {
  const [formData, setFormData] = useState({
    routeName: '',
    direction: 'UP',
    status: 'Active',
    stops: [],
    stopName: '',
    latitude: '',
    longitude: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddStop = () => {
    const { stopName, latitude, longitude, stops } = formData;

    if (!stopName || !validateLatitude(latitude) || !validateLongitude(longitude)) {
      alert('Please enter valid stop details.');
      return;
    }

    const newStop = { id: stops.length + 1, name: stopName, lat: parseFloat(latitude), lng: parseFloat(longitude) };
    setFormData((prevData) => ({ ...prevData, stops: [...stops, newStop], stopName: '', latitude: '', longitude: '' }));
  };

  const handleSubmit = () => {
    const { routeName, direction, status, stops } = formData;
    
    if (!routeName || stops.length === 0) return alert('Please fill in all required fields.');

    const newRoute = { id: Math.random(), name: routeName, direction, status, stops };
    onAddRoute(newRoute);

    setFormData({ routeName: '', direction: 'UP', status: 'Active', stops: [], stopName: '', latitude: '', longitude: '' });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Route Name* :</label>
        <input name="routeName" value={formData.routeName} type="text" onChange={handleInputChange} required />

        <label>Direction:</label>
        <select name="direction" value={formData.direction} onChange={handleInputChange}>
          <option value="UP">UP</option>
          <option value="DOWN">DOWN</option>
        </select>

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleInputChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <h3>Add Stop:</h3>
        <input name="stopName" placeholder="Stop Name" type="text" value={formData.stopName} onChange={handleInputChange} required />
        <input name="latitude" type="number" step="any" placeholder="Latitude" value={formData.latitude} onChange={handleInputChange} required />
        <input name="longitude" type="number" step="any" placeholder="Longitude" value={formData.longitude} onChange={handleInputChange} required />
        <button type="button" id="addStopButton" onClick={handleAddStop}>Add Stop</button>

        <StopList stops={formData.stops} />

        <label htmlFor="batchUpload" style={{ marginTop: '20px', fontWeight: 'bold' }}>Batch Upload:</label>
        <FileUploader id="batchUpload" onFileUpload={(file) => setFormData({ ...formData, file })} />

        <button type="button" onClick={handleSubmit}>Create Route</button>
      </form>
    </div>
  );
};

export default RouteForm;
