import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";

import { getPodcastDetail } from '../../utils/api/getPodcasts';
import { PodcastInfo, Spinner } from "../../components";

import styles from './EpisodeDetail.module.css';


function EpisodeDetail() {
  const { podcastId, episodeId } = useParams();
  const { data, status, error } = useQuery(['podcastDetail', { id: podcastId }], () => getPodcastDetail(podcastId), {
    cacheTime: 86400000, // 24 hours in milliseconds
  });
  if (error) {
    console.log(`[Error en Episode/episodeId:${episodeId}]`, error);
  }
  const image = data?.results[0].artworkUrl100;
  const description = data?.results[0].collectionName;
  const episode = data?.results.find(episode => episode.trackId === Number(episodeId));
  const episodeDescription = episode.description;

  return (
    <div className={styles.EpisodeContainer}>
      <Spinner loading={status === "loading"} />
      <PodcastInfo image={image} description={description} />
      <div className={styles.Episode}>
        <span dangerouslySetInnerHTML={{ __html: episodeDescription }} />
        <div className={styles.Audio}>
          <audio controls>
            <source src={episode.episodeUrl} type="audio/mp3" />
            <p>Su navegador no es compatible con audio HTML5. Aquí hay un <a href="viper.mp3">enlace al audio</a> en su lugar.</p>
          </audio>
        </div>
      </div>
    </div>

  );
}

export default EpisodeDetail;
