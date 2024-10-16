import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline} - A thriving community for Minecraft players.
          Join us to explore, build, and conquer in the world of 24san!
        </p>
        <div className={clsx(styles.buttons, 'flex justify-between')}>
          {/* 左側の「サーバーに参加する」ボタン */}
          <Link
            className="button button--primary button--lg"
            to="/join">
            サーバーに参加する ⏱️
          </Link>
          {/* 右側の「仕様・コマンドを見る」ボタン */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/commands">
            仕様・コマンドを見る 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Join the 24san Minecraft Server and experience one of the most dynamic and engaging Minecraft communities!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
