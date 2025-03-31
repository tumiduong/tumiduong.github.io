import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julie Duong / Tech',
  description: 'Portfolio site for github user tumiduong.',
};

export default function Tech() {
  return (
    <div className={styles.page}>
      <ul>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Python</li>
      </ul>
      <ul>
        <li>ReactJS</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>Vue.js</li>
        <li>Vuex</li>
        <li>GraphQL</li>
        <li>gRPC</li>
      </ul>
      <ul>
        <li>Git</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>GCP</li>
      </ul>
    </div>
  );
}
