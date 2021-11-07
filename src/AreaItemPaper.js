import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";
import AreaMap from "./AreaMap";

export default function AreaItemPaper(areaItem) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper className={classes.paper} elevation={3}>
        <Box p={1}>
          <Typography variant="h6" color="textPrimary">
            <a
              href={areaItem.areaItem.webSite}
              target="_blank"
              rel="noreferrer"
            >
              {areaItem.areaItem.name}
            </a>
          </Typography>
          <Typography>
            {areaItem.areaItem.description}
          </Typography>
          <Typography>{areaItem.areaItem.address}</Typography>
          <Typography>
            <a href={"tel:" + areaItem.areaItem.phoneNumber}>
              {areaItem.areaItem.phoneNumber}
            </a>
          </Typography>
          <div>
            <AreaMap areaItem={areaItem.areaItem} />
          </div>
        </Box>
      </Paper>
    </Grid>
  );
}
