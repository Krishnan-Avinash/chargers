import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

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

//VIDEO
// import vid from ""

const Welcome = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="main-welcome">
      <div className="welcome-parent">
        <div className="welcome-parent-left">
          {/* <img
            className="only-phone"
            src={invitation_pic}
            alt=""
            style={{ height: "100%" }}
          /> */}
          <video
            src="https://res.cloudinary.com/dhkkz35jy/video/upload/v1718448159/IMG_0441_gcbtsb.mp4"
            alt=""
            autoPlay
            muted
            loop
            style={{ height: "30rem", width: "20rem" }}
            controls
            className="only-laptop"
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
            style={{ height: "30rem", width: "20rem" }}
            className="only-phone"
          />
        </div>
        <div className="welcome-parent-right">
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
        <Confetti width={width} height={height} />;
      </div>
    </div>
  );
};

export default Welcome;
