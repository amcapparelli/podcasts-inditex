import React from "react";
import { Link } from "react-router-dom";

const PodcastEpisodeListTable = ({ podcastContentList }) => {
  if (!podcastContentList?.length) return;

  const [firstEpisode, ...restEpisodes] = podcastContentList;

  const getFormattedDate = (ISODate) => {
    const date = new Date(ISODate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  function formatMilliseconds(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {restEpisodes?.map(podcast => (
          <tr key={podcast.title}>
            <td><Link to={`/podcast/${podcast.podcastId}/episode/${podcast.trackId}`}>{podcast.title}</Link></td>
            <td>{getFormattedDate(podcast.date)}</td>
            <td>{formatMilliseconds(podcast.duration)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PodcastEpisodeListTable;