import React from "react";
import { SECTION_SHOPPING } from "./Constants";

import { useStyles } from "./Styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Shopping({ sectionId, shops }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_SHOPPING && (
        <div>
          <div className={classes.root}>
            <h3>Shopping</h3>
          </div>
          {shops.map((shop) => (
            <div key={shop.id}>
              <Card className={classes.heading} variant="outlined">
                <CardContent>
                  <Typography variant="h6" color="textPrimary">
                    {shop.name}
                  </Typography>
                </CardContent>
              </Card>
              {shop.detail.map((d) => (
                <Card key={d.id} className={classes.heading} variant="outlined">
                  <CardContent>
                    <Typography variant="h6" color="textPrimary">
                      <a href={d.webSite} target="_blank" rel="noreferrer">{d.name}</a>
                    </Typography>
                    <Typography className={classes.heading} color="textPrimary">
                      {d.description}
                    </Typography>
                    <Typography>
                      <a href={"http://maps.google.com/?q=" + d.address}>
                        {d.address}
                      </a>
                    </Typography>
                    <Typography>
                      <a href={"tel:" + d.phoneNumber}>{d.phoneNumber}</a>
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
