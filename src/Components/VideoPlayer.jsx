import React, { useEffect } from "react";
const defaultPath =
  "/home/aaron/FullStack/Hackathon/localthits1/src/library/beautiful scene of nature.mp4";

const VideoPlayer = ({ width, height, path, controls }) => {
  let srcPath = path || defaultPath;
  console.log("In VideoPlayer the srcPath is: ", srcPath);
  useEffect(() => {
    console.log("the path in VideoPlayer is: ", path);
  }, [path]);
  return (
    <video width={width} height={height} id="video">
      <source src={srcPath} type="video/mp4" />
      <source src={srcPath} type="video/ogg" />
    </video>
  );
};

export default VideoPlayer;
