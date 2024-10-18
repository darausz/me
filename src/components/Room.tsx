import React from "react"
import { useNavigate } from "react-router-dom"
import shelf1 from "../assets/Shelf1.png";
import light from "../assets/Light.png"
import bookshelf from "../assets/Bookshelf.png"
import floor from "../assets/Floor.png"
import setup from "../assets/Setup.png"

export default function Room() {
  const nav = useNavigate()

  return (
    <div className='wall'>
      <div className='h-32 absolute left-1/4 top-0'>
        <img src={light}></img>
      </div>
      <div className='display absolute left-1/2 top-1/4'>
        <div className='item bold text-4xl'>Daraus Zhang</div>
        {/* <div className='shelf bg-amber-800 w-64 h-3'></div> */}
        <div className='shelf'>
          <img src={shelf1}></img>
        </div>
      </div>
      <div className="absolute left-0 bottom-0">
        <img src={floor}></img>
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