import React, { useEffect, useState } from "react";
import "./service.css";
import { getApiData } from "../../api/Apidata";

const Service = () => {
  const [apidata, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAPIData = async () => {
    try {
      const res = await getApiData();
      setApiData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  console.log(apidata);

  return (
    <div className="service-sec">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="home-sec2-box">
          {apidata.map((data) => {
            return (
              <div key={data.id}>
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
      )}
    </div>
  );
};

export default Service;
