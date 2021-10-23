import React from "react";
import { SECTION_CONTACT } from "./Constants";

import { useStyles } from "./Styles";

export default function Contact({ sectionId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {sectionId === SECTION_CONTACT && (
        <div className={classes.root}>
          <div className={classes.root}>
            {sectionId === SECTION_CONTACT && (
              <div>
                <div className={classes.root}>
                  <h3>Contact us</h3>                  
                </div>
                <div className={classes.body}>
                  Email us at info @ moscaville.com
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
