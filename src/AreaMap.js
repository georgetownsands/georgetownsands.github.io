import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Map from "@material-ui/icons/Map";
import MapOutlined from "@material-ui/icons/MapOutlined";
import IconButton from "@material-ui/core/IconButton";

const startingLocation = "127 Georgetown Sands Rd, Duck, NC 27949";
const showMap = (areaItem, showDirections) => {
  if (showDirections) {
    window.open(
      `https://www.google.com/maps/dir/${startingLocation}/${areaItem.address}`
    );
  } else {
    window.open(`http://maps.google.com/?q=${areaItem.address}`);
  }
};

export default function AreaMap(areaItem) {
  return (
    <div>
      {areaItem && areaItem.areaItem.address && (
        <CardActions>
          <IconButton
            aria-label="map"
            onClick={() => {
              showMap(areaItem, false);
            }}
          >
            <Map />
          </IconButton>
          <IconButton
            aria-label="directions"
            onClick={() => {
              showMap(areaItem, true);
            }}
          >
            <MapOutlined />
          </IconButton>
        </CardActions>
      )}
    </div>
  );
}
