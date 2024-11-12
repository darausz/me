import { useState } from "react"
import monitor from "../assets/Monitor.png"
import ctgcompostpreview from "../assets/CTGCompostFinderPreview.jpg"
import ctgshopifypreview from "../assets/CTGShopifyPreview.jpg"
import cards from "../assets/cards.png"
import Card from "./Card"
import valLogo from "../assets/Valorant Logo.png"
import ctgLogo from "../assets/CTG Logo.png"

export default function Monitor() {
  const [revealed, setRevealed] = useState(false)

  return (
    revealed ?
      <div className="monitor flex flex-wrap m-auto text-center justify-center">
        {/* <div className="w-3/4 bg-white mt-12" ></div> */}
        <Card project={
          {
            back: "CTG Logo",
            name: "Compost Finder",
            link: 'https://ctg-compost-finder.onrender.com/',
            img: ctgcompostpreview,
            desc: "Website allowing users to find composting solutions in their area developed with React and Supabase utilizing Leaflet for displaying location-based information on a map",
            additional: "*Currently works with New York City, Boston, Chicago, Pittsburgh, Jacksonville, Seattle, and Omaha",
            logo: ctgLogo
          }}
          card={"cfFront"}
        />
        <Card project={
          {
            back: "CTG Logo",
            name: "Commit to Green",
            link: 'https://committogreen.com/',
            img: ctgshopifypreview,
            desc: "Shopify webpage for compost bags alongside resources for composting and information about the company Commit to Green",
            logo: ctgLogo
          }}
          card={"ctgFront"}
        />
        <Card project={
          {
            back: "Valorant Logo",
            name: "Valorant Wiki",
            link: 'https://darausz.github.io/valorant-wiki/',
            github: 'https://github.com/darausz/valorant-wiki',
            img: 'https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe',
            desc: "A wiki for the popular 5v5 fps game Valorant display agents, abilities, maps, and weapons made with React utilizing RESTful APIs",
            logo: valLogo
          }}
          card={"valoFront"}
        />
      </div>
      :

      <div className="relative">
        <div className="highlight mx-auto deck" style={{ cursor: 'pointer' }} onClick={() => setRevealed(true)}>
          <img src={cards} className="cards"></img>
        </div>
      </div>
  )

}