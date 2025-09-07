import clsx from "clsx";
import { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageProducts from "@site/src/components/HomepageProducts";

import styles from "./index.module.css";

import BrowserOnly from "@docusaurus/BrowserOnly";

const clientId = "85e0e5f9-e99a-4822-bed9-b6511f418d61";

const configuration = {
  showPoweredBy: false,
  color: "#8e4ec6"
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
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const botpress = require("../../node_modules/@botpress/webchat");

            const [isWebchatOpen, setIsWebchatOpen] = useState(false);

            const client = botpress.getClient({
              clientId,
            });

            const detectMobile = () => {
              return window.innerWidth <= 800;
            };

            const toggleWebchat = () => {
              if (detectMobile()) {
                window.location = "https://bot.ulagellam.com"
                return
              }
              setIsWebchatOpen((prevState) => !prevState);
            };

            return (
              <botpress.WebchatProvider
                client={client}
                configuration={configuration}
              >
                <div
                  style={{
                    display: isWebchatOpen ? "block" : "none",
                    height: "30rem",
                    marginBottom: "10px",
                  }}
                >
                  <botpress.Webchat />
                </div>
                <botpress.Fab
                  onClick={toggleWebchat}
                  style={{ float: "right" }}
                />
              </botpress.WebchatProvider>
            );
          }}
        </BrowserOnly>
      </div>
    </Layout>
  );
}
