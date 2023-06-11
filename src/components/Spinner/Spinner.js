import styles from './Spinner.module.css';

const Spinner = ({ loading }) => loading ? <div className={styles.Spinner} /> : null

export default Spinner;
