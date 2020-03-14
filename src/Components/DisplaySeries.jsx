//react imports
import React from "react";

//component imports
import { SeriesPreview } from "./";

const DisplaySeries = ({ genre, setSeries, setSelectedSeries }) => {
  return (
    <div>
      <p>Show Series here</p>
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
