import stand from "../assets/Stand.png"
import Monitor from "./Monitor"
import Back from "./Back"

export default function Projects() {

  return (
    <div className="h-full">
      <Monitor />
      <Back navigate={"/"} />
      <img src={stand} className="mx-auto"></img>
    </div>
  )
}