import React from "react";
import "./home.css";
import { features, newsSection } from "../../contants/HomeContent";

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-section">
        <div className="home-content">
          <h2>IT Management Service & Support for Your Business.</h2>

          <p>Keep your business safe & ensure high availability.</p>

          <button>Find Solutions</button>
        </div>
      </div>

      <div className="home-sec-2">
        <div className="home-sec-2-head">
          <h3>Our Features</h3>
          <p>
            We've cultivated a dynamic space where creativity seamlessly
            intertwines with strategy and innovation.
          </p>
        </div>

        <div className="home-sec2-box">
          {features.map((data,index) => {
            return (
              <div key={index}>
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


      <div className="home-sec-2">
        <div className="home-sec-2-head">
          <h3>Blog Or News</h3>
          <p>
            We've cultivated a dynamic space where creativity seamlessly
            intertwines with strategy and innovation.
          </p>
        </div>

        <div className="home-img-box">
          {newsSection.map((data,index) => {
            return (
              <div key={index}>
                <img src={data.img} alt=""/>
                <h3>{data.heading}</h3>
                <p>{data.para}</p>
                <button>
                  Read More <i class={data.icon2}></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
