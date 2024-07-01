import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade , Zoom , Slide} from 'react-slideshow-image'

function Slider() {
const slideImages =[
    {
        url: "https://oyelabs.com/wp-content/uploads/2021/03/elearning-app-business-model.jpeg" ,
    },
    {
        url: "https://www.mobulous.com/blog/wp-content/uploads/Cost-Of-E-learning-app-development-like-byjus.png" ,
    },
    {
        url: "https://www.techugo.com/blog/wp-content/uploads/2022/05/Artboard-4.png" ,  
    },
    {
        url: "https://static.vecteezy.com/system/resources/previews/001/871/409/original/student-studying-with-internet-web-concept-distance-learning-system-e-learning-easy-to-use-for-website-banner-landing-page-brochure-flyer-print-mobile-app-poster-template-ui-ux-free-vector.jpg" , 
    }
];
const divStyle ={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'400px',
    backgroundSize:'cover',
    width:'full',

}

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
    
  }

  return (
    <div className='slide-container mt-8'>
        <Slide>
            {slideImages.map((Image , index ) => {
                return (
                    <div key={index}>
                        <div style={{...divStyle , backgroundImage:`url(${Image.url})`}}>
                            <span style={{spanStyle}}>{Image.caption}</span>
                        </div>
                    </div>
            )})}
        </Slide>

    </div>
      
  )
}

export default Slider
