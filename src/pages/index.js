import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`"${text}" をコピーしました！`);
  });
}

function ServerAddressCard({ icon, label, address }) {
  return (
    <div
      className={styles.card}
      onClick={() => copyToClipboard(address)}
      role="button"
      tabIndex="0"
    >
      <div className={styles.iconContainer}>
        <img src={icon} alt={`${label} icon`} className={styles.icon} />
      </div>
      <div>
        <div className={styles.label}>{label}</div>
        <div className={styles.address}>{address}</div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.serverAddresses}>
          <ServerAddressCard
            icon="path/to/wifi-icon.png"
            label="JAVA版"
            address="24san.org"
          />
          <ServerAddressCard
            icon="path/to/wifi-icon.png"
            label="統合版アドレス"
            address="24san.org"
          />
          <ServerAddressCard
            icon="path/to/port-icon.png"
            label="統合版ポート"
            address="19132"
          />
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
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
