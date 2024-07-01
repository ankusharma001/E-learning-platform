// import React from "react";
// import "./sidebar.css";

// import { Sidedata } from './sidebardata.jsx';

// function Sidebar()
// {
//   return (
  
//   <div className="sidebar">
//     <ul className="sidebarlist">
// {Sidedata.map((val,key)=>
// {
//   return(
//     <li key ={key} 
    
//     className="row"
//     // onClick={()=>{window.location.pathname=val.link}}
//      >
//       {""}

//       <div>
//         {val.icon}
//       </div>{""}

//       <div>
//         {val.title}
//       </div>
//     </li>
//   );
// })}
// </ul>
// </div>

// )
// }



// export default Sidebar;

// import React from "react";
// import "./sidebar.css";
// import { Sidedata } from './sidebardata.jsx';

// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <ul className="sidebarlist">
//         {Sidedata.map((val, key) => (
         
         
//          <li key={key} className="row">

//             <div id="icon">
//               <img src={val.icon} alt="" className="icon-icon"/></div>
//             <div id="title">{val.title}</div>
        
//           </li>
        
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


import React, { useState } from "react";
import "./sidebar.css";
import { Sidedata } from './sidebardata.jsx';
import Card from '../cards/card.jsx'
import Playlist from '../playlist/playlist.jsx'


function Courses() {
  const [courses,setCourses] = useState("")
  return (

    <>
    <div className="flex">
    <div className="sidebar">
      <ul className="sidebarlist">
        {Sidedata.map((val, key) => (
         
         
         <li key={key} className="row" onClick={()=>setCourses(val.link)}>

            <div id="icon">
              <img src={val.icon} alt="" className="icon-icon"/></div>
            <div id="title">{val.title}</div>
        
          </li>
        
        ))}
      </ul>

      
    </div>
    <Card courses={courses}/>
   
    </div>
    {/* <Playlist/> */}

    </>
    
  );
}

export default Courses;
