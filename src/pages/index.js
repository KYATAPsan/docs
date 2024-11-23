import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`"${text}" をコピーしました！`);
  });
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            サーバーを見る ➜
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ marginLeft: '10px' }}>
            サーバーの仕様を確認する
          </Link>
        </div>
        {/* サーバーアドレス表示部分 */}
        <div style={{ marginTop: '20px', textAlign: 'left', color: 'white' }}>
          <h3>サーバーアドレス</h3>
          <p
            onClick={() => copyToClipboard('24san.org')}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            JAVA版: 24san.org
          </p>
          <p
            onClick={() => copyToClipboard('24san.org')}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            統合版: 24san.org
          </p>
          <p
            onClick={() => copyToClipboard('19132')}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            統合版ポート: 19132
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
