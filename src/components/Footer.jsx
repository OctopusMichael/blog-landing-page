import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <section className="container-fluid section-footer">
    <div className="row">
      <div className="col-12 col-md-3 footer-logo">
        <img src={logo}  alt="logo"/>
      </div>
      <div className="col-12 col-md-3 menu-footer">
        <h5>Product</h5>
        <a href="#">Overview</a>
        <a href="#"> Pricing</a>
        <a href="#">Marketplace</a>
        <a href="#"> Features</a>
        <a href="#"> Integrations</a>
      </div>
      <div className="col-12 col-md-3 menu-footer">
        <h5>Company</h5>
        <a href="#">About</a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Careers </a>
        
        
      </div>
      <div className="col-12 col-md-3 menu-footer">
        <h5>Connect</h5>
        <a href="#">Contact</a>
        <a href="#">Newsletter</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
    </section>
  );
};

export default Footer;


  
  
  
  

  
  
 
  
  