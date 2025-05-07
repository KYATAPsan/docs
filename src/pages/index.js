import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import HeroImage from '@site/static/img/Back_KYATAP.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>

        <img src={HeroImage} alt="24san Logo" className={styles.heroImageBackgroundBlur} />
        <div className={styles.textSection}>
          <Heading as="h1" className="hero__title">
              <strong>
                <Translate id="pages.main.title">
                  すべてのプレイヤーがつながる、ひとつの世界
                </Translate>
              </strong>
          </Heading>
          <p className="hero__subtitle">
            <Translate id="pages.main.subtitle">
              Java版も統合版も、24sanサーバーで一緒に遊ぼう
            </Translate>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const w = window;
    if (w.ChannelIO) {
      console.error('ChannelIO script included twice.');
      return;
    }

    const ch = function () {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;

    function loadScript() {
      if (w.ChannelIOInitialized) return;
      w.ChannelIOInitialized = true;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      const x = document.getElementsByTagName('script')[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    }

    if (document.readyState === 'complete') {
      loadScript();
    } else {
      w.addEventListener('DOMContentLoaded', loadScript);
      w.addEventListener('load', loadScript);
    }

    // boot ChannelIO
    w.ChannelIO('boot', {
      pluginKey: '40c0d46f-84ba-460b-9686-82ebbc71e8dc',
    });
  }, []);

  return (
    <Layout
      title="24san"
      description="24san minecraft server."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
