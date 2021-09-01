import React from "react";
import hlwImage1 from "../images/hiw-img.jpg";
import hlwImage2 from "../images/hiw-img2.jpg";

const HiwArea = () => {
  return (
    <section className="hiw-area">
      <div className="container mx-auto">
        <div className="row">
          <div className="col">
            <div className="hiw-item">

              <div className="hiw-item-img-box hiw-bg1">
                <figure>
                  <img src={hlwImage1} alt="" />
                  <h3 className="hiw-title">Increase community collaboration</h3>
                  <div className="hiw-btn-box">
                    <a href="#none" className="theme-btn">
                      learn more
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg2">
                <figure>
                  <img src={hlwImage2} alt="" />
                  <h3 className="hiw-title">Reduce youth substance use</h3>
                  <div className="hiw-btn-box">
                    <a href="#none" className="theme-btn">
                      learn more
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiwArea;
