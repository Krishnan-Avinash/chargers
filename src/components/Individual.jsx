import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { dataSet } from "../dataset";
import emailjs from "@emailjs/browser";

const Individual = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [pass, setPass] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setData(dataSet.find((item) => item.id == params.id));
  }, []);

  const check = () => {
    if (pass == data.password) {
      setFlag(true);
      console.log("hello");
    } else {
      setFlag(false);
      console.log("false");
    }
  };

  const form = useRef();

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
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div style={{ padding: "2rem" }}>
      {!flag && (
        <div>
          <input
            style={{ border: "1px solid black" }}
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button
            style={{ border: "1px solid blue", marginLeft: "1rem" }}
            onClick={check}
          >
            Submit
          </button>
        </div>
      )}

      {flag && (
        <div>
          <input
            style={{ border: "1px solid black", width: "20rem" }}
            type="text"
            placeholder="EMAIL"
          />
          <h1>QUIZ</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="sendername" />
            <label>Email</label>
            <input type="email" name="to" />
            {/* <label>Message</label> */}
            <textarea
              style={{ display: "none" }}
              value={data.password}
              name="message"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Individual;
