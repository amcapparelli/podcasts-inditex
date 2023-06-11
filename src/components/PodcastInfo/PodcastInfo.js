import styles from './PodcastInfo.module.css';


const PodcastInfo = ({ image, description }) => {
  return (
    <div className={styles.PodcastGeneraInfo}>
      <img src={image} />
      <h3>Description: </h3>
      <p>{description}</p>
    </div>
  )
};

export default PodcastInfo;
