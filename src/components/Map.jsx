import GoogleMapReact from "google-map-react";
import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";


const Map = () => {
  const initialCoordinates = { lat: 41.35582074386323, lng: 69.24943463933324 };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={initialCoordinates}
        center={initialCoordinates}
        defaultZoom={14}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <div
          lat={initialCoordinates.lat}
          lng={initialCoordinates.lng}
        >
          {windowWidth < 640 ? (
            <FaLocationDot className="text-2xl cursor-pointer text-red-600" />
          ) : (
            <Paper
              elevation={3}
              className="p-2 flex flex-col justify-center w-[150px] h-[200px] gap-2"
            >
              <Typography>DELIXI Электрика Пневматика</Typography>
              <img
                className="cursor-pointer w-full h-[80px] object-cover"
                src={
                  "https://lh5.googleusercontent.com/p/AF1QipNKiuwgrREZDOcUCcvdSgJP14YBxLrI6Bi9y1CU=w408-h544-k-no"
                }
                alt=""
              />
              <Rating name="read-only" size="small" value={5} readOnly />
            </Paper>
          )}
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default Map;
