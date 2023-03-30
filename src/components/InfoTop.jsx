import React from "react";
import desktop from "../images/illustration-editor-desktop.svg";

const InfoTop = () => {
  return (
    <section className="container-fluid section-info">
      <div className="title">
        <h1>Designed for the future</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 order-md-2">
          <div className="ilustration" />
          <img src={desktop}></img>
        </div>
        <div className="col-12 col-md-6 articles order-md-1">
          <h3> Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3>Robust content management</h3>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoTop;
