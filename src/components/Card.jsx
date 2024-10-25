import { useState, useEffect } from "react"
import github from "../assets/GitHub Button.png"
import go from "../assets/Share Button.png"

export default function Card({ project, front, back }) {
  const [disabled, setDisabled] = useState(true)
  const [floatIn, setFloatIn] = useState("float")
  const [hover, setHover] = useState(false)
  const [cardBack, setBack] = useState("facedown")

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  useEffect (() => {
    async function floatIn() {
      await timeout(500)
      setFloatIn("")
      setDisabled(false)
    }

    if (!hover) {
      floatIn()
    }
  },[])

  async function swap() {
    setBack("back")
    await timeout(500)
    setHover(true)
  }

  return (
    hover ?
      <div className={`project ${front} ${hover ? "front flipped" : null} ${project.back == null ? "" : "bg-purple-300"}`} style={{ filter: "brightness(100%)" }}>
        <div>
          <div className="project-name">{project.name}</div>
          <img className="preview h-40 object-cover" src={project.img}></img>
        </div>
        <div className="project-description">
          {project.desc.split("<br/>").join("\n")}
          {project.additional ? <div className="text-sm"><br />{project.additional}</div> : null}
        </div>
        <div className="share-buttons flex">
          <div><a href={project.github} target="_blank"><img src={github}></img></a></div>
          <div><a href={project.link} target="_blank"><img src={go}></img></a></div>
        </div>
      </div>
      :
      <div className={`project ${floatIn} ${back} ${cardBack} bg-red-300`} style={{"pointer-events": `${disabled ? "none" : "auto"}`}} onMouseEnter={() => { swap() }}>
        {project.back}
      </div>
  )
}