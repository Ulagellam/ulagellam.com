import React from "react";
import Layout from "@theme/Layout";
import styles from "./about-us.module.css";
import clsx from "clsx";

export default function AboutUs() {
  return (
    <Layout title="About Us" description="About Us | Ulagellam">
      <br></br>
      <div className="container">
        <div className="row">
          <hr></hr>
          <div className="col col--12">
            <div class="text--center">
              <img
                src="img/ulagellam-logo.png"
                className={clsx(styles.logo)}
              ></img>
              <img
                src="img/ulagellam-logo-dark.png"
                className={clsx(styles.logo_dark)}
              ></img>
            </div>
            <br></br>
            <p>
              At Ulagellam we are trying to create cost effective products that
              can help small to enterprise level businesses. Right now we are
              self funded. In future we will be going for funding outside.
            </p>
          </div>
          <div className="col col--12">
            <h1>Mission</h1>
            <p>
              We will develop cost effective software/hardware products to
              fulfil the needs of common man and for businesses to achieve
              automation as much as possible through our cutting edge technology
              products.
            </p>
          </div>
          <div className="col col--12">
            <h1>Vision</h1>
            <p>
              Bring in world class software technology adoption to rural areas
              of Tamil Nadu and all over India through our products, services
              &amp; training.
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div style={{ "text-align": "center" }}>
              <img src="/img/uma.jpg" className={clsx(styles.photo)}></img>
              <h1>
                Umamaheswaran <br></br> TG
              </h1>
              <span>Chairman, Ulagellam</span>
            </div>
            <hr></hr>
            <p className={clsx(styles.i)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              felis nulla, sodales ac metus id, fermentum semper leo. Sed porta,
              neque pulvinar fermentum dignissim, augue metus viverra ligula,
              sed ullamcorper arcu justo eu libero.
            </p>
          </div>
          <div className="col col--3">
            <div style={{ "text-align": "center" }}>
              <img src="/img/chitra.jpg" className={clsx(styles.photo)}></img>
              <h1>
                Chitra <br></br> Umamaheswaran
              </h1>
              <span>CEO, Ulagellam</span>
            </div>

            <hr></hr>
            <p className={clsx(styles.i)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              felis nulla, sodales ac metus id, fermentum semper leo. Sed porta,
              neque pulvinar fermentum dignissim, augue metus viverra ligula,
              sed ullamcorper arcu justo eu libero.
            </p>
          </div>
          <div className="col col--3">
            <div style={{ "text-align": "center" }}>
              <img
                src="/img/sivasweatha.jpg"
                className={clsx(styles.photo)}
              ></img>
              <h1>
                Sivasweatha <br></br> Umamaheswaran
              </h1>
              <span>CFO, Ulagellam</span>
            </div>

            <hr></hr>
            <p className={clsx(styles.i)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              felis nulla, sodales ac metus id, fermentum semper leo. Sed porta,
              neque pulvinar fermentum dignissim, augue metus viverra ligula,
              sed ullamcorper arcu justo eu libero.
            </p>
          </div>
          <div className="col col--3">
            <div style={{ "text-align": "center" }}>
              <img
                src="/img/sivayogeith.jpg"
                className={clsx(styles.photo)}
              ></img>
              <h1>Sivayogeith Umamaheswaran</h1>
              <span>CTO, Ulagellam</span>
            </div>
            <hr></hr>
            <p className={clsx(styles.i)}>
              I love to Code as much I love to help Ulagellam! My Father
              &#40;The Chairman&#41; taught me how to code in Java when I was 8,
              that was when I fell in love with Coding. When I started showing a
              lot of progress, he made me the CTO of his company....Ulagellam!
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}
