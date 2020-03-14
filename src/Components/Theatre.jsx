import React from "react";
import { VideoPlayer, VideoControls } from "./";
import { library } from "./../library";

const Theatre = () => {
  return (
    <div>
      <VideoPlayer
        height="400"
        width="600"
        src={library["Fight Scenes"][0].path}
      />
      <VideoControls />
    </div>
  );
};

export default Theatre;
