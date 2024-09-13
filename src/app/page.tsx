// "use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
// import { useEffect, useRef } from "react";

export default function Home() {
  // const about = useRef(null)
  // useEffect(() => {
    // const aboutStyles = about.current.style;
    // console.log(aboutStyles)
    // aboutStyles.animation = "slideIn 1.5s forwards";
    // console.log(about.style)
    // about.style.animation = "animation: slideIn 1.5s forwards";
  // }, [])
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.home} id="Home">
          <div>
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={160}
              height={160}
            />
          </div>
          <div className={styles.about} /*ref={about}*/>
            <p>Hi, I'm </p>
            <p>Daraus Zhang</p>
            <p>Full Stack Developer</p>
            <p>Welcome to my page</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
          Home
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
          Projects
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
          Contact
        </a>
      </footer>
    </div>
  );
}
