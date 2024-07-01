
import React from "react";
import "./card.css"
import Container from "./container";
import 'bootstrap/dist/css/bootstrap.min.css'
import profile from './profile.png'
import { useNavigate } from "react-router-dom";



const Card = (props) => {
  const Navigation = useNavigate()

  const data = [

    { 
      name: `teacher_name`,
      img: profile,
      title: `HTML`,
      coursephoto:'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-image-logo-html-7.png'
    },
    {
      name: `teacher_name`,
      img: profile,
      title: `CSS`,
      coursephoto:'https://2.bp.blogspot.com/-u7D-CIDmuzE/XHSaUZ74evI/AAAAAAAASEw/tDY0LYG-Ra4rMlSUi9BLioDgT5WT5MUOwCLcBGAs/s1600/CSS%2B3.png'
    },
    {
      name: `teacher_name`,
      img: profile,
      title: `HTML // CSS`,
      coursephoto:'https://i2.wp.com/www.globalwireonline.org/wp-content/uploads/2014/05/html5-css3.png'
    },
    {
      name: `teacher_name`,
      img: profile,
      title: `BOOTSTRAP CSS`,
      coursephoto:'https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png'
    },
    {
      name: `teacher_name`,
      img: profile,
      title: `TAILWIND CSS`,
      coursephoto:'https://mythinkpond.com/img/logo/tailwindcss-logo.png'
    }, 
    
  ];
  

  return (
    <>
      <Container>


        {data.map((dat,index) =>
        (dat.title.toLowerCase().includes(props.courses) &&
        
          <div className="card " key={index} style={{ width: "18rem"  , height: "19rem"}} onClick={()=>Navigation('/html')}>
           <div className="cardhead" >
            <img src={dat.img} className="card-img-top img" alt="..." />
            <p className="card-text ml-4 "> <b> {dat.name}</b></p>
            </div>
            <img src={dat.coursephoto} alt=""  className="cousrsephoto"/>


           <p className="card-text hidden-name">
          <b>{dat.title}</b>   
          </p>
          </div>
          
        
        ))}

      </Container>
    </>
  )
}


export default Card;