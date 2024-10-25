import Back from "./Back"
import bookshelfExpanded from "../assets/BookshelfExpanded.png"

export default function Skills() {
  return(
    <div className="w-4/5 mx-auto">
      <img className="body-style " src={bookshelfExpanded}></img>
      <Back navigate={"/"}></Back>
    </div>
  )
}