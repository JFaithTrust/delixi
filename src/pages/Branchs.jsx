import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const center = useMemo(
    () => ({ lat: 41.35582074386323, lng: 69.24943463933324 }),
    []
  );

  function CustomMarker({ position, text }) {
    return (
      <>
        <Marker position={position} />
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -100%)", // Center text above the marker
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {text}
        </div>
      </>
    );
  }

  return (
    <div className="top-[78px] relative">
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        <CustomMarker position={center} text="Custom Text" />
      </GoogleMap>
    </div>
  );
}

const Branchs = () => {
  // AIzaSyAcfsk4C5rdqDe-TAtNFEQjcC6Vsak-zu4
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAcfsk4C5rdqDe-TAtNFEQjcC6Vsak-zu4",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default Branchs;

// import React from "react";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";

// const Branchs = () => {
//   const mapStyles = {
//     width: "100%",
//     height: "100vh",
//   };

//   const defaultCenter = {
//     lat: 41.35582074386323,
//     lng: 69.24943463933324,
//   };

//   const overlayPosition = {
//     lat: 41.35582074386323,
//     lng: 69.24943463933324,
//   };

//   const renderOverlayView = (props) => {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           width: "100px",
//           height: "50px",
//           backgroundColor: "red",
//           borderRadius: "5px",
//           padding: "5px",
//         }}
//       >
//         Custom Overlay Content
//       </div>
//     );
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAcfsk4C5rdqDe-TAtNFEQjcC6Vsak-zu4">
//       <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
//         <OverlayView
//           position={overlayPosition}
//           getPixelPositionOffset={(width, height) => ({
//             x: -width / 2,
//             y: -height,
//           })}
//         >
//           {renderOverlayView}
//         </OverlayView>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Branchs;
