import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import PlayButton from "@site/src/components/PlayButton";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src="/img/banner.jpg" alt="BlockchainRPG — a play and earn RPG on the WAX blockchain" />
        <div className={styles.buttons}>
          <PlayButton />
        </div>
      </div>
    </header>
  );
}

function WhatIsSection() {
  return (
    <section className={styles.contentSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>What is BlockchainRPG?</h2>
            <p>
              BlockchainRPG is a hunting-based role-playing game (RPG) built on
              the{" "}
              <Link to="/docs/resources/wax-blockchain/what-is-wax">
                WAX blockchain
              </Link>
              . It brings back the classic, nostalgic feel of the RPGs many of
              us grew up with — exploring a dangerous world, hunting monsters,
              gathering loot, crafting better gear, and growing steadily
              stronger — and adds something those old games never could: real,
              verifiable ownership of everything you earn.
            </p>
            <p>
              You play an adventurer in the land of Aurum, a rich world filled
              with lore, treasure, and danger. Every meaningful item you
              collect — your characters, artifacts, and rare drops — is a
              blockchain asset that belongs to <em>you</em>, not to us. That
              means you're free to use your items in-game, or trade, buy, and
              sell them with other players in a real player-driven economy. We
              built BlockchainRPG to put gameplay first: a genuinely fun game
              that an open economy supports, rather than the other way around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className={clsx(styles.contentSection, styles.altSection)}>
      <div className="container">
        <h2 className="text--center">Start Playing in Three Steps</h2>
        <div className="row">
          <div className={clsx("col col--4", styles.stepCard)}>
            <h3>1. Set up a WAX wallet</h3>
            <p>
              You'll need a WAX wallet to hold your assets and sign in-game
              actions. The easiest option is a free WAX Cloud Wallet. Our{" "}
              <Link to="/docs/resources/wax-blockchain/wallet-creation">
                wallet creation guide
              </Link>{" "}
              walks you through it in a few minutes — no prior crypto
              experience required.
            </p>
          </div>
          <div className={clsx("col col--4", styles.stepCard)}>
            <h3>2. Recruit a character</h3>
            <p>
              Every adventurer needs at least one Character NFT, staked and
              recruited, to play. Grab one from the{" "}
              <Link to="https://nfthive.io/drop/199?referral=brpg">
                Starter Pack
              </Link>{" "}
              or the secondary market, then learn how characters work on the{" "}
              <Link to="/docs/game-mechanics/characters">Characters</Link> page.
            </p>
          </div>
          <div className={clsx("col col--4", styles.stepCard)}>
            <h3>3. Go on your first hunt</h3>
            <p>
              Send a party into the beginner-friendly Swamplands to earn your
              first loot. The{" "}
              <Link to="/docs/overview/getting-started">
                Getting Started guide
              </Link>{" "}
              and the{" "}
              <Link to="/docs/game-mechanics/hunting">Hunting guide</Link> cover
              everything you need to know.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreSection() {
  const links = [
    {
      title: "Game Mechanics",
      to: "/docs/category/game-mechanics",
      blurb:
        "Deep dives on hunting, bosses, crafting, artifacts, staking, salvaging, and every other system in the game.",
    },
    {
      title: "Frequently Asked Questions",
      to: "/docs/faq",
      blurb:
        "Quick answers to the questions new and returning players ask most — from GOLD and NFTs to cooldowns and healing.",
    },
    {
      title: "Glossary of Terms",
      to: "/docs/glossary",
      blurb:
        "Not sure what an essence, a pair-duel, or a private boss is? Our plain-language glossary explains the game's vocabulary.",
    },
    {
      title: "Lore of Aurum",
      to: "/docs/overview/lore",
      blurb:
        "Discover the story of the world you're adventuring in — New Haven, the goddess Argenta, and the wilds beyond.",
    },
    {
      title: "Patch Notes & Blog",
      to: "/blog",
      blurb:
        "BlockchainRPG is in active development. Follow detailed release notes and breakdowns for every major update.",
    },
    {
      title: "Leaderboard",
      to: "/leaderboard",
      blurb:
        "See how the top adventurers stack up and where you rank among the community of players.",
    },
  ];
  return (
    <section className={styles.contentSection}>
      <div className="container">
        <h2 className="text--center">Explore BlockchainRPG</h2>
        <div className="row">
          {links.map((item, idx) => (
            <div className="col col--4 margin-bottom--lg" key={idx}>
              <Link to={item.to} className={styles.exploreCard}>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Play & Earn RPG on the WAX Blockchain`}
      description="BlockchainRPG is a hunting-based play-and-earn RPG on the WAX blockchain. Hunt monsters, craft gear, collect NFTs, and trade with players in the world of Aurum."
    >
      <HomepageHeader />
      <div className={clsx("hero hero--secondary", styles.banner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.whiteText)}>
            WELCOME TO BLOCKCHAINRPG!
          </h1>
          <p className={clsx("hero__subtitle", styles.whiteText)}>
            BlockchainRPG is a digital-item metaverse set in the faraway lands of
            Aurum. Hunt monsters, gather resources, craft better tools, and
            compete against other adventurers. Earn GOLD and rare NFTs while you
            play, and trade, buy, or sell your in-game items with other players
            to aid each other on your adventures. Let your blockchain adventure
            begin!
          </p>
        </div>
      </div>
      <main>
        <HomepageFeatures />
        <WhatIsSection />
        <GetStartedSection />
        <ExploreSection />
      </main>
    </Layout>
  );
}
