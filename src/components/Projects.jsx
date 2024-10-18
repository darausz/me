import stand from "../assets/Stand.png"
import ctgcompostpreview from "../assets/CTGCompostFinderPreview.jpg"
import ctgshopifypreview from "../assets/CTGShopifyPreview.jpg"
import Card from "./Card"

export default function Projects() {
  return (
    <div className="h-full">
      <div className="monitor flex flex-wrap m-auto text-center justify-center bg-black gap-8">
        <h1 className="w-full pt-8">Projects</h1>
        <Card project={
          {
            back: "Valorant Logo",
            name: "Valorant Wiki",
            link: 'https://darausz.github.io/valorant-wiki/',
            img: 'https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum itaque porro vero? Neque beatae ea at, maxime earum adipisci velit, rerum dolore molestiae id et tenetur asperiores saepe commodi!"
          }
        } />
        <Card project={
          {
            back: "CTG Logo",
            name: "Compost Finder",
            link: 'https://ctg-compost-finder.onrender.com/',
            img: ctgcompostpreview,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum itaque porro vero? Neque beatae ea at, maxime earum adipisci velit, rerum dolore molestiae id et tenetur asperiores saepe commodi!"
          }
        } />
        <Card project={
          {
            back: "CTG Logo",
            name: "Commit to Green",
            link: 'https://committogreen.com/',
            img: ctgshopifypreview,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum itaque porro vero? Neque beatae ea at, maxime earum adipisci velit, rerum dolore molestiae id et tenetur asperiores saepe commodi!"
          }
        } />
      </div>
      <img src={stand} className="mx-auto"></img>
    </div>
  )
}