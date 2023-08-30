import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src="/img/banner.jpg" />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://play.blockchainrpg.io"
          >
            Play Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Play & Earn NFTs`}
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <div className={clsx("hero hero--secondary", styles.banner)}>
        <div className="container">
          <h2 className={clsx("hero__title", styles.whiteText)}>
            WELCOME TO BLOCKCHAINRPG!
          </h2>
          <p className={clsx("hero__subtitle", styles.whiteText)}>
            BlockchainRPG is a Digital Item Metaverse in the faraway lands of
            Aurum. Hunt monsters, gain resources, craft better tools, and
            compete against others. BlockchainRPG offers a fun play and earn
            style gameplay. Earn GOLD and rare NFTs while playing.
            Trade/Buy/Sell your in-game items with other players to assist each
            other in your adventures!
            <br />
            Let your blockchain adventure begin!
          </p>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
