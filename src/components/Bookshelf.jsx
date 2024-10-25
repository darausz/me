// import useDetectScroll from "@smakss/react-scroll-direction"
import { useState, useEffect, useRef } from "react"
import Back from "./Back.jsx"
import bookshelfTop from "../assets/bookshelfTop.png"
import bookshelfSide from "../assets/bookshelfSide.png"
import bookshelfCorner from "../assets/bookshelfCorner.png"

export default function Bookshelf() {
  const[hidden, setHidden] = ("")
  // const [scrollPos, setScrollPos] = useState(window.scrollY)
  // const [currentShelf, setCurrentShelf] = useState(0)
  // const prevScrollPos = useRef(0)
  // const shelves = useRef([])

  // useEffect(() => {
  //   console.log(document.getElementById('0').scrollTop)
  // },[document.getElementById('0').scrollTop])

  useEffect(() => {
    // function change( string ) {
    //   setHidden(string)
    // }
    // window.addEventListener("scroll", () => {
    //   console.log(document.getElementById('0').scrollTop)
    //   if (document.getElementById('0').scrollTop != 0) {
    //     change("true")
    //   }
    //   else {
    //     change("")
    //   }
    // })
    function isOverflown() {
      let element = document.getElementById('0')
      console.log(element.scrollHeight, element.clientHeight)
    }
    
    document.getElementById('0').addEventListener("scroll", isOverflown)
  }, [])

  return (
    <div>
      <Back navigate={"/"}/>
      <div className="bookshelf">
        <div id="0"className="bookshelfFront">
          <div className="bookshelfTop row">
            <img src={bookshelfTop}></img>
          </div>
          <section className="row w-full h-screen bg-green-300">shelf 1</section>
          <section className="row w-full h-screen bg-green-400">shelf 2</section>
          <section className="row w-full h-screen bg-green-500">shelf 3</section>
        </div>
        <div className="bookshelfSide">
          <img src={bookshelfCorner} className={`${hidden == "" ? "none" : null}`} ></img>
          <img src={bookshelfSide}></img>
        </div>
      </div>
    </div>

  )
}  
// const { scrollDir, scrollPosition } = useDetectScroll()

  // useEffect(() => {
  //   function handleScroll() {
  //     prevScrollPos.current = scrollPos
  //     setScrollPos(window.scrollY)
  //     if (scrollPos < window.scrollY) {
  //       console.log("move to next")
  //       setCurrentShelf((currentShelf) => ((++currentShelf) % 2 + 2) % 2)

  //       document.getElementById(currentShelf).scrollIntoView()
  //     } 
  //     else if (scrollPos > window.scrollY) {
  //       console.log(scrollPos, window.scrollY)
  //       setCurrentShelf((currentShelf) => ((--currentShelf) % 2 + 2) % 2)
  //       console.log(currentShelf)
  //       document.getElementById(currentShelf).scrollIntoView()
  //     }
  //   }
  //   setTimeout(5000)
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [scrollPos, window.scrollY, setScrollPos])

  // useEffect(() => {
  //   console.log("move to ", currentShelf)
  //   document.getElementById(currentShelf).scrollIntoView()
  // },[currentShelf])


  // function timeout(delay) {
  //   return new Promise(res => setTimeout(res, delay));
  // }

  // function handleScroll() {
  //   prevScrollPos.current = scrollPos
  //   setScrollPos(window.scrollY)
  //   console.log(scrollPos, window.scrollY, prevScrollPos)
  //   if (window.scrollY > prevScrollPos.current) {
  //     setCurrentShelf((currentShelf) => ((++currentShelf) % 2 + 2) % 2)
  //     let n = currentShelf
  //     n = ((n + 1) % 2 + 2) % 2
  //     console.log(n, "bigger")
  //     document.getElementById(n).scrollIntoView()
  //   }
  //   else if (window.scrollY < prevScrollPos.current) {
  //     // prevScrollPos.current = scrollPos
  //     setCurrentShelf((currentShelf) => ((--currentShelf) % 2 + 2) % 2)
  //     let n = currentShelf
  //     n = ((n - 1) % 2 + 2) % 2
  //     console.log(n, "smaller")
  //     console.log(currentShelf)
  //     document.getElementById(n).scrollIntoView()
  //     // document.getElementById(currentShelf).scrollIntoView()
  //   }

  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [])

  // useEffect(() => {
  //   async function delay() {
  //     await timeout(1000)
  //   }
  //   window.removeEventListener('scroll', handleScroll);

  //   // document.getElementById(currentShelf).scrollIntoView()
  //   // console.log(currentShelf)
  //   setTimeout(() => {}, 2000)
  //   window.addEventListener('scroll', handleScroll);
  // }, [scrollPos])
  // useEffect(() => {
  //   async function delay() {
  //     await timeout(5000)
  //     console.log("del")
  //   }
  //   // prevScrollPos.current = scrollPos

  //   console.log(scrollPos, prevScrollPos)
  //   if (scrollPos > prevScrollPos) {
  //     setCurrentShelf((currentShelf) => ((currentShelf + 1) % 2 + 2) % 2)
  //     console.log("bigger")
  //   }
  //   else if (scrollPos < prevScrollPos) {
  //     // prevScrollPos.current = scrollPos
  //     setCurrentShelf((currentShelf) => ((currentShelf - 1) % 2 + 2) % 2)
  //     console.log("smaller")
  //     // document.getElementById(currentShelf).scrollIntoView()
  //   }

  //   prevScrollPos.current = scrollPos
  //   document.getElementById(currentShelf).scrollIntoView()
  //   // shelves[currentShelf].current.scrollIntoView()
  //   console.log(currentShelf)
  //   // document.getElementById(currentShelf.toString()).scrollIntoView({behavior: 'smooth'})
  //   // document.getElementById(currentShelf).scrollIntoView({behavior: 'smooth'})


  // }, [scrollPos])