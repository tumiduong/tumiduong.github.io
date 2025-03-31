import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julie Duong / About',
  description: 'Portfolio site for github user tumiduong.',
};

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.blurb}>
        <span>
          Hi, I&apos;m Julie, welcome to my page. The theme is based on the
          weather where I am currently based, in Montreal!
        </span>
        <span>
          A quick career overview: I&apos;m a full-stack developer who
          specializes mostly in front-end. I am a bootcamp graduate from
          Lighthouse Labs, and I have been a developer since 2019!
        </span>
        <span>
          In my free time, you can find me tending to my houseplants, gaming, or
          hanging out with my pets: two shibas and a cat. I also love exploring
          craftsy hobbies, and I always end up picking up a new obsession each
          year.
        </span>
      </div>
    </div>
  );
}
