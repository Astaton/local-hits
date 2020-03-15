//react imports
import React from "react";

//style import
import "../css/SeriesPreview.css";
//other imports
// import { library } from "../library"

const SeriesPreview = ({ series, setSelectedSeries }) => {
  const clickHandler = () => {
    setSelectedSeries(series);
    document.getElementById("video").load();
  };
  return (
    <div
      key={series.title}
      className="seriesPreviewContainer"
      onClick={clickHandler}
    >
      <img
        className="seriesPreviewImg"
        src={series.image}
        alt="series preview"
      />
      <p>{series.description}</p>
    </div>
  );
};

export default SeriesPreview;
