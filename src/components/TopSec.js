import React from "react";

function TopSec() {
  return (
    <div className="topSec">
      <div className="topSec_logo">
        <img src="/asserts/logo.png" alt="logo" />
      </div>
      <div className="topSec_container">
        <div className="topSec_container_trophy">
          <img src="/asserts/1.png" alt="trophy" />
        </div>
        <div className="topSec_container_article">
          <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="/asserts/2.png" alt="" />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopSec;
