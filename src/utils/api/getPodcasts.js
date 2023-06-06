import { TOP_PODCASTS } from "../../constants/API";

export const getPodcasts = async () => {
  const podcasts = await fetch(TOP_PODCASTS);
  return podcasts.json();
}