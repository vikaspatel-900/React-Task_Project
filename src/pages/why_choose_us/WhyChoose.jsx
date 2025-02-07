import React, { useEffect } from "react";
import { whyChooseUs } from "../../contants/ServiceContent";
import "./whychoose.css";


const WhyChoose = () => {



  return (
    <section className="why-section">
      <div className="why-sec-heading">
        <h1>Why Choose Us?</h1>
        <p>
          When you choose us, you'll feel the benefit of 10 years' experience of
          Web Development. Because we know the digital world and we know that
          how to handle it. With working knowledge of online, SEO and social
          media.
        </p>
      </div>

      <div className="why-sec-box">
        {whyChooseUs.map((data,index) => {
          return (
            <div key={index}>
              <i className={data.icon}></i>
              <h3>{data.heading}</h3>
              <p>{data.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;
