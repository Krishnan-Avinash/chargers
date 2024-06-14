import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { dataSet } from "../dataset";
import emailjs from "@emailjs/browser";
import App2 from "./App2";

//LOCATION
import { useLocation } from "react-router-dom";

//CHAKRA TOAST
import {
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import MyCarousel from "./Carousel";

const Individual = () => {
  const location = useLocation();
  const customProp = location.state && location.state.customProp;

  const params = useParams();
  const [data, setData] = useState([]);
  const [pass, setPass] = useState("");

  const [flag, setFlag] = useState(customProp);

  const [emailFlag, setEmailFlag] = useState(false);
  useEffect(() => {
    setData(dataSet.find((item) => item.id == params.id));
    // console.log("DATA.DESCRIPTION ", data.description);
  }, []);

  const check = () => {
    if (pass == data.password) {
      setFlag(true);
    } else {
      setFlag(false);
      toast({
        title: "Kindly enter correct Password.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const toast = useToast();

  const form = useRef();
  const [p, setP] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x1j9p7o", "template_h759jik", form.current, {
        publicKey: "pxWtMsZz3fDp-EbC7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("ERROR ", error);
          toast({
            title: "Kindly enter correct Email Address.",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <div className="individual">
      {!flag && (
        <>
          <div className="enter-password">
            <input
              className="password"
              placeholder="Enter Password"
              onChange={(e) => setPass(e.target.value)}
            ></input>
            <button onClick={check}>Submit</button>
          </div>
        </>
      )}

      {flag && (
        <div className="main-quiz-page">
          {/* Carousel */}

          {data.arrayImages && <MyCarousel images={data.arrayImages} />}

          {/*-------------------------*/}

          <div className="description">
            <div className="top">
              Dear{" "}
              <span>{data.name ? data.name.toUpperCase() : data.name}</span>,
            </div>
            {data.description}
          </div>

          {/* EMAIL JS */}

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="to_name"
              value={data.name}
              style={{ display: "none" }}
            />
            <input
              className="password"
              type="email"
              name="to"
              placeholder="Kindly Enter Personal Email Address"
              onChange={(e) => setP(e.target.value)}
            />
            <input
              type="submit"
              value="Enter"
              onClick={() => {
                if (p.length == 0) {
                  toast({
                    title: "Kindly enter correct Email Address.",
                    status: "warning",
                    duration: 5000,
                    isClosable: true,
                  });
                  setEmailFlag(false);
                } else {
                  setEmailFlag(true);
                }
              }}
              className="button-submit"
            />
          </form>
          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>
              Providing correct personal Email Address is extremely important
            </AlertDescription>
          </Alert>

          {/*------------------------------------- */}

          {emailFlag && <App2 />}
        </div>
      )}
    </div>
  );
};

export default Individual;
