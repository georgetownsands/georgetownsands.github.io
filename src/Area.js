import React, { useEffect } from "react";
import { SECTION_RESTAURANTS, SECTION_SHOPPING, MODE_SEARCH } from "./Constants";

import { useStyles } from "./Styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { LoadAreaData } from "./LoadData";

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
          },
        ],
      },
    ],
  },
];

const includeAreaItem = (areaItem, sectionId, currentSectionId, searchValue) => {
  var result = false;
  console.log("sectionId: " + sectionId);
  console.log("currentSectionId: " + currentSectionId);
  switch (currentSectionId) {
      case MODE_SEARCH:
          if (searchValue && searchValue.trim().length > 2) {
              var searchValues = searchValue.trim().toLowerCase().split(" ");
              searchValues.map((value) => result = (result ||
                  (
                      (value.length > 0) &&
                      ((areaItem.itemName && (areaItem.itemName.toLowerCase().indexOf(value) >= 0)) ||
                          (areaItem.description && (areaItem.description.toLowerCase().indexOf(value) >= 0)) ||
                          (areaItem.searchWords && (areaItem.searchWords.toLowerCase().indexOf(value) >= 0)))
                  )
              ));
              if (result) {
                  break;
              }
          }
          break;  
      default:
          result = currentSectionId === sectionId;
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
      {(sectionId === SECTION_RESTAURANTS || sectionId === SECTION_SHOPPING) &&
        areaData && (
          <div>
            {areaData.map((data) => (
              <div key={data.section}>
                {data.data.filter(d => includeAreaItem(d, data.section, sectionId, searchValue))
                .map((d) => (
                  <div>
                    <Card
                      key={d.id}
                      className={classes.heading}
                      variant="outlined"
                    >
                      <CardContent>
                        <Typography variant="h6" color="textPrimary">
                          <a href={d.webSite} target="_blank" rel="noreferrer">
                            {d.name}
                          </a>
                        </Typography>
                      </CardContent>
                    </Card>
                    {d.detail.map((d2) => (
                      <Card key={d2.id}>
                        <CardContent>
                          <Typography
                            className={classes.heading}
                            color="textPrimary"
                          >
                            {d2.description}
                          </Typography>
                          <Typography>
                            <a href={"http://maps.google.com/?q=" + d2.address}>
                              {d2.address}
                            </a>
                          </Typography>
                          <Typography>
                            <a href={"tel:" + d2.phoneNumber}>
                              {d2.phoneNumber}
                            </a>
                          </Typography>
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
