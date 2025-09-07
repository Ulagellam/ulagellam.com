import Layout from "@theme/Layout";
import styles from "./about-us.module.css";
import clsx from "clsx";

const teamMembers = [
  {
    name: "Umamaheswaran",
    title: "tsipar, Ulagellam",
    image: "/img/uma.jpg",
    description: (
      <>
        With over 25 years in software and experience at Citi Japan, Wells
        Fargo, Yahoo and Apple, plus 6 years in academics and personality
        development, Uma blends technical expertise with a dedication to
        mentorship.
        <br></br>
        <br></br>
        Passionate about emerging tech, he brings innovation and insight to
        everything from software development to inspiring future talent.
      </>
    ),
  },
];

const Section = ({ title, children }) => (
  <div className="col col--12">
    <h1>{title}</h1>
    <p>{children}</p>
  </div>
);

const TeamMember = ({ name, title, image, description }) => (
  <div className="col col--3">
    <div style={{ textAlign: "center" }}>
      <img src={image} className={clsx(styles.photo)} alt={`${name} photo`} />
      <h1>{name}</h1>
      <span>{title}</span>
    </div>
    <hr />
    <p className={clsx(styles.i)}>{description}</p>
  </div>
);

export default function AboutUs() {
  return (
    <Layout title="About Us" description="About Us | Ulagellam">
      <br />
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <img
              src="img/ulagellam-logo.png"
              className={clsx("display", styles.logo)}
              alt="Ulagellam logo"
            />
            <img
              src="img/ulagellam-logo-dark.png"
              className={clsx("display-dark", styles.logo_dark)}
              alt="Ulagellam dark logo"
            />
            <br />
            <p>
              At Ulagellam, we are trying to create cost-effective products that
              can help small to enterprise-level businesses. Right now, we are
              self-funded. In the future, we will seek external funding.
            </p>
          </div>
          <Section title="Mission">
            We will develop cost-effective software/hardware products to fulfill
            the needs of the common man and for businesses to achieve automation
            as much as possible through our cutting-edge technology products.
          </Section>
          <Section title="Vision">
            Bring world-class software technology adoption to rural areas of
            Tamil Nadu and all over India through our products, services &amp;
            training.
          </Section>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      <br />
    </Layout>
  );
}
