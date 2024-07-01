import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import "./card.css"

import { Link } from "react-router-dom";

function Pcard() {

  const ind=['1','2','3','4']
  
  return (
    <>
    <div className="card-ca">

    
<div className="card" style={{ width: '18rem'}}>
        <p className='num'><b>#1</b></p>
        <img src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
          <div className="card-body">
            
            <a href="#" className="btn btn-primary">Play</a>
            {/* <Link to="/videos" className="btn btn-primary">Play</Link> */}
          </div>
      </div>
      <div className="card" style={{ width: '18rem'}}>
        <p className='num'><b>#2</b></p>
        <img src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
          <div className="card-body">
            
            <a href="#" className="btn btn-primary">Play</a>
            
          </div>
      </div>
      <div className="card" style={{ width: '18rem'}}>
        <p className='num'><b>#3</b></p>
        <img src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
          <div className="card-body">
            
            <a href="#" className="btn btn-primary">Play</a>
            
          </div>
      </div>
      <div className="card" style={{ width: '18rem'}}>
        <p className='num'><b>#4</b></p>
        <img src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
          <div className="card-body">
            
            <a href="#" className="btn btn-primary">Play</a>
            
          </div>
      </div> <div className="card" style={{ width: '18rem'}}>
        <p className='num'><b>#5</b></p>
        <img src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
          <div className="card-body">
            
            <a href="#" className="btn btn-primary">Play</a>
            
          </div>
      </div>

     </div>
    </>
  )
}

export default Pcard