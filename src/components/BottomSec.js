import React from "react";
import { MdOutlineFacebook, MdCall, MdOutlineLanguage } from "react-icons/md";
function BottomSec() {
  return (
    <>
      <div className="bottomSec">
        <h4>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </h4>
        <div className="bottomSec_products">
          <img src="/asserts/3.png" alt="" />
          <p className="bottomSec_products_dec">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          <hr />
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="call  footer_children">
          <MdCall />
          <span>Toll-free 1800 200 1234</span>
        </div>
        <div className="facebook footer_children ">
          <MdOutlineFacebook />
          <span>www.facebook.com/cripumps</span>
        </div>
        <div className="web footer_children">
          <MdOutlineLanguage />
          <span>www.crigroups.com</span>
        </div>
      </div>
    </>
  );
}

export default BottomSec;
