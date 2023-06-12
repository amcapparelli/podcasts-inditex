import React from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';

import { getPodcastContent } from '../../utils/getPodcastContent';
import { getPodcastDetail } from '../../utils/api/getPodcasts';
import { PodcastEpisodeListTable, PodcastInfo, Spinner } from "../../components";
import styles from './PodcastDetail.module.css';


function PodcastDetail() {
  let { podcastId } = useParams();
  const { data, isLoading, error } = useQuery(['podcastDetail', { id: podcastId }], () => getPodcastDetail(podcastId), {
    cacheTime: 86400000, // 24 hours in milliseconds
  });
  if (error) {
    console.log(`[Error en Podcast/podcastId:${podcastId}]`, error);
  }
  const podcast = data?.results[0];
  const podcastContent = getPodcastContent(podcast, podcastId);
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
      <Spinner loading={isLoading} />
      {
        podcast &&
        <>
          <PodcastInfo
            image={podcastContent.image}
            title={podcastContent.title}
            artist={podcastContent.artist}
            description={podcastContent.description}
          />
          <div className={styles.EpisodesListContainer}>
            <div className={styles.EpisodesNumber}>
              <span>Episodes: {podcastContent.trackCount}</span>
            </div>
            <div className={styles.EpisodesList}>
              <PodcastEpisodeListTable podcastContentList={podcastContentList} />
            </div>
          </div>
        </>
      }
    </div>

  );
}

export default PodcastDetail;
