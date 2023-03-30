import React from "react";
import desktop from "../images/illustration-laptop-desktop.svg"

const InfoButton = () => {
  return (
    <section className="container-fluid section-info-button">
      <div className="title">
        <h1>Designed for the future</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="ilustration-button" />
          <img src={desktop} alt="imagen"/>
        </div>
        <div className="col-12 col-md-6 articles-button">
          <h3>Free, open, simple </h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoButton;
