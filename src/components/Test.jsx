import React, { useEffect, useState, useRef } from "react";

//REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

//DATASET
import { dataSet } from "../dataset";

const Test = () => {
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const passwordRef = useRef("");

  // const

  const filteredFunction = (e) => {
    setSearch(e.target.value);
    const temp = dataSet.filter((item) => {
      return item.calledBy.find(
        (item2) => item2.toLowerCase() == e.target.value.toLowerCase()
      );
    });
    setFiltered(temp);
  };

  // const check4=()=>{
  //   if(pass==filtered.password){
  //     return Navigate
  //   }
  // }

  const [pass, setPass] = useState("");
  return (
    <>
      <div className="test2">
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
      <div className="test">
        <div className="search">Find Yourself!!</div>
        <div className="filteredResult">
          {dataSet.map((item) => (
            <div key={Math.random()} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">{item.name.toUpperCase()}</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <img src={item.image} alt="" />
                  <input
                    type="text"
                    style={{ color: "black" }}
                    placeholder="Enter"
                    ref={passwordRef}
                    onChange={(e) => (passwordRef.current = e.target.value)}
                    // onChange={(e) => setPass(e.target.value)}
                  />
                  <button
                    style={{ fontSize: "1.25rem" }}
                    onClick={() => {
                      // console.log("Password ref ", passwordRef.current);
                      if (passwordRef.current == item.password) {
                        {
                          // console.log("NO ERROR");
                        }
                        navigate(`/${item.id}`, {
                          state: { customProp: "false" },
                        });
                      } else {
                        // console.log("Error");
                      }
                    }}
                  >
                    Continue
                  </button>
                  {/* {passwordRef == item.password && (
                    <Navigate to={`/${item.id}`} />
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
