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
import Typography from "@material-ui/core/Typography";
import { LoadAreaData } from "./LoadData";
import AreaMap from "./AreaMap";

const initialAreaData = [
  {
    section: 1,
    data: [
      {
        id: 2,
        name: "Restaurants",
        detail: [
          {
            id: 3,
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
                    <div key={d.id}>
                      {sectionId !== MODE_SEARCH && (
                        <Card
                          
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
                              <Typography>{d2.address}</Typography>
                              <Typography>
                                <a href={"tel:" + d2.phoneNumber}>
                                  {d2.phoneNumber}
                                </a>
                              </Typography>
                              <AreaMap areaItem={d2} />
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
