import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Play & Earn",
    img: require("@site/static/img/GOLD.png").default,
    description: (
      <>
        BlockchainRPG offers a fun way to earn NFTs by playing the game. Players
        can hunt for resources/NFTs, craft better equipment, and trade with
        others.
      </>
    ),
  },
  {
    title: "Feature Packed",
    img: require("@site/static/img/milo.png").default,
    description: (
      <>
        BlockchainRPG has many different game mechanics that allow players to be
        fully immersed in gameplay.
      </>
    ),
  },
  {
    title: "Community Driven",
    Svg: require("@site/static/img/community.svg").default,
    description: (
      <>
        We work closely with our community in order to provide game enhancements
        and improvements to the game. We value your feedback!
      </>
    ),
  },
];

function Feature({ Svg, title, description, img }) {
  var Image = <Svg className={styles.featureSvg} role="img" />;

  if (img) {
    Image = <img className={styles.featureSvg} src={img} />;
  }
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{Image}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
