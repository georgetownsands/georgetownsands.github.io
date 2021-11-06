import React from "react";
import { SECTION_MAIN } from "./Constants";

import { useStyles } from "./Styles";
import ImageGallery from "react-image-gallery";
import Paper from "@material-ui/core/Paper";
import "react-image-gallery/styles/css/image-gallery.css";
export default function Main({ sectionId }) {
  const classes = useStyles();
  const images = [
    {
      original: "/images/georgetownsands.jpeg",
    },
    {
      original: "/images/GeorgetownSandsBeach.jpg",
    },
  ];
  return (
    <div className={classes.root}>
      {sectionId === SECTION_MAIN && (
        <div>
          <div className={classes.bodycentered}>
            An oceanside townhome community
          </div>
          <div className={classes.bodycentered}>
            located in the town of Duck, North Carolina - Outerbanks
          </div>
          <Paper className={classes.paper}>
            <ImageGallery className={classes.media} items={images} />
          </Paper>
          <Paper className={classes.paper}>
            Georgetown Sands townhomes are located at the edge of the town of
            Duck, NC within walking distance of great restaurants, shopping,
            Atlantic Ocean beach and Currituck Sound access. Relax and enjoy a
            variety of activities including walking, running, tennis,
            watersports, and memorable sunrises and sunsets.
          </Paper>
          <Paper className={classes.paper}>
            Ammenities include:
            <div>community pool</div>
            <div>tennis courts</div>
            <div>convenient beach access</div>
            <div>walking distance from Duck restaurants, shopping and much  more</div>
          </Paper>
        </div>
      )}
    </div>
  );
}
