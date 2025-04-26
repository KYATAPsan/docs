import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

function copyToClipboard(text, setNotification) {
  navigator.clipboard.writeText(text).then(() => {
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
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
          <div className={styles.serverAddresses}>
            <ServerAddressCard
              icon="/img/wifi-icon.png"
              label="JAVA版"
              address="24san.org"
              setNotification={setNotificationVisible}
            />
            <a href="minecraft://?addExternalServer= 24san Server|24san.org:19132" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <ServerAddressCard
                icon="/img/wifi-icon.png"
                label="統合版アドレス"
                address="24san.org"
                setNotification={setNotificationVisible}
              />
            </a>
          </div>
        <Notification isVisible={notificationVisible} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR中は無視

    const loadChannelIO = () => {
      if (window.ChannelIO) return;

      (function() {
        var w = window;
        var ch = function() {
          ch.c(arguments);
        };
        ch.q = [];
        ch.c = function(args) {
          ch.q.push(args);
        };
        w.ChannelIO = ch;

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.onload = function() {
          if (window.ChannelIO) {
            window.ChannelIO('boot', {
              pluginKey: '40c0d46f-84ba-460b-9686-82ebbc71e8dc',
            });
          }
        };
        document.head.appendChild(s);
      })();
    };

    if (document.readyState === 'complete') {
      loadChannelIO();
    } else {
      window.addEventListener('load', loadChannelIO);
      return () => {
        window.removeEventListener('load', loadChannelIO);
      };
    }
  }, []);

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
