import React from "react";
import { useQuery } from "react-query";

import { getPodcasts } from '../utils/api/getPodcasts';
import { PodcastsCards } from "../components";
import styles from './Home.module.css';


function Home() {
  const { data, status } = useQuery('podcasts', getPodcasts, {
    cacheTime: 86400000, // 24 hours in milliseconds
  });
  const podcasts = data?.feed.entry;
  return (
    <div className={styles.container}>
      {
        podcasts?.length && podcasts.map(podcast =>
          <PodcastsCards key={podcast.id.attributes["im:id"]} podcast={podcast} />
        )
      }

    </div>
  );
}

export default Home;
