import React from "react";
import { Link } from "react-router-dom";

//DATASET
import { dataSet } from "../dataset";

const IntroPage = () => {
  return (
    <div className="parent">
      <ul className="main-intro">
        {dataSet.map((item, index) => (
          <li key={index}>
            <div className="card">
              <img src={item.image} alt="" />
              <Link to={`/${item.id}`}>
                <div className="name">{item.name.toUpperCase()}</div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroPage;
