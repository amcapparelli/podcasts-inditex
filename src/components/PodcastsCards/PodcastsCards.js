import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './PodcastsCards.module.css';


function PodcastsCards({ podcast }) {
  const navigate = useNavigate();

  const { title } = podcast;
  const author = podcast["im:artist"].label;
  const image = podcast["im:image"][2].label;
  const podcastId = podcast.id.attributes["im:id"];
  const handleClick = () => {
    navigate(`/podcast/${podcastId}`);
  }
  return (
    <div className={styles.Card} onClick={handleClick}>
      <img src={image} />
      <div className={styles.Text}>
        <h2>{title.label.toUpperCase()}</h2>
        <p>AUTHOR: {author}</p>
      </div>
    </div>
  );

}

export default PodcastsCards;
