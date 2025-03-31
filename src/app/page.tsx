import styles from './page.module.scss';
import type { Metadata } from 'next';
import { Paytone_One } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Julie Duong',
  description: 'Portfolio site for github user tumiduong.',
};

const paytoneOne = Paytone_One({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className={styles.page}>
      <span className={`${styles.name} ${paytoneOne.className}`}>
        Julie Duong
      </span>
      <span className={styles.blurb}>
        As a full-stack developer with a creative foundation from my background
        in the cosmetics industry, I bring a unique perspective to coding. My
        strong curiosity and attention to detail drive me to thoroughly explore
        programming languages, enhancing my understanding of each. With
        experience in both collaborative and independent environments, I excel
        in team settings as well as when working on my own.
      </span>
    </div>
  );
}
