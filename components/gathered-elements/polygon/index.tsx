import { useState } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const polygonOptions = {
  fillColor: "#FF0000",
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillOpacity: 0.35,
  editable: true,
};

const initialPath = [
  { lat: 37.7751, lng: -122.4183 },
  { lat: 37.7748, lng: -122.4143 },
  { lat: 37.7718, lng: -122.4144 },
  { lat: 37.7722, lng: -122.4184 },
];

export default function MapPage() {
  const [path, setPath] = useState(initialPath);

  const handlePolygonEdit = (e) => {
    const updatedPath = e.getPath().getArray();
    setPath(updatedPath);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDdeJg5A7V0IfzbHy4mv7EGAxG_MTpHFs0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Polygon
          paths={path}
          options={polygonOptions}
          onEdit={handlePolygonEdit}
        />
      </GoogleMap>
    </LoadScript>
  );
}
