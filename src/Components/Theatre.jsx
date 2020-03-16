//react imports
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Component imports
import { VideoPlayer, VideoControls } from "./";

//other imports
import { library } from "../library";

const Theatre = ({ history }) => {
  const { genreName, clipTitle } = useParams();

  const [srcPath, setSrcPath] = useState("");

  useEffect(() => {
    const clipObject = library[genreName].filter(
      clip => clip.title === clipTitle
    );
    setSrcPath(clipObject[0].path);
  }, [clipTitle, genreName, srcPath]);

  return (
    <div>
      <VideoPlayer path={srcPath} auto={true} />
      <VideoControls history={history} />
    </div>
  );
};

export default Theatre;
