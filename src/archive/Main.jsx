import shelfFront from "../assets/shelfFront.png"
import shelf from "../assets/Shelf.png"
import books from "../assets/Books.png"
import skills from "../assets/skills.png"
import { useState, useEffect } from "react"

export default function Main() {
  let oldScrollY = 0;

  const [direction, setDirection] = useState('up');

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      console.log("down")
      setDirection('down');
    } else {
      console.log("up")
      setDirection('up');
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
      window.removeEventListener('scroll', controlDirection);
    };
  }, []);
  
  return (
    <>
    <div className="relative background w-full h-full">
      <img className="absolute bottom-20 w-3/4" src={skills}></img>
      <img className="absolute bottom-0" src={shelfFront}></img>
      <div>{direction}</div>
    </div>
    <div className="relative background w-full h-full">
      <img className="absolute bottom-20 w-3/4" src={skills}></img>
      <img className="absolute bottom-0" src={shelfFront}></img>
      <div>{direction}</div>
    </div>
    </>
    // <div className="relative background w-full h-full">
    //   <div className="shelf">
    //     <img src={shelf}></img>
    //   </div>
    //   <div className="books">
    //     <img src={books}></img>
    //   </div>
    // </div>
  )
}