// VideoPlayer.js
import React from "react";
import { Box } from "@chakra-ui/react";

const VideoPlayer = ({ src, width = "100%", height = "100%" }) => {
  return (
    <Box width={width} height={height} overflow="hidden" p={20}>
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer;
