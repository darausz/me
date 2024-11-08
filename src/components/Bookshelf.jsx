// import useDetectScroll from "@smakss/react-scroll-direction"
import { useState, useEffect, useRef } from "react"
import Back from "./Back.jsx"
import bookshelfTop from "../assets/bookshelfTop.png"
import bookshelfSide from "../assets/bookshelfSide.png"
import bookshelfCorner from "../assets/bookshelfCorner.png"
import bookshelfLeft from "../assets/bookshelfLeft.png"
import bookshelfRow from "../assets/bookshelfRow.png"
import sanderson from "../assets/sanderson.png"
import sekiro from "../assets/sekiro.png"  
import skills from "../assets/skills.png"
import contacts from "../assets/contacts.png"
import contactPage from "../assets/contactPage.png"
import phoneIcon from "../assets/phoneIcon.png"
import emailIcon from "../assets/emailIcon.png"
import linkedInIcon from "../assets/linkedInIcon.png"
import gitHubIcon from "../assets/gitHubIcon.png"
import aboutMe from "../assets/aboutMe.png"
import me from "../assets/me.png"

export default function Bookshelf() {
  const[contact, setContact] = useState(false)
  const[about, setAbout] = useState(false)

  useEffect(() => {
    document.getElementById('top').scrollIntoView()
  }, [])

  return (
    <div>
      <Back navigate={"/"}/>
      <div className="relative z-40" style={{visibility: `${contact ? "visible" : "hidden"}`}}>
        <div className="overlay absolute w-screen h-screen overflow-hidden" onMouseDown={() => setContact(false)}>
          <img className="fixed center top-10 w-1/2" src={contactPage} style={{cursor: "auto"}} onMouseDown={(e) => e.stopPropagation()}></img>
          <div className="absolute center top-32 handwriting" style={{cursor: "auto"}} onMouseDown={(e) => e.stopPropagation()}>
          <div>
            <img className="contactIcon" src={phoneIcon}></img>7184149581
          </div>
          <div>
          <img className="contactIcon" src={emailIcon}></img>darauszhang@gmail.com
          </div>
          <div>
          <img className="contactIcon" src={linkedInIcon}></img>linkedin.com/in/daraus-zhang/
          </div>
          <div>
          <img className="contactIcon" src={gitHubIcon}></img>github.com/darausz
          </div>
        </div>
        </div>
      </div>
      <div className="relative z-40" style={{visibility: `${about ? "visible" : "hidden"}`}}>
        <div className="overlay absolute w-screen h-screen overflow-hidden" onMouseDown={() => setAbout(false)}>
          <img className="absolute center w-1/2" src={aboutMe} style={{cursor: "auto"}} onMouseDown={(e) => e.stopPropagation()}></img>
          <div className="absolute aboutMe handwriting"  style={{cursor: "auto"}} onMouseDown={(e) => e.stopPropagation()}>
          <div className="w-3/4 about">
            Daraus Zhang <br/> I am a web developer! I want to break into game development or software engineering. My personal website is inspired by old internet games. Feel free to look around! Check out my computer for my projects and my bookshelf for my skills, contact information, and interests.
          </div>
        </div>
        </div>
      </div>
      <div className="bookshelf bookshelfContents">
        <div className="bookshelfTop">
          <img src={bookshelfLeft}></img>
          <div id="top" className="bookshelfCover" >
          </div>
          <img className="bookshelfCorner" src={bookshelfCorner}></img>
        </div>
        <div className="bookshelfFront">
          <div className="bookshelfRows">
            <section className="row relative">
              <img src={bookshelfRow}></img>
              <img src={me} className="absolute left-32 bottom-36 highlight" style={{cursor: "pointer"}} onClick={() => setAbout(true)}></img>
              <img src={sanderson} className="absolute left-1/3 bottom-20"></img>
              <div className="bookshelfSegment"></div>
            </section>
            <section className="row relative">
              <img src={bookshelfRow}></img>
              <img src={skills} className="absolute left-20 bottom-20"></img>
              <div className="bookshelfSegment"></div>
            </section>
            <section className="row relative">
              <img src={bookshelfRow}></img>
              <img src={contacts} className="absolute left-1/2 bottom-28 highlight" style={{cursor: "pointer"}} onClick={() => setContact(true)}></img>
              <img src={sekiro} className="absolute left-32 bottom-32"></img>
              <div className="bookshelfSegment"></div>
            </section>
            {/* <section className="row w-full h-screen bg-green-400">shelf 2</section>
            <section className="row w-full h-screen bg-green-500">shelf 3</section> */}
          </div>
          <div className="bookshelfSide"><img src={bookshelfSide}></img></div>
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