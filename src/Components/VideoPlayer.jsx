import React, { useEffect } from "react";

const defaultPath =
  "/home/aaron/FullStack/Hackathon/localthits1/src/library/beautiful scene of nature.mp4";

const VideoPlayer = ({ width, height, path }, props) => {
  let srcPath = path || defaultPath;
  console.log("In VideoPlayer the srcPath is: ", srcPath);
  useEffect(() => {
    console.log("the props in VideoPlayer are: ", props);
    console.log("the path in VideoPlayer is: ", path);
  }, []);
  return (
    <video controls width={width} height={height}>
      <source
        src={
          "/home/aaron/FullStack/Hackathon/localthits1/src/library/beautiful scene of nature.mp4"
        }
        type="video/mp4"
      />
      <source src={srcPath} type="video/ogg" />
    </video>
  );
};

export default VideoPlayer;
