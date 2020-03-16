//react imports
import React, { useState, useEffect } from "react";

//other imports
const electron = window.require("electron");
const mainWindow = electron.remote.getCurrentWindow();

const VideoControls = ({ history }) => {
  const [video, setVideo] = useState();

  useEffect(() => {
    const videoElement = document.getElementById("video");
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
      <button onClick={() => history.push("/")}>Return to Series Menu</button>
    </div>
  );
};

export default VideoControls;
