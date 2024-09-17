import { useState } from 'react'
import './App.css'
import Switch from './components/Switch'
import Contact from './components/Contact'


function App() {
  const [panel, setPanel] = useState(0)
  const [view, setView] = useState("top")

  return (
    <>
      {view === "top" ?
        <>
          <button className=' bg-slate-400 absolute left-0 top-1/2 h-16 w-16' onClick={() => { setPanel((panel) => panel - 1) }}>Left</button>
          <Switch panel={panel} />
          <button className=' bg-slate-400 absolute right-0 top-1/2 h-16 w-16' onClick={() => { setPanel((panel) => panel + 1) }}>Right</button>
          <button className=' bg-slate-400 absolute left-1/2 bottom-0 h-16 w-16' onClick={() => { setView("bottom") }}>Bottom</button>
        </>
        :
        <>
          <Contact />
          <button className=' bg-slate-400 absolute left-1/2 top-0 h-16 w-16' onClick={() => { setView("top") }}>top</button>
        </>
      }


    </>
  )
}

export default App
