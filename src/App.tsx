import { useState } from 'react'
import './App.css'
import Switch from './components/Switch'
import Contact from './components/Contact'
import arrow from "./assets/Arrow.png"
import Room from './components/Room'


function App() {
  const [panel, setPanel] = useState(0)
  const [view, setView] = useState("top")

  // return (
  //   <>
  //     {view === "top" ?
  //       <>
  //         {/* <button className=' bg-slate-400 absolute left-0 top-1/2 h-16 w-16' onClick={() => { setPanel((panel) => panel - 1) }}>Left</button> */}
  //         <div className=' absolute left-0 top-1/2 h-16 w-16 rotate-180' onClick={() => { setPanel((panel) => panel - 1) }} style={{ cursor: 'pointer' }}>
  //           <img src={arrow}></img>
  //         </div>
  //         <Switch panel={panel} />
  //         <div className=' absolute right-0 top-1/2 h-16 w-16' onClick={() => { setPanel((panel) => panel + 1) }} style={{ cursor: 'pointer' }}>
  //           <img src={arrow}></img>
  //         </div>
  //         {/* <button className=' bg-slate-400 absolute left-1/2 bottom-0 h-16 w-16' onClick={() => { setView("bottom") }}>Bottom</button> */}
  //         <div className='absolute left-1/2 bottom-0 h-16 w-16 rotate-90' onClick={() => { setView("bottom") }} style={{ cursor: 'pointer' }}>
  //           <img src={arrow}></img>
  //         </div>
          
  //       </>
  //       :
  //       <>
  //         <Contact />
  //         {/* <button className=' bg-slate-400 absolute left-1/2 top-0 h-16 w-16' onClick={() => { setView("top") }}>top</button> */}
  //         <div className='absolute left-1/2 top-0 h-16 w-16 -rotate-90' onClick={() => { setView("top") }} style={{ cursor: 'pointer' }}>
  //           <img src={arrow}></img>
  //         </div>
  //       </>
  //     }


  //   </>
  // )

  return(
    <Room />
  )
}

export default App
