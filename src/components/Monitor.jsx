import { useState } from "react"
import ctgcompostpreview from "../assets/CTGCompostFinderPreview.jpg"
import ctgshopifypreview from "../assets/CTGShopifyPreview.jpg"
import Card from "./Card"

export default function Monitor() {
  const [revealed, setRevealed] = useState(false)

  return (
    revealed ?
      <div className="monitor flex flex-wrap m-auto text-center justify-center bg-black gap-8">
        {/* <div className="w-3/4 bg-white mt-12" ></div> */}
        <h1 className="w-full pt-8">Projects</h1>
        <Card project={
          {
            back: "Valorant Logo",
            name: "Valorant Wiki",
            link: 'https://darausz.github.io/valorant-wiki/',
            github: 'https://github.com/darausz/valorant-wiki',
            img: 'https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe',
            desc: "A wiki for the popular 5v5 fps game Valorant display agents, abilities, maps, and weapons made with React utilizing RESTful APIs"
          }}
          front={"valoFront"}
          back={"valoBack"}
        />
        <Card project={
          {
            back: "CTG Logo",
            name: "Compost Finder",
            link: 'https://ctg-compost-finder.onrender.com/',
            img: ctgcompostpreview,
            desc: "Website allowing users to find composting solutions in their area developed with React and Supabase utilizing Leaflet for displaying location-based information on a map",
            additional: "*Currently works with New York City, Boston, Chicago, Pittsburgh, Jacksonville, Seattle, and Omaha"
          }}
          front={"cfFront"}
          back={"cfFront"}
        />
        <Card project={
          {
            back: "CTG Logo",
            name: "Commit to Green",
            link: 'https://committogreen.com/',
            img: ctgshopifypreview,
            desc: "Shopify webpage for compost bags alongside resources for composting and information about the company Commit to Green"
          }}
          front={"ctgFront"}
          back={"ctgFront"}
        />
      </div>
      :
      <div className="monitor flex flex-wrap m-auto text-center justify-center bg-black gap-8">
        <div className="highlight w-3/4 h-16 bg-white mt-12" style={{ cursor: 'pointer' }} onClick={() => setRevealed(true)}>
          Reveal the Cards
        </div>
      </div>
  )

}