import React from "react";

const CallToActionTwo = () => {
  return (
    <section className="cta-area text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="cta-item cta-item1">
              <h3 className="cta__title">Participate in coalition activities</h3>
              <a href="#none" className="theme-btn">
                view events
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="cta-item cta-item2">
              <h3 className="cta__title">Discuss with your family about the household expectatioins about substance use</h3>
              <a href="#none" className="theme-btn">
                view resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionTwo;
