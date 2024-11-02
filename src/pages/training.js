import Layout from "@theme/Layout";
import styles from "./training.module.css";
import clsx from "clsx";

const images = [
  {
    text: "Bishop Heber College, Trichy",
    sources: ["/img/bishop-heber.jpeg"],
  },
  {
    text: "M.A.M. College of Engineering, Trichy",
    sources: ["/img/mam-2.jpeg", "/img/mam-1.jpeg"],
  },
  {
    text: "Gandhi College of Education, Sathyamangalam. Google Sponsored AI Seminar",
    sources: ["/img/gandhi-2.jpeg", "/img/gandhi-1.jpeg"],
  },
  {
    text: "Rathinam College Of Arts And Science, Coimbatore",
    sources: ["/img/rathinam-2.jpeg", "/img/rathinam-1.jpeg"],
  },
];

const ImageGrid = ({ images }) => (
  <div className="text--center margin-top--lg">
    {images.map((college, index) => (
      <div>
        <h3 className="col--12 montserrat thin">{college.text}</h3>
        <div className="row margin-bottom--lg" key={index}>
          {college.sources.map((src, idx) => (
            <div className={clsx("col col--6", styles.img_div)}>
              <img
                src={src}
                className={clsx(styles.img)}
                alt="Training Image"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function Training() {
  return (
    <Layout
      title="Training"
      description="Training | Ulagellam"
      wrapperClassName={clsx(styles.wrapperClass)}
    >
      <div className={clsx("container", styles.container)}>
        <ImageGrid images={images} />
      </div>
    </Layout>
  );
}
