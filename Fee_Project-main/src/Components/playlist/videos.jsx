import React from 'react';
import "./video.css"
import Back from "./VID_20240309_020814.mp4"

function Video() {
  
  return (
    <>
    
    
      <img src={Back} alt="" style={{height:"25px", margin:"5px" }}/><b>BACK</b>
      <br /><br />
      
      <div className="video">
      <iframe
        width="1360"
        height="615"
        src={Back}
        // title="YouTube video player"
        // allowFullScreen
      ></iframe>
      </div>
      
    </>
  );
}

export default Video;
