import Layout from "@theme/Layout";

export default function Research() {
  return (
    <Layout title="R&amp;D" description="Research and Devlopment | Ulagellam">
      <div className="container">
        <h1>Research & Devlopment</h1>
        <div className="row">
          <div className="col col--12">
            <h2>Helmet</h2>
            <p>
              Our machine learning helmet project aims to use computer vision
              and machine learning techniques to determine whether a person
              riding a bike is wearing a helmet or not. By analyzing video
              footage from cameras mounted nearby, the system can detect the
              presence of a helmet on the rider's head and make a determination
              about whether they are wearing one. The system is trained on a
              dataset of images and videos of people riding bikes, both with and
              without helmets, to learn the distinctive features of helmets and
              the absence of them.
            </p>
            <p>
              The goal of this project is to promote safety and encourage the
              use of helmets while riding bikes. This technology can be used in
              a variety of settings such as traffic monitoring, bike-sharing
              systems, and personal safety applications. With the help of this
              technology, it can reduce the number of accidents and promote
              safety. Furthermore, the system can also be integrated with other
              technologies such as GPS, to track the location of helmet usage
              and areas where helmet usage is low, which can help authorities to
              create targeted awareness campaigns.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
