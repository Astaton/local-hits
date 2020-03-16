//react imports
import React, { useState, useEffect } from "react";

//style imports
import "../css/VideoControls.css";

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
    video.webkitExitFullScreen();
  };

  return (
    <div className="videoControls">
      <button onClick={playPauseHandler}>Play/Pause</button>
      <button onClick={fullScreenHandler}>Exit Full Screen</button>
      <button onClick={() => history.push("/")}>Return to Main Menu</button>
    </div>
  );
};

export default VideoControls;
