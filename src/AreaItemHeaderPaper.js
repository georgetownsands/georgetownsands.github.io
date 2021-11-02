import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";

export default function AreaItemPaper(areaItem) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box p={1}>
          <Typography variant="h6" color="textPrimary">
              {areaItem.areaItem.name}
          </Typography>
          <Typography>
            {areaItem.areaItem.description}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
