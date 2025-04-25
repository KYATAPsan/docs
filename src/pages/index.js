import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import React, { useState, useEffect } from 'react'; // useEffect を追加！
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
        <Notification isVisible={notificationVisible} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // ✅ チャンネルトークを追加
  useEffect(() => {
    if (window.ChannelIO) return;

    (function () {
      var w = window;
      if (w.ChannelIO) {
        return w.console.error("ChannelIO script included twice.");
      }
      var ch = function () {
        ch.c(arguments);
      };
      ch.q = [];
      ch.c = function (args) {
        ch.q.push(args);
      };
      w.ChannelIO = ch;
      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }
        w.ChannelIOInitialized = true;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        var x = document.getElementsByTagName("script")[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }
      if (document.readyState === "complete") {
        l();
      } else {
        w.addEventListener("DOMContentLoaded", l);
        w.addEventListener("load", l);
      }
    })();

    window.ChannelIO('boot', {
      pluginKey: "40c0d46f-84ba-460b-9686-82ebbc71e8dc"
    });
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
