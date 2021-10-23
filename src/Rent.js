import React from "react";
import { SECTION_RENT } from "./Constants";

import { useStyles } from "./Styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Rent({ sectionId, rentalUnits }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_RENT && (
        <div>
          <div className={classes.root}>
            <h3>Rent</h3>
          </div>
          {rentalUnits.map((rentalUnit) => (
            <div key={rentalUnit.id}>
              <Card className={classes.heading} variant="outlined">
                <CardContent>
                  <Typography variant="h6" color="textPrimary">
                    <a href={rentalUnit.webSite} target="_blank" rel="noreferrer">
                      {rentalUnit.name}
                    </a>
                  </Typography>
                  <Typography className={classes.heading} color="textPrimary">
                    {rentalUnit.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
