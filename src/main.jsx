import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

//COMPONENTS
import App from "./App";
import IntroPage from "./components/IntroPage";
import Individual from "./components/Individual";

//STYLE
import "./styles/main.scss";
import "./styles/introPage.scss";

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
          <Route path="/" element={<IntroPage />} />
          <Route path="/:id" element={<Individual />} />
        </Routes>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
