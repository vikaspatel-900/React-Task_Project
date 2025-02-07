import React from "react";
import { serviceData } from "../../contants/ServiceContent";
import './service.css'

const Service = () => {
  return (
    <div className="service-sec">
      <div className="home-sec2-box">
        {serviceData.map((data) => {
          return (
            <div>
              <i class={data.icon}></i>
              <h3>{data.heading}</h3>
              <p>{data.para}</p>
              <button>
                Lern More <i class={data.icon2}></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
