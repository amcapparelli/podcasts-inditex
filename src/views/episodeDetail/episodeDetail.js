import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";

import { getPodcastDetail } from '../../utils/api/getPodcasts';
import { getPodcastContent } from '../../utils/getPodcastContent';
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
  if (data === undefined) return;
  const podcast = data.results[0];
  const { image, title, artist, description } = getPodcastContent(podcast, podcastId);
  const episode = data.results.find(episode => episode.trackId === Number(episodeId));
  const episodeDescription = episode.description;

  return (
    <div className={styles.EpisodeContainer}>
      <Spinner loading={status === "loading"} />
      <PodcastInfo
        image={image}
        title={title}
        artist={artist}
        description={description}
      />
      <div className={styles.Episode}>
        <span dangerouslySetInnerHTML={{ __html: episodeDescription }} />
        <div className={styles.Audio}>
          <audio controls>
            <source src={episode.episodeUrl} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>

  );
}

export default EpisodeDetail;
