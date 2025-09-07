import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const ProductList = [
  {
    title: "Money Maker",
    src: "/img/moneymaker.png",
    circle: true,
    description: (
      <>
        Our upcoming project, Money Maker, is an automated trading system
        designed to generate profits at a 1:2 ratio of losses and profits. Stay
        tuned for its release, coming soon!
      </>
    ),
    link: "#moneymaker",
  },
  {
    title: "Facial Recognition",
    src: "/img/facial-reco.png",
    darkSrc: "/img/facial-reco-white.png",
    circle: false,
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
    title: "Customer Support Chatbot Service",
    src: "/img/chatbot.png",
    circle: false,
    description: (
      <>
        Wish to enhance your website with an AI chatbot for Customer Support? Available 24/7 to provide instant, accurate, and personalized support. Get your own AI chatbot today for just ₹5000!
      </>
    ),
    link: "#chatbot-service",
  },
];

function Product({
  src,
  title,
  description,
  link,
  hyperlink,
  circle,
  darkSrc,
}) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <img
          className={clsx(
            circle ? styles.circle : darkSrc ? "display" : "",
            styles.productSvg
          )}
          role="img"
          src={src}
        />
        {darkSrc ? (
          <img
            className={clsx("display-dark", styles.productSvg)}
            role="img"
            src={darkSrc}
          />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          {hyperlink ? (
            <a href={hyperlink} target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
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
      <div className={clsx("container-fluid", styles.box)}>
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
