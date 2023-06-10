export const getFilteredPodcasts = (podcasts, input) => {
  if (input.lenght === 0) return;
  const filteredPodcasts = podcasts.filter(podcast => podcast.title.label
    .toLowerCase()
    .includes(input.toLowerCase())
  );
  console.log("***", filteredPodcasts)
  return filteredPodcasts;
}