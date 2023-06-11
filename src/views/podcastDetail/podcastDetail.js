import React from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';

import { getPodcastContent } from '../../utils/getPodcastContent';
import { getPodcastDetail } from '../../utils/api/getPodcasts';
import { PodcastEpisodeListTable, PodcastInfo, Spinner } from "../../components";
import styles from './PodcastDetail.module.css';


function PodcastDetail() {
  let { podcastId } = useParams();
  const { data, status, error } = useQuery(['podcastDetail', { id: podcastId }], () => getPodcastDetail(podcastId), {
    cacheTime: 86400000, // 24 hours in milliseconds
  });
  if (error) {
    console.log(`[Error en Podcast/podcastId:${podcastId}]`, error);
  }
  if (data === undefined) return;
  const podcast = data.results[0];
  const { image, title, artist, trackCount, description } = getPodcastContent(podcast, podcastId);
  const podcastContentList = data?.results.map((data) => {
    return {
      title: data.trackName,
      date: data.releaseDate,
      duration: data.trackTimeMillis,
      trackId: data.trackId,
      podcastId
    }
  });

  return (
    <div className={styles.PodcastDetailContainer}>
      <Spinner loading={status === "loading"} />
      <PodcastInfo
        image={image}
        title={title}
        artist={artist}
        description={description}
      />
      <div className={styles.EpisodesListContainer}>
        <div className={styles.EpisodesNumber}>
          <span>Episodes: {trackCount}</span>
        </div>
        <div className={styles.EpisodesList}>
          <PodcastEpisodeListTable podcastContentList={podcastContentList} />
        </div>
      </div>
    </div>

  );
}

export default PodcastDetail;
