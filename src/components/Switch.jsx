import Home from "./Home"
import Projects from "./Projects";

export default function Switch({panel}) {
  function mod(n, m) {
    return((n % m) + m) % m;
  }

  switch(mod(panel, 3)){
    case 0: return <Home />
    case 1: return <>Skills</>
    case 2: return <Projects />
  }
}