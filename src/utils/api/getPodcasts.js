import { TOP_PODCASTS, PODCAST_DETAIL } from "../../constants/API";

export const getPodcasts = async () => {
  const podcasts = await fetch(TOP_PODCASTS);
  return podcasts.json();
}

export const getPodcastDetail = async (podcastId) => {
  const urlWithParams = `${PODCAST_DETAIL}?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  const podcast = await fetch(urlWithParams);
  return podcast.json();
}