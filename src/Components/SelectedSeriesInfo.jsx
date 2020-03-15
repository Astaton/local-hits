//react imports
import React from "react";

//Component imports
import { VideoPlayer } from "./";

//style import
import "../css/SelectedSeriesInfo.css";

//other imports
import { library } from "./../library";
const electron = window.require("electron");
const mainWindow = electron.remote.getCurrentWindow();

const SelectedSeriesInfo = ({ title, path, history }) => {
  const clickHandler = () => {
    mainWindow.setFullScreen(true);
    history.push("theatre");
  };
  return (
    <div className="SeriesInfoContainer" onClick={clickHandler}>
      <VideoPlayer path={path} width="500" />
      <div className="titleWrapper">
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default SelectedSeriesInfo;
