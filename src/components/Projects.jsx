import stand from "../assets/Stand.png"
import ctgcompostpreview from "../assets/CTGCompostFinderPreview.jpg"
import ctgshopifypreview from "../assets/CTGShopifyPreview.jpg"
import Monitor from "./Monitor"
import Back from "./Back"
import valoFront from "../assets/valorant Front.png"
import valoBack from "../assets/valorant Back.png"


export default function Projects() {

  return (
    <div className="h-full">
      <Monitor />
      <Back navigate={"/"} />
      <img src={stand} className="mx-auto"></img>
    </div>
  )
}