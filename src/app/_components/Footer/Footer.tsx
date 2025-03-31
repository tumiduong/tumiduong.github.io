import { GitHub, LinkedIn, Email, FmdGood } from '@mui/icons-material';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <FmdGood />
        Montreal
      </div>
      <div className={styles.footerItem}>
        <GitHub />
        <a href='https://github.com/tumiduong'>tumiduong</a>
      </div>
      <div className={styles.footerItem}>
        <LinkedIn />
        <a href='https://www.linkedin.com/in/tumiduong/'>tumiduong</a>
      </div>
      <div className={styles.footerItem}>
        <Email />
        <a href='mailto:duong.julie@live.com'>duong.julie@live.com</a>
      </div>
    </div>
  );
};
