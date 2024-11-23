import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="mt-4">
          <h3 className="text-white">サーバーアドレス</h3>
          <div className="row align-items-center">
            {/* JAVA版 */}
            <div className="col-2">
              <button
                className="btn btn-secondary"
                onClick={() => copyToClipboard('24san.org')}>
                コピー
              </button>
            </div>
            <div className="col-10 text-white">JAVA版: 24san.org</div>
          </div>
          <div className="row align-items-center mt-2">
            {/* 統合版 */}
            <div className="col-2">
              <button
                className="btn btn-secondary"
                onClick={() => copyToClipboard('24san.org')}>
                コピー
              </button>
            </div>
            <div className="col-10 text-white">統合版: 24san.org</div>
          </div>
          <div className="row align-items-center mt-2">
            {/* 統合版ポート */}
            <div className="col-2">
              <button
                className="btn btn-secondary"
                onClick={() => copyToClipboard('19132')}>
                コピー
              </button>
            </div>
            <div className="col-10 text-white">統合版ポート: 19132</div>
          </div>
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
