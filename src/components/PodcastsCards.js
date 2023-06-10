import React from "react";
import styles from './PodcastsCards.module.css';


function PodcastsCards({ podcast }) {
  const { title } = podcast;
  const author = podcast["im:artist"].label;
  const image = podcast["im:image"][2].label;
  return (
    <div className={styles.Card}>
      <img src={image} />
      <div className={styles.Text}>
        <h2>{title.label.toUpperCase()}</h2>
        <p>AUTHOR: {author}</p>
      </div>
    </div>
  );

}

export default PodcastsCards;
