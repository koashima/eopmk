import React from "react";
import sectionIcon from "../images/section-icon.png";
const CallToAction = () => {
  return (
    <section className="mixer-area mixer-area3 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading mixer-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 style={{color: '#f1ae44'}}className="section__title text__white">
                Mission
              </h2>
              <h2 className="section__title text__white">
                To prevent and reduce youth substance substance use in Kapolei
              </h2>
              <a href="#none" className="theme-btn">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
