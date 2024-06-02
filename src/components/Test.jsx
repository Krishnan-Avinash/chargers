import React, { useEffect, useState } from "react";

//REACT ROUTER DOM
import { Link } from "react-router-dom";

//DATASET
import { dataSet } from "../dataset";

const Test = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const filteredFunction = (e) => {
    setSearch(e.target.value);
    const temp = dataSet.filter((item) => {
      return item.calledBy.find(
        (item2) => item2.toLowerCase() == e.target.value.toLowerCase()
      );
    });
    setFiltered(temp);
  };
  return (
    <div className="test">
      <div className="search">Enter Your Name</div>
      <input type="text" onChange={(e) => filteredFunction(e)} />
      <div className="filteredResult">
        {search &&
          filtered.map((item) => (
            <div key={Math.random()} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">{item.name.toUpperCase()}</p>
                  <p>Hover/Click</p>
                </div>
                <div className="flip-card-back">
                  <img src={item.image} alt="" />
                  <p className="title">
                    <Link to={`/${item.id}`}>CLICK HERE</Link>
                  </p>
                  {/* <p>Leave Me</p> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Test;
