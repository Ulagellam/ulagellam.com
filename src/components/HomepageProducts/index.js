import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const ProductList = [
  {
    title: "Facial Recognition",
    src: "/img/favicon-placeholder.png",
    description: (
      <>
        Facial recognition technology uses artificial intelligence to identify
        and verify individuals. It has many applications in security,
        biometrics, and personal device unlocking.
      </>
    ),
    link: "#facialrecognition",
  },
  {
    title: "Attendance with RFID",
    src: "/img/favicon-placeholder.png",
    description: (
      <>
        We developed an RFID-based attendance system for accurate and effortless
        tracking of employee attendance, eliminating the need for manual
        tracking in organizations and schools.
      </>
    ),
    link: "#rfid",
  },
  {
    title: "Money Maker",
    src: "/img/favicon-placeholder.png",
    description: (
      <>
        Our upcoming project, Money Maker, is an automated trading system
        designed to generate profits at a 1:2 ratio of losses and profits. Stay
        tuned for its release, coming soon!
      </>
    ),
    link: "#moneymaker",
  },
];

function Product({ src, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={clsx(styles.productSvg)} role="img" src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>
          {description}
          <br></br>
          <Link href={"/products" + link}>Learn More...</Link>
        </p>
      </div>
    </div>
  );
}

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <div className={clsx("container", styles.box)}>
        <h1 className="text--center">Our Products</h1>
        <div className="row">
          {ProductList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
