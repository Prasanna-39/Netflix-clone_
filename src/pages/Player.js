import React from 'react';
import "./Player.css";
// use =location is use to the button clicked in 
// play button will be click and redirected to this play.js
// and use this location page to play the videos 
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Icon } from "web3uikit";

const Player = () => {
  
  const {state: currentlyPLaying} = useLocation();
  return (
  <>
  <div className="playerPage">{/* this videos source is 
  used to play the videos in the page */}
  <video autoPlay controls className="videoPlayer">
    <source
      src={currentlyPLaying}
      type="video/mp4"
    >
    </source>
  </video>

  <div className="backHome">
    <Link to="/">{/* link button will be get back to home  */}
    <Icon 
            className="backButton" 
            fill="rgba(255,255,255,0.25)" 
            size={60} 
            svg="arrowCircleLeft" 
    />
    </Link>

  </div>
  </div>
  </>
)
}

export default Player;
