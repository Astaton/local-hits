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
  const [clipNo, setClipNo] = useState(null);
  const [intervalTimer, setIntervalTimer] = useState(null);

  useEffect(() => {
    let clipObject;
    for (let i = 0; i < library[genreName].length; i++) {
      if (library[genreName][i].title === clipTitle) {
        clipObject = library[genreName][i];
      }
    }
    setSrcPath(clipObject.path);
    const playNextCheck = () => {
      const videoElement = document.getElementById("video");
      const currentTimer = setInterval(() => {
        if (
          videoElement.currentTime === videoElement.duration &&
          clipNo < library[genreName].length
        ) {
          setClipNo(clipNo + 1);
          clearInterval(intervalTimer);
        }
      }, 999);
      setIntervalTimer(currentTimer);
    };
    playNextCheck();
    return () => {
      clearInterval(intervalTimer);
    };
  }, [clipTitle, genreName, srcPath, clipNo]);

  return (
    <div>
      <VideoPlayer path={srcPath} auto={true} />
      <VideoControls history={history} />
    </div>
  );
};

export default Theatre;
