import React, { useLayoutEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

//GSAP
import gsap from "gsap";

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

// import invitation_phone from "../../assets/invitation/Invite confetti 2_phone.gif";
import { vid, img_gif_confetti } from "../dataset";

//VIDEO
import vid2 from "../../assets/invitation/recent_video_srinath.mp4";
//VIDEO
// import vid from ""

const Welcome = () => {
  // const { width, height } = useWindowSize();
  // const comp2 = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t2 = gsap.timeline();
  //     t2.from("#image-animation", {
  //       position: "absolute",
  //       height: "150%",
  //       width: "150%",
  //       xPercent: "-100",
  //       duration: 5,
  //       delay: 1,
  //       stagger: 2,
  //       opacity: 0,
  //       filter: "blur(50px)",
  //     })

  //       .to("#image-animation", {
  //         xPercent: "+100",
  //         duration: 2,
  //         position: "absolute",
  //         height: "150%",
  //         width: "150%",
  //         opacity: 0,
  //       })
  //       .from("#hide", {
  //         opacity: 0,
  //         duration: 0.5,
  //       });
  //   }, comp2);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="main-welcome">
      <div className="welcome-parent">
        <div className="welcome-parent-left">
          <video
            src={vid2}
            alt=""
            autoPlay
            muted
            // loop
            style={{ height: "100%", width: "100%" }}
            controls
            className="only-phone"
            loading="eager"
            id="image-animation"
          />
          {/* <img
            src={img_gif_confetti}
            alt=""
            // autoPlay
            // muted
            // loop
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            // controls
            className="only-laptop"
            id="hide"
            loading="eager"
          /> */}
          <img
            src={img_gif_confetti}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            className="only-laptop"
            id="hide"
          />
        </div>
        <div className="welcome-parent-right" id="hide">
          <div class="card">
            <div class="infos">
              <p class="description">
                Join us as we celebrate your incredible journey with Chargers.
                Your dedication, talent, and spirit have been an inspiration. As
                you take your next step, we want to express our heartfelt
                gratitude and admiration. All of you have been a cornerstone of
                our Chargers Family , and we cannot imagine bidding farewell
                with your absence. This celebration is not just about saying
                goodbye, it's about expressing our deepest appreciation and the
                inspiration you have provided. Let’s create one last
                unforgettable memory together with an evening of fun, laughter,
                and dance.
              </p>
            </div>

            <div class="author">— Chargers⚡</div>
            <div className="right-box-container">
              <p class="date-time">One Name</p>
              <p class="date-time">One Team</p>
              <p class="date-time">One Love</p>
            </div>
            <hr className="horizontal-line" />
          </div>
          <a href="" target="_blank">
            <div className="location-link">
              📍 Click here to get exact location
            </div>
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
