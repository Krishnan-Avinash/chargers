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

//VIDEO
// import vid from ""

const Welcome = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="welcome-parent">
      {/* <img
        src={invitation_pic}
        alt=""
        style={{ height: "30rem", width: "20rem" }}
      /> */}
      <video
        src="https://res.cloudinary.com/dhkkz35jy/video/upload/v1718448159/IMG_0441_gcbtsb.mp4"
        alt=""
        autoPlay
        style={{ height: "40rem", width: "30rem" }}
        controls
      />
      <Alert status="success">
        <AlertIcon />
        An Email for the same has been sent on you entered Email Address
      </Alert>
      <Confetti width={width} height={height} />;
    </div>
  );
};

export default Welcome;
