import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomeFeatures from "../components/HomeFeatures";
import HomeShotTabs from "../components/HomeShotTabs";
import HomeFeaturePreview from "../components/HomeFeaturePreview";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeCraftDeploy from "../components/HomeCraftDeploy";

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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started - Join the 24san Server ⏱️
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
