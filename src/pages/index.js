import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageProducts from "@site/src/components/HomepageProducts";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title text--primary">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Home | Ulagellam"
      wrapperClassName="montserrat"
    >
      <HomepageHeader />
      <hr></hr>
      <main>
        <HomepageProducts />
      </main>
    </Layout>
  );
}
