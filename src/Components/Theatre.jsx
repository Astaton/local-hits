//react imports
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Component imports
import { VideoPlayer, VideoControls } from "./";

//style imports
import "../css/Theatre.css";

//other imports
import { library } from "../library";

const Theatre = ({ history }) => {
  const { genreName, clipTitle } = useParams();

  const [srcPath, setSrcPath] = useState("");

  useEffect(() => {
    const videoElem = document.getElementById("video");
    videoElem.webkitEnterFullScreen();
    const clipObject = library[genreName].filter(
      clip => clip.title === clipTitle
    );
    setSrcPath(clipObject[0].path);
  }, [clipTitle, genreName, srcPath]);

  return (
    <div className="theatre">
      <VideoPlayer path={srcPath} auto={true} />
      <VideoControls history={history} />
    </div>
  );
};

export default Theatre;
