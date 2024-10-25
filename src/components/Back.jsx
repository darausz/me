import { useNavigate } from "react-router-dom"
import back from "../assets/Back.png"

export default function Back({ navigate }) {
  const nav = useNavigate()

  return (
    <img src={back} className="absolute top-5 left-5 backArrow"
      style={{ cursor: 'pointer' }}
      onClick={() => { nav(navigate) }}>
    </img>
  )
}