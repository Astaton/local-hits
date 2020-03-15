//react imports
import React from "react";

//Component imports
import { VideoPlayer, VideoControls } from "./";

const Theatre = props => {
  console.log("In theatre the props are: ", props);
  return (
    <div>
      <VideoPlayer />
      <VideoControls />
    </div>
  );
};

export default Theatre;
