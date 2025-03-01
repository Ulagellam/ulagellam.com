import clsx from "clsx";
import { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageProducts from "@site/src/components/HomepageProducts";

import styles from "./index.module.css";

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
} from "@botpress/webchat";

const clientId = "85e0e5f9-e99a-4822-bed9-b6511f418d61";

const configuration = {
  float: "right",
  showPoweredBy: false
};

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
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

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
      <div
        style={{
          width: "25rem",
          margin: "5px",
          position: "fixed",
          bottom: "50px",
          right: "50px",
        }}
      >
        <WebchatProvider client={client} configuration={configuration}>
          <div
            style={{
              display: isWebchatOpen ? "block" : "none",
              height: "30rem",
              "margin-bottom": "10px",
            }}
          >
            <Webchat />
          </div>
          <Fab
            onClick={toggleWebchat}
            style={{float: "right"}}
          />
        </WebchatProvider>
      </div>
    </Layout>
  );
}
