import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import React, { useState } from 'react';
import styles from './index.module.css';

function copyToClipboard(text, setNotification) {
  navigator.clipboard.writeText(text).then(() => {
    setNotification(true);
    setTimeout(() => setNotification(false), 2000); // 2秒後に通知を消す
  });
}

function ServerAddressCard({ icon, label, address, setNotification }) {
  return (
    <div
      className={styles.card}
      onClick={() => copyToClipboard(address, setNotification)}
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

function Notification({ isVisible }) {
  return (
    <div className={`${styles.notification} ${isVisible ? styles.visible : ''}`}>
      コピーしました！
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [notificationVisible, setNotificationVisible] = useState(false);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* ボタン部分 */}
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            サーバーを見る ➜
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ marginLeft: '10px' }}
          >
            サーバーの仕様を確認する
          </Link>
        </div>
        {/* サーバーアドレスカード */}
        <div className={styles.serverAddresses}>
          <ServerAddressCard
            icon="path/to/wifi-icon.png"
            label="JAVA版"
            address="24san.org"
            setNotification={setNotificationVisible}
          />
          <ServerAddressCard
            icon="path/to/wifi-icon.png"
            label="統合版アドレス"
            address="24san.org"
            setNotification={setNotificationVisible}
          />
          <ServerAddressCard
            icon="path/to/port-icon.png"
            label="統合版ポート"
            address="19132"
            setNotification={setNotificationVisible}
          />
        </div>
        {/* 通知部分 */}
        <Notification isVisible={notificationVisible} />
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
