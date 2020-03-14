//react imports
import React from "react";

//Component imports
import { VideoPlayer } from "./";

const SelectedSeriesInfo = ({ title, path }) => {
  console.log("In series info path is: ", path);
  return (
    <div className="SeriesInfoContainer">
      <VideoPlayer src={path} />
      <p>{title}</p>
    </div>
  );
};

export default SelectedSeriesInfo;
