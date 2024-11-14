import React from "react"
import { useNavigate } from "react-router-dom"
import Light from "./Light";
import shelf from "../assets/shelf.png";
// import lightOn from "../assets/LightOn.png"
// import lightOff from "../assets/LightOff.png"
import bookshelf from "../assets/Bookshelf.png"
import background from "../assets/Background.png"
import setup from "../assets/Setup.png"
import openWindow from "../assets/window.png"
import {useState} from "react"

export default function Room() {
  // const [darkMode, setDarkMode] = useState(false)
  const nav = useNavigate()

  return (
    <div className='wall'>
      <div className="absolute left-0 bottom-0">
        <img src={background}></img>
      </div>
      <Light />
      <div className='name'>
        <div className='blockLetters'>&nbsp;DARAUS ZHANG</div>
        {/* <div className='shelf bg-amber-800 w-64 h-3'></div> */}
        <div className='shelf'>
          <img src={shelf}></img>
        </div>
      </div>
      {/* <div className="absolute left-1/2 bottom-1/2">ADD DIPLOMA HERE</div> */}
      <div className="bookcase">
        <img className="highlight overflow-hidden" src={bookshelf} style={{ cursor: 'pointer' }} onClick={() => {nav("/bookshelf")}}></img>
      </div>
      <div className="window">
        <img src={openWindow}></img>
      </div>
      <div className="setup">
        <img className="highlight" src={setup} onClick={() => {nav("/projects")}}></img>
      </div>
    </div>
  )
}