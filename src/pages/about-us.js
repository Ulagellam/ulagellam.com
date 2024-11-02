import Layout from "@theme/Layout";
import styles from "./about-us.module.css";
import clsx from "clsx";

const teamMembers = [
  {
    name: "Umamaheswaran",
    title: "Chairman, Ulagellam",
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
  {
    name: "Chitra Umamaheswaran",
    title: "CEO, Ulagellam",
    image: "/img/chitra.jpg",
    description: (
      <>
        Chitra is a commerce graduate driven by passion for business and
        entrepreneurship. A proud mother of two, she skillfully balances her
        family life with her creative pursuits. As a Tamil poet, Chitra draws on
        her heritage to infuse her writing with depth and authenticity.
        <br></br>
        <br></br>
        Her dedication to both family and career showcases her vibrant,
        multifaceted approach to life.
      </>
    ),
  },
  {
    name: "Sivasweatha Umamaheswaran",
    title: "CEO, Neetling",
    image: "/img/sivasweatha.jpg",
    description: (
      <>
        Sivasweatha was an NIOS student who embraced open schooling after
        returning to India from California, preferring hands-on learning without
        external help.
        <br></br>
        <br></br>A self-taught Java and Python developer with strong leadership
        skills, she is passionate about problem-solving, Data Structures and
        Algorithms, with a keen focus on refining her skills in time and space
        complexity.
      </>
    ),
  },
  {
    name: "Sivayogeith Umamaheswaran",
    title: "CTO, Ulagellam",
    image: "/img/sivayogeith.jpg",
    description: (
      <>
        Thirteen-year-old Sivayogeith has a passion for coding and for
        supporting Ulagellam. He began learning Java at the age of 8, inspired
        by his father, who nurtured his early interest in technology. He is also
        the developer of Neetling.
        <br></br>
        <br></br>
        Sivayogeith has a love for Angular, frontend, and full stack
        development, and he is a content creator. And when he’s not coding, you
        can find him hanging out with his beloved cats!
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
