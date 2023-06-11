import { useNavigate } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Title} onClick={() => navigate('/')}>
      <h1>Podcaster</h1>
    </div>
  )
};

export default Header;
