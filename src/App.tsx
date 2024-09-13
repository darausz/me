import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <main className="main">
        <div className="home" id="Home">
          <div>
            <img
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={160}
              height={160}
            />
          </div>
          <div className="about">
            <p>Daraus Zhang</p>
            <p>Full Stack Developer</p>
            <p>Welcome to my page</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
