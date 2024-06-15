import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Test from "./Test";

//GROUP IMAGE DISPLAY
import groupImg from "../../assets/display_group_jp.jpg";

const GsapImplementation = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 2,
        delay: 0.1,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 2,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="gsap1 relative" ref={comp}>
      <div
        id="intro-slider"
        className="inside-gsap1 tempPage h-full p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <div className="major-flex">
          <div id="title-1" className="major-flex-left">
            <br />
            <h1 id="title-1" className="introPageText text-6xl">
              Hello
            </h1>
            <br />
            <h1 id="title-2" className="introPageText text-6xl">
              12.0 SENIORS
            </h1>
            <br />
            {/* <h1 id="title-3" className="introPageText text-7xl">
          Welcome To This Platform
        </h1> */}
            <h1 id="title-4" className="introPageText text-6xl">
              Get Ready For A Small Quiz
            </h1>
          </div>
          <div className="major-flex-right">
            <img
              src={groupImg}
              id="title-4"
              className="test-img-display"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="introPage h-full flex bg-gray-950 justify-center place-items-center">
        {/* <h1 id="welcome" className="text-9xl font-bold text-gray-100">
          Happy
        </h1> */}
        <div id="welcome">
          <Test />
        </div>
      </div>
    </div>
  );
};

export default GsapImplementation;
