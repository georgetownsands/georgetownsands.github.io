import React, { useEffect } from "react";
import {
  SECTION_RESTAURANTS,
  SECTION_SHOPPING,
  MODE_SEARCH,
  SECTION_RENT,
  SECTION_ACTIVITIES,
} from "./Constants";
import { useStyles } from "./Styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { LoadAreaData } from "./LoadData";
import IconButton from "@material-ui/core/IconButton";
import Map from "@material-ui/icons/Map";
import MapOutlined from "@material-ui/icons/MapOutlined";

const initialAreaData = [
  {
    section: "1",
    data: [
      {
        id: "1",
        name: "Restaurants",
        detail: [
          {
            id: 1,
            name: "",
            phoneNumber: "",
            address: "",
            description: "",
            webSite: "",
          },
        ],
      },
    ],
  },
];

const includeAreaItem = (areaItem, currentSectionId, searchValue) => {
  var result = false;
  console.log("searchValue: " + searchValue);
  switch (currentSectionId) {
    case MODE_SEARCH:
      if (searchValue && searchValue.trim().length > 2) {
        var searchValues = searchValue.trim().toLowerCase().split(" ");
        searchValues.map(
          (value) =>
            (result =
              result ||
              (value.length > 0 &&
                ((areaItem.name &&
                  areaItem.name.toLowerCase().indexOf(value) >= 0) ||
                  (areaItem.description &&
                    areaItem.description.toLowerCase().indexOf(value) >= 0) ||
                  (areaItem.searchWords &&
                    areaItem.searchWords.toLowerCase().indexOf(value) >= 0))))
        );
        if (result) {
          break;
        }
      }
      break;
    default:
      result = true;
  }
  return result;
};

const showMap = (areaItem, showDirections) => {
  if (showDirections) {
    window.open(
      `https://www.google.com/maps/dir/127 Georgetown Sands Rd, Duck, NC 27949/${areaItem.address}`
    );
  } else {
    window.open(
      `http://maps.google.com/?q=${areaItem.address}`
    );
  }
};

export default function Area({ sectionId, searchValue }) {
  const [isAreaDataLoaded, setIsAreaDataLoaded] = React.useState(false);
  const [areaData, setAreaData] = React.useState(initialAreaData);
  useEffect(() => {
    if (!isAreaDataLoaded) {
      LoadAreaData(setAreaData);
      setIsAreaDataLoaded(true);
    }
  }, [isAreaDataLoaded]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {(sectionId === SECTION_RESTAURANTS ||
        sectionId === SECTION_SHOPPING ||
        sectionId === SECTION_RENT ||
        sectionId === SECTION_ACTIVITIES ||
        sectionId === MODE_SEARCH) &&
        areaData && (
          <div>
            {areaData.map((data) => (
              <div key={data.section}>
                {data.data
                  .filter(
                    (d) =>
                      data.section === sectionId || sectionId === MODE_SEARCH
                  )
                  .map((d) => (
                    <div>
                      {sectionId !== MODE_SEARCH && (
                        <Card
                          key={d.id}
                          className={classes.heading}
                          variant="outlined"
                        >
                          <CardContent>
                            <Typography variant="h6" color="textPrimary">
                              <a
                                href={d.webSite}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {d.name}
                              </a>
                            </Typography>
                          </CardContent>
                        </Card>
                      )}
                      {d.detail
                        .filter((d2) =>
                          includeAreaItem(d2, sectionId, searchValue)
                        )
                        .map((d2) => (
                          <Card key={d2.id}>
                            <CardContent>
                              <Typography variant="h6" color="textPrimary">
                                <a
                                  href={d2.webSite}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {d2.name}
                                </a>
                              </Typography>
                              <Typography
                                className={classes.heading}
                                color="textPrimary"
                              >
                                {d2.description}
                              </Typography>
                              <Typography>
                                {d2.address}
                              </Typography>
                              <Typography>
                                <a href={"tel:" + d2.phoneNumber}>
                                  {d2.phoneNumber}
                                </a>
                              </Typography>
                              <CardActions>
                              <IconButton
                                  aria-label="map"
                                  onClick={() => {
                                    showMap(d2, false);
                                  }}
                                >
                                  <Map />
                                </IconButton>
                                <IconButton
                                  aria-label="directions"
                                  onClick={() => {
                                    showMap(d2, true);
                                  }}
                                >
                                  <MapOutlined />
                                </IconButton>
                              </CardActions>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
