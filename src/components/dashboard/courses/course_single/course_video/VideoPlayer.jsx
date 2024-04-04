import React, { useRef, useEffect } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useState } from "react";

const VideoPlayer = ({ name, video, description, lessonId }) => {
  const ref = useRef(null);
  const player = useRef(null);
  const [sendpost, setSendPost] = useState(true);
  const defaultOptions = {
    controls: [
      "play-large",
      "play",
      "mute",
      "current-time",
      "progress",
      "duration",
      "airplay",
      "capture",
      "volume",
      "settings",
      "fullscreen",
    ],
    settings: ["quality", "speed"],
    speed: {
      selected: 1,
      options: [0.5, 1, 1.5, 2],
    },
    ratio: "16:9",
  };
  useEffect(() => {
    if (Hls.isSupported() && ref.current) {
      const hls = new Hls();
      hls.loadSource(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const availableQualities = hls.levels.map(({ height }) => height);
        defaultOptions.quality = {
          default: availableQualities[0],
          forced: true,
          onChange: (e) => updateQuality(e),
          options: availableQualities,
        };
        player.current = new Plyr(ref.current, defaultOptions);
        // player.current.elements.inputs.seek.disabled = true;
        player.current.elements.inputs.seek.draggable = false;
      });
      hls.attachMedia(ref.current);
      window.hls = hls;
    } else {
      player.current = new Plyr(ref.current, defaultOptions);
    }

    // }, [video, isEncryption]);

    setSendPost(true);
  }, [video]);

  const updateQuality = (newQuality) => {
    window.hls.levels.forEach((level, levelIndex) => {
      if (level.height === newQuality) {
        window.hls.currentLevel = levelIndex;
      }
    });
  };

  return (
    <div>
      <video
        controls
        crossOrigin="true"
        playsInline
        //   poster={Poster}
        preload="none"
        ref={ref}
        // src={video}
        width="100%"
        //   onTimeUpdate={onTimeUpdate}
      />{" "}
    </div>
  );
};

export default VideoPlayer;
