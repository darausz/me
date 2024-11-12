import stand from "../assets/Stand.png"
import Monitor from "./Monitor"
import Back from "./Back"
import monitor from "../assets/Monitor.png"

export default function Projects() {

  return (
    <div className="h-full">
      <img className="screen" src={monitor} ></img>
      <Monitor />
      <Back navigate={"/"} />
      {/* <img src={stand} className="mx-auto"></img> */}
    </div>
  )
}