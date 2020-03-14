import React, { useState, useEffect } from "react";

const VideoControls = () => {
  const [videoPlayer, setVideoPlayer] = useState();

  useEffect(() => {
    const videoPlayer = document.getElementsByTagName("video")[0];
    setVideoPlayer(videoPlayer);
  }, []);

  // const controls: object = {
  //   play(player: Player){
  //     player.play()
  //   }
  // }

  return (
    <div>
      <button onClick={() => videoPlayer.play()}>Play</button>
    </div>
  );
};

export default VideoControls;
