import React, { useEffect } from "react";
const defaultPath =
  "/home/aaron/FullStack/Hackathon/localthits1/src/library/beautiful scene of nature.mp4";

const VideoPlayer = ({ width, height, path, auto }) => {
  let srcPath = path || defaultPath;
  useEffect(() => {
    const video = document.getElementById("video");
    video.autoplay = auto;
  }, [path, auto]);
  return (
    <video width={width} height={height} id="video">
      <source src={srcPath} type="video/mp4" />
      <source src={srcPath} type="video/ogg" />
    </video>
  );
};

export default VideoPlayer;
