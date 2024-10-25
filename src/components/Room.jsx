import React from "react"
import { useNavigate } from "react-router-dom"
import Light from "./Light";
import shelf1 from "../assets/Shelf1.png";
// import lightOn from "../assets/LightOn.png"
// import lightOff from "../assets/LightOff.png"
import bookshelf from "../assets/Bookshelf.png"
import floor from "../assets/Floor.png"
import background from "../assets/Background.png"
import setup from "../assets/Setup.png"
import { useState } from "react";

export default function Room() {
  // const [darkMode, setDarkMode] = useState(false)
  const nav = useNavigate()

  return (
    <div className='wall'>
      <div className="absolute left-0 bottom-0">
        <img src={background}></img>
      </div>
      <Light />
      <div className='display absolute left-1/2 top-1/4'>
        <div className='item bold text-4xl'>Daraus Zhang</div>
        {/* <div className='shelf bg-amber-800 w-64 h-3'></div> */}
        <div className='wallShelf'>
          <img src={shelf1}></img>
        </div>
      </div>
      <div className="absolute left-20 bottom-12 w-96">
        <img src={bookshelf} style={{ cursor: 'pointer' }} onClick={() => {nav("/skills")}}></img>
      </div>
      <div className="setup absolute right-32 bottom-5">
        <img src={setup} onClick={() => {nav("/projects")}}></img>
      </div>
    </div>
  )
}