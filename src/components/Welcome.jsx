import React, { useLayoutEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

//GSAP
import gsap from "gsap";

//IMAGE IMPORT
import img1 from "../../assets/test1.jpg";

//CHAKRA UI IMPORTS
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

//INVITAION IMPORT
// import invitation from "../../assets/invitation/IMG_0441.MP4";
import invitation_pic from "../../assets/invitation/invitation_img.jpg";

import invitation_phone from "../../assets/invitation/Invite confetti 2_phone.gif";
import { vid } from "../dataset";

//VIDEO
// import vid from ""

const Welcome = () => {
  // const { width, height } = useWindowSize();
  const comp2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t2 = gsap.timeline();
      t2.from("#image-animation", {
        position: "absolute",
        height: "150%",
        width: "150%",
        xPercent: "-100",
        duration: 5,
        delay: 1,
        stagger: 2,
        opacity: 0,
        filter: "blur(50px)",
      })

        .to("#image-animation", {
          xPercent: "+100",
          duration: 2,
          position: "absolute",
          height: "150%",
          width: "150%",
          opacity: 0,
        })
        .from("#hide", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp2);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-welcome">
      <div className="welcome-parent" ref={comp2}>
        <div className="welcome-parent-left">
          {/* <img
            className="only-phone"
            src={invitation_pic}
            alt=""
            style={{ height: "100%" }}
          /> */}
          <video
            src={vid}
            alt=""
            autoPlay
            muted
            loop
            style={{ height: "30rem", width: "20rem" }}
            controls
            // className="only-laptop"
            loading="eager"
            id="image-animation"
          />
          <img
            src={invitation_phone}
            alt=""
            // autoPlay
            // muted
            // loop
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            // controls
            className="only-laptop"
            id="hide"
          />
          {/* <video
            src={invitation_phone}
            alt=""
            autoPlay
            muted
            // loop
            style={{ height: "30rem", width: "20rem" }}
            controls
            className="only-phone"
          /> */}
          <img
            src={invitation_phone}
            alt=""
            style={{ height: "40rem", width: "30rem", objectFit: "contain" }}
            className="only-phone"
            id="hide"
          />
        </div>
        <div className="welcome-parent-right" id="hide">
          <h1>Hello</h1>
          <h1>Join us on date </h1>
          <a href="https://www.google.com/" target="_blank">
            📍Click here to get exact location
          </a>
        </div>
      </div>
      <div className="bottom">
        <Alert status="success" className="Alert">
          <AlertIcon />
          An Email for the same has been sent on you entered Email Address
        </Alert>
        {/* <Confetti width={width} height={height} />; */}
      </div>
    </div>
  );
};

export default Welcome;
