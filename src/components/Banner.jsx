import React from "react";
import phones from "../images/illustration-phones.svg"

const Banner = () => {
  return (
    <section className="container-fluid section-banner">
    <div className="row">
      <div  className="col-12 col-md-6">
       <img src={phones} alt="telefonos" />
      </div>
      <div  className="col-12 col-md-6">
        <h1>State of the Art Infrastructure</h1>
        <p>
          {" "}
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Banner;
