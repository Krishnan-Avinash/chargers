import React, { useEffect, useState, useRef } from "react";

//REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

//DATASET
import { dataSet } from "../dataset";

//CHAKRA
import { useToast } from "@chakra-ui/react";

const Test = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const passwordRef = useRef("");

  const filteredFunction = (e) => {
    setSearch(e.target.value);
    const temp = dataSet.filter((item) => {
      return item.calledBy.find(
        (item2) => item2.toLowerCase() == e.target.value.toLowerCase()
      );
    });
    setFiltered(temp);
  };

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
                    placeholder="Password"
                    ref={passwordRef}
                    onChange={(e) => (passwordRef.current = e.target.value)}
                  />
                  <button
                    style={{ fontSize: "1.25rem" }}
                    onClick={() => {
                      if (passwordRef.current == item.password) {
                        navigate(`/${item.id}`, {
                          state: { customProp: "false" },
                        });
                      } else {
                        toast({
                          title: "Kindly enter correct Password.",
                          status: "warning",
                          duration: 5000,
                          isClosable: true,
                        });
                      }
                    }}
                  >
                    Continue
                  </button>
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
