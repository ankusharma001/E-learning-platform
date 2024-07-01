import Pcard from "./playlistcard.jsx"
import "./playlist.css"
import Back from "./icons8-back-50.png"
import { useNavigate } from "react-router-dom"

function Playlist()
{
  const navigate = useNavigate()
  return (
    <>
    
    <div className="playlist">
      <img src={Back} alt="" style={{height:"25px" }}/><b onClick={()=>navigate('/courses')}>BACK</b>
      <b><p>Play List Details</p></b>
      <hr />
    <div className="head">
      <img src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain" alt=""  style={{height:"150px" }}/>
      <p><b>complete HtML Tutorial</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt consequuntur illo perspiciatis perferendis doloremque iste blanditiis quas sint id!
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores quidem distinctio dolores odit fugiat similique asperiores vel maxime quae quisquam, saepe officiis, ullam minima dolor est expedita omnis inventore! */}
        </p><p>from: 00/00/2024 to 00/00/2024</p></p>
      

    </div>
    <p><b>Playlist Videos</b></p>
    <hr />
    <Pcard/>
    </div>
    </>
  )
}
export default Playlist