import Home from "./Home"

interface Props {
  panel: number
}
export default function Switch({panel}: Props) {
  function mod(n: number, m: number) {
    return((n % m) + m) % m;
  }

  switch(mod(panel, 3)){
    case 0: return <Home />
    case 1: return <>Skills</>
    case 2: return <>Projects</>
  }
}