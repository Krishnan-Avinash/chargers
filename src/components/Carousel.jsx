import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/test1.jpg";
import img2 from "../../assets/test2.jpeg";
import img3 from "../../assets/test3.webp";
import img4 from "../../assets/test4.jpg";
import vid from "../../assets/test5.mp4";

import VideoPlayer from "./VideoPlayer";

const headingOptions = {
  pos: "relative",
  left: "50%",
  //   top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};
const MyCarousel = ({ images }) => (
  <div style={{ height: "20rem" }}>
    <Center
      display="flex"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      p={0}
      m={0}
    >
      {" "}
      {/* Centering the carousel */}
      <Box maxW="20rem" w="20rem" h="20rem" p={0} m={0}>
        {" "}
        {/* Set max width and height */}
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <Box w="20rem" h="20rem" p={0} m={0}>
            <Image src={img1} h="full" w="full" objectFit="cover" />
          </Box>
          <Box w="20rem" h="20rem" p={0} m={0}>
            <Image src={img2} h="full" w="full" objectFit="cover" />
          </Box>
          <Box w="20rem" h="20rem" p={0} m={0}>
            <Image src={img3} h="full" w="full" objectFit="cover" />
          </Box>
          <Box w="20rem" h="20rem" p={0} m={0}>
            <Image src={img4} h="full" w="full" objectFit="cover" />
          </Box>
          <Box w="20rem" h="20rem" p={0} m={0}>
            <VideoPlayer
              src={vid}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        </Carousel>
      </Box>
    </Center>
  </div>
);

export default MyCarousel;
