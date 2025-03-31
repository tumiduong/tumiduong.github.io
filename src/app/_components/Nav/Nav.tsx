import styles from './Nav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <Link
        href='/'
        className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}
      >
        Home
      </Link>
      <Link
        href='/about'
        className={`${styles.navItem} ${
          pathname === '/about' ? styles.active : ''
        }`}
      >
        About
      </Link>
      <Link
        href='/tech'
        className={`${styles.navItem} ${
          pathname === '/tech' ? styles.active : ''
        }`}
      >
        Tech
      </Link>
    </div>
  );
};
