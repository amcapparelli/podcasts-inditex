import React from "react";
import { useNavigate } from "react-router-dom";

const PodcastEpisodeListTable = ({ podcastContentList }) => {
  const navigate = useNavigate();
  if (!podcastContentList?.length) return;

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
  const handleClick = (podcastId, episodeId) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`);
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {podcastContentList?.map(podcast => (
          <tr key={podcast.title} onClick={() => handleClick(podcast.podcastId, podcast.trackId)}>
            <td>{podcast.title}</td>
            <td>{getFormattedDate(podcast.date)}</td>
            <td>{formatMilliseconds(podcast.duration)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PodcastEpisodeListTable;