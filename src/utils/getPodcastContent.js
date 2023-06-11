export const getPodcastContent = (podcast, podcastId) => {
  if (podcast === undefined) return;
  const podcastInfo = JSON.parse(localStorage.getItem("podcasts")).find(podcast => podcast.id.attributes["im:id"
  ] === podcastId);
  const description = podcastInfo.summary.label;
  const image = podcast.artworkUrl100;
  const title = podcast.collectionName;
  const artist = podcast.artistName;
  const trackCount = podcast.trackCount;

  return {
    image,
    title,
    artist,
    trackCount,
    description
  };
}