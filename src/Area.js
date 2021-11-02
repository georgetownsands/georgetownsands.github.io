import React, { useEffect } from "react";
import {
  SECTION_RESTAURANTS,
  SECTION_SHOPPING,
  MODE_SEARCH,
  SECTION_RENT,
  SECTION_ACTIVITIES,
} from "./Constants";
import { LoadAreaData } from "./LoadData";
import AreaItemPaper from "./AreaItemPaper";
import Grid from "@material-ui/core/Grid";

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
  return (
    <div>
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
                        <AreaItemPaper areaItem={d}></AreaItemPaper>
                      )}
                      <Grid container spacing={1}>
                        {d.detail
                          .filter((d2) =>
                            includeAreaItem(d2, sectionId, searchValue)
                          )
                          .map((d2) => (
                            <AreaItemPaper
                              key={d2.id}
                              areaItem={d2}
                            ></AreaItemPaper>
                          ))}
                      </Grid>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
