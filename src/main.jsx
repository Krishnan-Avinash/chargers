import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

//COMPONENTS
import Individual from "./components/Individual";
import GsapImplementation from "./components/GsapImplementation";
import Welcome from "./components/Welcome";

//STYLE
import "./styles/main.scss";
import "./styles/test.scss";
import "./styles/individual.scss";
import "./styles/welcome.scss";

//TALIWIND
import "./styles/index.css";

//MEDIA QUERY
import "./styles/mediaQuery.scss";

//REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<GsapImplementation />} />
          <Route path="/:id" element={<Individual />} />
          <Route path="/welcome" element={<Welcome />} />
          {/* <Route path="/carousel" element={<Carousel />} /> */}
        </Routes>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
