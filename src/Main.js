import React from "react";
import { SECTION_MAIN } from "./Constants";

import { useStyles } from "./Styles";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
export default function Main({ sectionId }) {
  const classes = useStyles();
  const images = [
    {
      original: '/images/georgetownsands.jpeg',
    },
    {
      original: '/images/GeorgetownSandsBeach.jpg',
    },
  ];
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
            An oceanside townhome community in the town of Duck, North Carolina.
          </div>
          <div className={classes.bodycentered}>
            <ImageGallery items={images} />
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
