import React from "react";
import styles from './PodcastsCards.module.css';


function PodcastsCards({ podcast }) {
  const { title } = podcast;
  const author = podcast["im:artist"].label;
  const image = podcast["im:image"][2].label;
  return (
    <div className={styles.Card}>
      <img src={image} className={styles.Image} />
      <h2 className={styles.Title}>{title.label.toUpperCase()}</h2>
      <p className={styles.Author}>AUTHOR: {author}</p>
    </div>
  );

}

export default PodcastsCards;
