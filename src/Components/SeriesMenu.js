//react imports
import React, { useState, useEffect } from "react";

//Component imports
import { DisplaySeries, SelectedSeriesInfo } from "./";

//style import
import "../css/SeriesMenu.css";

//other imports
import { library } from "../library";

const SeriesMenu = ({ history }) => {
  const libraryGenres = Object.keys(library);
  const [genre, setGenre] = useState(library[libraryGenres[0]]);
  const [selectedSeries, setSelectedSeries] = useState(
    library[libraryGenres[0]][0]
  );

  return (
    <div className="seriesMenu">
      <DisplaySeries
        genre={genre}
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
      />
      <SelectedSeriesInfo
        genreName={libraryGenres[0]}
        title={selectedSeries.title}
        path={selectedSeries.path}
        history={history}
      />
    </div>
  );
};

export default SeriesMenu;
