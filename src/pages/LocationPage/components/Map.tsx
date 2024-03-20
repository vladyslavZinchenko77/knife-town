import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '700px'
  
};

const center = {
  lat: 50.4501,
  lng: 30.5234
};

const Map: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAxZfsLeKadHRGiy-GJYE4cTeqKyrDB0tU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;