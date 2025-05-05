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
        <img src={HeroImage} alt="Geyser Logo" className={styles.heroImage} />
        <img src={HeroImage} alt="Geyser Logo" className={styles.heroImageBackgroundBlur} />
        <div className={styles.textSection}>
          <Heading as="h1" className="hero__title">
            <Translate id="pages.main.title">Revolutionize Your Minecraft Server</Translate>
          </Heading>
          <p className="hero__subtitle">
            <Translate id="pages.main.subtitle">
              Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server
            </Translate>
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
      title="Geyser"
      description="Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
