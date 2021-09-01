import React, { Component } from "react";
import { Link } from "gatsby";
import logoImage from "../images/logo.png";
import nb from "date-fns/esm/locale/nb";
class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".mobile-menu-toggle");
    let mainNav = document.querySelector(".side-nav-container");

    mainNavToggler.addEventListener("click", function () {
      mainNav.classList.add("active");
    });

    //Close Mobile Menu
    let closeMenu = document.querySelector(".side-menu-close");
    closeMenu.addEventListener("click", function () {
      mainNav.classList.remove("active");
    });
  };

  render() {
    return (
      <div>
        <header className="header-area">
          <div className="header-top-action">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="top-action-content">
                    <div className="info-box info-box-1 d-flex align-items-center">
                      <ul className="d-flex align-items-center">
                        <li>
                          <a href="#none">
                            <i className="fa fa-envelope"></i>
                            info@eolaponomakapolei.org
                          </a>
                        </li>
                        <li>
                          <a href="#none">
                            <i className="fa fa-phone-square"></i>808 808 8080
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="top-action-content info-action-content">
                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                      <ul className="top-action-list d-flex align-items-center">
                        <li>
                          <a href="#none">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#none">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#none">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`header-top header-menu-action ${
              this.state.sticky ? "header-fixed" : ""
            }`}
          >
            <div className="container">
              <div className="row ostion-top-wrap">
                <div className="col-lg-5 col-sm-5 site-branding">
                  <div className="logo-action d-flex align-items-center">
                    <div className="ostion-logo">
                      <Link className="main-navigation" to="/" style={{textDecoration: 'none', color: 'black', fontSize: "1rem"}}>
                        <img src={logoImage} alt="Oxpitan" title="Oxpitan" /> 
                        {' '}E Ola Pono Ma Kapolei
                      </Link>
                    </div>
                    <div className="header-btn ml-auto">
                      <Link to="#none" className="theme-btn">
                        donate
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-7 ostion-menu">
                  <div className="ostion-menu-innner">
                    <div className="ostion-menu-content">
                      <div className="navigation-top">
                        <nav className="main-navigation">
                          <ul>
                            <li className="active">
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <a href="#none">About</a>
                            </li>
                            <li>
                              <a href="#none">Events</a>
                              {/* <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="/events">events</Link>
                                </li>
                                <li>
                                  <Link to="/events-detail">events detail</Link>
                                </li>
                              </ul> */}
                            </li>
                            <li>
                              <a href="#none">Resources</a>
                              {/* <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="/news">news</Link>
                                </li>
                                <li>
                                  <Link to="/single-news">news detail</Link>
                                </li>
                              </ul> */}
                            </li>
                            {/* <li>
                              <a href="#none">pages</a>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="/about">about</Link>
                                </li>
                                <li>
                                  <Link to="/gallery">gallery</Link>
                                </li>
                                <li>
                                  <Link to="/volunteer">
                                    become a volunteer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/team">our team</Link>
                                </li>
                                <li>
                                  <Link to="/sponsor">sponsors</Link>
                                </li>
                              </ul>
                            </li> */}
                            <li>
                              <Link to="#none">contact</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="mobile-menu-toggle">
                      <i className="fa fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav-container">
            <div className="humburger-menu">
              <div className="humburger-menu-lines side-menu-close"></div>
            </div>
            <div className="side-menu-wrap">
              <ul className="side-menu-ul">
                <li className="sidenav__item">
                  <a href="/">home</a>
                </li>
                <li className="sidenav__item">
                  <a href="#none">about</a>
                </li>
                <li className="sidenav__item">
                  <a href="#none">events</a>
                </li>
                <li className="sidenav__item">
                  <a href="#none">resources</a>
                  {/* <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li>
                      <Link to="/news">news</Link>
                    </li>
                    <li>
                      <Link to="/single-news">news detail</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="sidenav__item">
                  <Link to="#none">contact</Link>
                </li>
              </ul>
              <ul className="side-social">
                <li>
                  <a href="#none">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <div className="side-btn">
                <Link to="/donate" className="theme-btn">
                  donate now
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavOne;
