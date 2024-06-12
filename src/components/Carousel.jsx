import { Box, Image, Center } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const headingOptions = {
  pos: "relative",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};
const MyCarousel = ({ images }) => (
  <div style={{ height: "20rem" }} className="check-carousel">
    <Center
      display="flex"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      p={0}
      m={0}
    >
      <Box maxW="20rem" w="20rem" h="20rem" p={0} m={0}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          {images.map((item) => (
            <Box key={Math.random()} w="20rem" h="20rem" p={0} m={0}>
              <Image src={item} h="full" w="full" objectFit="cover" />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Center>
  </div>
);

export default MyCarousel;
