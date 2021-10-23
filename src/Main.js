import React from "react";
import { SECTION_MAIN } from "./Constants";

import { useStyles } from "./Styles";

import georgetownsands from "./georgetownsands.jpeg";

export default function Main({ sectionId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_MAIN && (
        <div>
          <div className={classes.root}>
            <h3>Georgetown Sands Townhomes</h3>
          </div>
          <div className={classes.root}>
            <h3>Duck, NC - Outerbanks</h3>
          </div>
          <div className={classes.bodycentered}>
            A townhome community in the town of Duck, North Carolina.
          </div>
          <div className={classes.bodycentered}>
            <img src={georgetownsands} className={classes.img} alt="example" width="75%" />
          </div>
          <div className={classes.bodycentered}>
            <ul>
              <li>community pool</li>
              <li>tennis courts</li>
              <li>convenient beach access</li>
              <li>walking distance from Duck restaurants and shopping</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
