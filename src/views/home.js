import React, { useState } from "react";
import { useQuery } from "react-query";

import { getPodcasts } from '../utils/api/getPodcasts';
import { getFilteredPodcasts } from "../utils/getFilteredPodcasts";
import { PodcastsCards, Search } from "../components";
import styles from './Home.module.css';


function Home() {
  const { data, status } = useQuery('podcasts', getPodcasts, {
    cacheTime: 86400000, // 24 hours in milliseconds
  });
  const [input, setInput] = useState("");

  const podcasts = data?.feed.entry;
  const handleInputSearchChange = (e) => {
    const { value } = e.target;
    setInput(value);
  }
  const filteredPodcasts = input.length > 0
    ? getFilteredPodcasts(podcasts, input)
    : podcasts

  return (
    <div>
      <Search
        handleChange={handleInputSearchChange}
        input={input}
        totalElements={filteredPodcasts?.length}
      />
      <div className={styles.PodcastsContainer}>
        {
          !!filteredPodcasts?.length && filteredPodcasts.map(podcast =>
            <PodcastsCards key={podcast.id.attributes["im:id"]} podcast={podcast} />
          )
        }
      </div>
    </div>
  );
}

export default Home;
