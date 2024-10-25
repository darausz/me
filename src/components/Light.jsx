import { useState, useEffect } from "react";
import lightOn from "../assets/LightOn.png"
import lightOff from "../assets/LightOff.png"

export default function Light() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect (() => {
    if (!darkMode && document.body.style.backgroundColor == "rgb(205, 186, 209)") {
      toggleDarkMode()
    }
  },[])

  function toggleDarkMode() {
    const styling = document.body.style
    if (darkMode) {
      setDarkMode(false)
      styling.backgroundColor = "#f1dcf5"
      styling.filter = "brightness(100%)"
      // document.body.classList.remove('darkmode')
    }
    else {
      setDarkMode(true)
      styling.backgroundColor = "#cdbad1"
      styling.filter = "brightness(25%)"
      // document.body.classList.add('darkmode')
    }
  }

  return (
    darkMode ? 
    <div className='h-32 absolute left-1/4 top-0'>
      <img src={lightOff} style={{ cursor: 'pointer' }} onClick={toggleDarkMode}></img>
    </div>
    :
    <div className='h-32 absolute left-1/4 top-0'>
      <img src={lightOn} style={{ cursor: 'pointer' }} onClick={toggleDarkMode}></img>
    </div>
  )
}