import Card from "./Card"
import rotate from "../assets/rotate.png"

export default function Test() {
  return (
    <div>
      <div className="warning">
        <p>sorry! this website is only viewable in landscape mode</p>
        <p>please rotate your device</p>
      </div>
      <img class="rotate" src={rotate}></img>
    </div>
  )
}