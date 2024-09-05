import { useEffect } from 'react';

const MapComponent = () => {
  const mapContainerStyle = { width: '100%', height: '400px' };
  const center = { lat: -23.55052, lng: -46.633308 };

  useEffect(() => {
    const map = new google.maps.Map(document.getElementById('map')!, {
      zoom: 15,
      center
    });

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center
    });
  }, []);

  return <div id="map" style={mapContainerStyle}></div>;
};

export default MapComponent;
