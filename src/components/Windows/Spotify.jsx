import React from "react";
import MacWindow from "./MacWindow";

function Spotify() {


  return (
    <MacWindow width="30vw">
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{borderRadius:"12px"}}
          src="https://open.spotify.com/embed/playlist/4SkEJi0oLstW50NG7yUtqR?utm_source=generator&si=0b2447f41c1540b5"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
}

export default Spotify;
