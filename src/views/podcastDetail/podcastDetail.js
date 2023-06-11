import React from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';

import { getPodcastDetail } from '../../utils/api/getPodcasts';
import styles from './PodcastDetail.module.css';


function PodcastDetail() {
  let { podcastId } = useParams();
  const { data, status } = useQuery('podcastDetail', () => getPodcastDetail(podcastId), {
    cacheTime: 86400000, // 24 hours in milliseconds
  });
  const image = data?.results[0].artworkUrl100;
  const description = data?.results[0].collectionName;
  const trackCount = data?.results[0].trackCount;



  return (

    <div className={styles.PodcastDetailContainer}>
      <div className={styles.PodcastGeneraInfo}>
        <img src={image} />
        <h3>Description: </h3>
        <p>{description}</p>
      </div>
      <div className={styles.EpisodesListContainer}>
        <div className={styles.EpisodesNumber}>
          <span>Episodes: {trackCount}</span>
        </div>
        <div className={styles.EpisodesList}>
          <ul>

          </ul>
        </div>
      </div>
    </div>

  );
}

export default PodcastDetail;
