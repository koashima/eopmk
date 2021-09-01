import React, { Fragment, Component } from "react";
import sectionIcon from "../images/section-icon.png";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollBtn: false,
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Fragment>
        <section className="footer-area">
          <div className="newsletter-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto text-center">
                  <div className="section-heading footer-heading">
                    <div className="section-icon">
                      <img src={sectionIcon} alt="section-icon" />
                    </div>
                    <h2 className="section__title text__white">Newsletter</h2>
                    <p className="section__meta">stay updated with E Ola Pono Ma Kapolei</p>
                  </div>
                  <div className="newsletter-form">
                    <div className="form-shared">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <button
                              className="theme-btn submit__btn"
                              type="submit"
                            >
                              subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row footer-widget-wrap">
                {/* <div className="col footer-item footer-item1">
                  <h3 className="widget__title">about</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="#none">causes</a>
                    </li>
                    <li>
                      <a href="#none">about</a>
                    </li>
                    <li>
                      <a href="#none">New Campaign</a>
                    </li>
                    <li>
                      <a href="#none">Site Map</a>
                    </li>
                    <li>
                      <a href="#none">Events</a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="col footer-item footer-item2">
                  <h3 className="widget__title">explore</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="#none">Press Release</a>
                    </li>
                    <li>
                      <a href="#none">contact</a>
                    </li>
                    <li>
                      <a href="#none">Blog Posts</a>
                    </li>
                    <li>
                      <a href="#none">Social Connect</a>
                    </li>
                    <li>
                      <a href="#none">Help Topics</a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="col footer-item footer-item3">
                  <h3 className="widget__title">get Involved!</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="#none">Email info@eolaponomakapolei.org for alerts</a>
                    </li>
                    <li>
                      <a href="#none">Attend monthly EOPMK coalition meetings</a>
                    </li>
                    <li>
                      <a href="#none">Follow and like us on Instagram and Facebook.</a>
                    </li>
                    <li>
                      <a href="#none">Raise fund to help</a>
                    </li>
                  </ul>
                </div> */}
                <div className="col footer-item footer-item3">
                  <h3 className="widget__title">links</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="#none">home</a>
                    </li>
                    <li>
                      <a href="#none">about</a>
                    </li>
                    <li>
                      <a href="#none">events</a>
                    </li>
                    <li>
                      <a href="#none">resources</a>
                    </li>
                    <li>
                      <a href="#none">contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col footer-item footer-item4">
                  <h3 className="widget__title">contact</h3>
                  <ul className="contact__info">
                    <li>P.O. Box 75550 Kapolei, HI 96707</li>
                    <li>
                      <a href="mailto:eolaponomakapolei@gmail.com">
                      eolaponomakapolei@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:8088088080">8088088080</a>
                    </li>
                  </ul>
                  <div className="footer__social">
                    <ul>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-desc">
                    <p>
                      © Copyright {new Date().getFullYear()} by <a href="#none">E Ola Pono Ma Kapolei</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          role="button"
          onKeyUp={this.scrollTop}
          tabIndex="0"
          onClick={this.scrollTop}
          id="back-to-top"
          className={this.state.scrollBtn ? "back-btn-shown" : ""}
        >
          <i className="fa fa-angle-up" title="Go top"></i>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
