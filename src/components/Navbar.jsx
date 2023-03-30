import React, { useState } from "react";
import logo from "../images/logo.svg";
import arrowDown from "../images/icon-arrow-light.svg";
import arrowUp from "../images/arrowUp.svg";
import arrowDownDark from "../images/icon-arrow-dark.svg";
import arrowUpDark from "../images/icon-arrow-dark 2.svg";
import menuOpen from "../images/icon-hamburger.svg";
import menuClose from "../images/icon-close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState({
    product: false,
    company: false,
    connect: false,
  });
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () =>{
    const scrollTop = window.scrollY;
    console.log(window.scrollY)
    if(scrollTop > 200){
      setShowNavbar(false)
      setSubMenu({ ...subMenu, product: false , company : false , connect : false })
      setMenu(false)
    } else{
      setShowNavbar(true)
    }
  }
  window.onscroll = handleScroll;
  console.log(showNavbar)

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleProduct = () => {
    if (subMenu.product === false) {
      setSubMenu({ ...subMenu, product: true , company : false , connect : false });
    } else {
      setSubMenu({ ...subMenu, product: false  });
    }

    console.log(subMenu);
  };
  const handleCompany = () => {
    if (subMenu.company === false) {
      setSubMenu({ ...subMenu, company: true , product : false , connect : false });
    } else {
      setSubMenu({ ...subMenu, company: false });
    }

    console.log(subMenu);
  };
  const handleConnect = () => {
    if (subMenu.connect === false) {
      setSubMenu({ ...subMenu, connect: true , product:  false , company : false });
    } else {
      setSubMenu({ ...subMenu, connect: false });
    }

    console.log(subMenu);
  };

  return (
    <>
      <nav className={ showNavbar ? "container-fluid navbar-navbar fixed-top" : " navbar-off " }>
        <div className="logo">
          <a href="#">
            <img src={logo} />
          </a>
        </div>
        <div className="menu  ">
          <a onClick={handleProduct} href="#">
            Product 
            {subMenu.product ? (
                  <img src={arrowUp} />
                ) : (
                  <img src={arrowDown} />
                )}
             
          </a>
          {subMenu.product && (
                <div className="menu-active-desktop product ">
                  <a href="#">Overview</a>
                  <a href="#">Pricing</a>
                  <a href="#">Marketplace </a>
                  <a href="#">Features</a>
                  <a href="#">Integrations</a>
                </div>
              )}
          <a onClick={handleCompany} href="#">
            Company 
            
            {subMenu.company ? (
                  <img src={arrowUp} />
                ) : (
                  <img src={arrowDown} />
                )}
          </a>
          {subMenu.company && (
                <div className="menu-active-desktop company">
                  <a href="#">About</a>
                  <a href="#">Team</a>
                  <a href="#">Blog</a>
                  <a href="#">Careers</a>
                </div>
              )}
          <a onClick={handleConnect}href="#">
            Connect 
            {subMenu.connect ? (
                  <img src={arrowUp} />
                ) : (
                  <img src={arrowDown} />
                )}
            
          </a>

          {subMenu.connect && (
                <div className="menu-active-desktop connect">
                  <a href="#">Contact</a>
                  <a href="#">Newsletter</a>
                  <a href="#">LinkedIn</a>
                </div>
              )}
        </div>
      
        <div className="menu-login ms-auto ">
          <a href="#">login</a>
          <button href="#">Sing Up</button>
        </div>
        {
          !menu ? <div className="menu-open">
          <button onClick={handleMenu}>
            <img src={menuOpen} alt="button open" />{" "}
          </button>
        </div> : 
        <div className="menu-close">
          <button onClick={handleMenu}>
            <img src={menuClose} alt="button Close" />{" "}
          </button>
        </div>
        }
        
        {menu && (
          <>
            <div className="menu-active">
              <a onClick={handleProduct} href="#">
                Product
                {subMenu.product ? (
                  <img src={arrowUpDark} />
                ) : (
                  <img src={arrowDownDark} />
                )}
              </a>
              {subMenu.product && (
                <div className="sub-menu">
                  <a href="#">Overview</a>
                  <a href="#">Pricing</a>
                  <a href="#">Marketplace </a>
                  <a href="#">Features</a>
                  <a href="#">Integrations</a>
                </div>
              )}

              <a onClick={handleCompany} href="#">
                Company
                {subMenu.company ? (
                  <img src={arrowUpDark} />
                ) : (
                  <img src={arrowDownDark} />
                )}
              </a>
              {subMenu.company && (
                <div className="sub-menu">
                  <a href="#">About</a>
                  <a href="#">Team</a>
                  <a href="#">Blog</a>
                  <a href="#">Careers</a>
                </div>
              )}

              <a onClick={handleConnect} href="#">
                Connect
                {subMenu.connect ? (
                  <img src={arrowUpDark} />
                ) : (
                  <img src={arrowDownDark} />
                )}
              </a>
              {subMenu.connect && (
                <div className="sub-menu">
                  <a href="#">Contact</a>
                  <a href="#">Newsletter</a>
                  <a href="#">LinkedIn</a>
                </div>
              )}
              <div className="line" />
              <a href="#">Login</a>
              <button href="#">Sing Up</button>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
