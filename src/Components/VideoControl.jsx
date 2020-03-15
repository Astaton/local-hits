//react imports
import React, { useState, useEffect } from "react";

//other imports
import { library } from "./../library";
const electron = window.require("electron");
const mainWindow = electron.remote.getCurrentWindow();

const VideoControls = () => {
  const [video, setVideo] = useState();

  useEffect(() => {
    const videoElement = document.getElementsByTagName("video")[0];
    setVideo(videoElement);
  }, []);

  const playPauseHandler = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const fullScreenHandler = () => {
    mainWindow.setFullScreen(false);
  };

  return (
    <div>
      <button onClick={playPauseHandler}>Play/Pause</button>
      <button onClick={fullScreenHandler}>Exit Full Screen</button>
    </div>
  );
};

export default VideoControls;
