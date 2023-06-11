import styles from './PodcastInfo.module.css';


const PodcastInfo = ({ image, title, artist, description }) => {
  return (
    <div className={styles.PodcastGeneraInfoContainer}>
      <img src={image} />
      <div className={styles.PodcastGeneraInfoText}>
        <h3>{title}</h3>
        <p>by {artist}</p>
      </div>
      <div className={styles.PodcastGeneraInfoText}>
        <h3>Description: </h3>
        <p>{description}</p>
      </div>
    </div>
  )
};

export default PodcastInfo;
