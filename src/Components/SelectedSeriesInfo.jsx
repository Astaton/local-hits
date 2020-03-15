//react imports
import React from "react";

//Component imports
import { VideoPlayer } from "./";

//other imports
import { library } from "./../library";
const electron = window.require("electron");
const mainWindow = electron.remote.getCurrentWindow();

const SelectedSeriesInfo = ({ title, path, history }) => {
  console.log("In series inf are: ");
  const clickHandler = () => {
    mainWindow.setFullScreen(true);
    history.push("theatre");
  };
  return (
    <div className="SeriesInfoContainer" onClick={clickHandler}>
      <VideoPlayer path={path} height="400" width="500" />
      <p>{title}</p>
    </div>
  );
};

export default SelectedSeriesInfo;
