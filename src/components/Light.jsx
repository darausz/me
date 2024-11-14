import { useState, useEffect } from "react";
import lightOn from "../assets/LightOn.png"
import lightOff from "../assets/LightOff.png"

export default function Light({darkMode, toggleDarkMode}) {

  return (
    darkMode ? 
    <div className='light h-28 absolute left-1/4 top-0'>
      <img className="highlight" src={lightOff} style={{ cursor: 'pointer' }} onClick={toggleDarkMode}></img>
    </div>
    :
    <div className='light h-10 absolute left-1/4 top-0'>
      <img className="highlight" src={lightOn} style={{ cursor: 'pointer' }} onClick={toggleDarkMode}></img>
    </div>
  )
}