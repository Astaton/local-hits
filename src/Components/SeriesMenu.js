//react imports
import React, { useState, useEffect } from "react";

//Component imports
import { DisplaySeries, SelectedSeriesInfo } from "./";

//other imports
import { library } from "../library";

const SeriesMenu = () => {
  const [series, setSeries] = useState(Object.keys(library));
  const [selectedSeries, setSelectedSeries] = useState(library[series[0]][0]);
  useEffect(() => {
    console.log("In SeriesMenu selectedSeries is: ", selectedSeries.path);
  }, []);

  return (
    <div>
      <p>Series Menu</p>
      <DisplaySeries
        series={series}
        setSeries={setSeries}
        setSelectedSeries={setSelectedSeries}
      />
      <SelectedSeriesInfo
        title={selectedSeries.title}
        path={selectedSeries.path}
      />
    </div>
  );
};

export default SeriesMenu;
