//react imports
import React from "react";

//component imports
import { SeriesPreview } from "./";

//style import
import "../css/DisplaySeries.css";

const DisplaySeries = ({ genre, selectedSeries, setSelectedSeries }) => {
  return (
    <div className="displaySeriesWrapper">
      {genre.map(series => {
        return (
          <SeriesPreview
            series={series}
            setSelectedSeries={setSelectedSeries}
          />
        );
      })}
    </div>
  );
};

export default DisplaySeries;
