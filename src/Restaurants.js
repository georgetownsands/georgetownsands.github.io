import React from "react";
import { SECTION_RESTAURANTS } from "./Constants";

import { useStyles } from "./Styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Restaurants({ sectionId, restaurants }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_RESTAURANTS && (
        <div>
          <div className={classes.root}>
            <h3>Restaurants</h3>
          </div>
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className={classes.heading}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary">
                <a href={restaurant.webSite} target="_blank" rel="noreferrer">{restaurant.name}</a>
                </Typography>
                <Typography className={classes.heading} color="textPrimary">
                  {restaurant.description}
                </Typography>
                <Typography>
                  <a href={"http://maps.google.com/?q=" + restaurant.address}>
                    {restaurant.address}
                  </a>
                </Typography>
                <Typography>
                  <a href={"tel:" + restaurant.phoneNumber}>
                    {restaurant.phoneNumber}
                  </a>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
