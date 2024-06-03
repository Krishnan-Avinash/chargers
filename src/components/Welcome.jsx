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

const Welcome = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="welcome-parent">
      <img src={img1} alt="" style={{ height: "30rem", width: "20rem" }} />
      <Alert status="success">
        <AlertIcon />
        An Email for the same has been sent on you entered Email Address
      </Alert>
      <Confetti width={width} height={height} />;
    </div>
  );
};

export default Welcome;
