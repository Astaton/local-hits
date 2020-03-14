//react imports
import React from "react";

//other imports
// import { library } from "../library"

const SeriesPreview = ({ title, img, series, setSelectedSeries }) => {
  return (
    <div
      key={series.title}
      className="seriesPreviewContainer"
      onClick={() => setSelectedSeries(series)}
    >
      <img src={series.img} alt="series preview" />
      <p>{series.description}</p>
    </div>
  );
};

export default SeriesPreview;
