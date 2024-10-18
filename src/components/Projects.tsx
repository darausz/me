import stand from "../assets/Stand.png"
import Card from "./Card"

export default function Projects() {
  return (
    <div className="h-full">
      <div className="monitor flex flex-wrap m-auto text-center justify-center bg-black gap-8">
        <h1 className="w-full pt-8">Projects</h1>
        <div className='project bg-purple-300'>
          <div className="back text-center text-9xl bg-white">
            <div className="pt-48">
              V
            </div>
          </div>
          <div className="front">
            <a href='https://darausz.github.io/valorant-wiki/' target="_blank">
              <div>
                <img className="preview" src='https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe'></img>
                Valorant Wiki
              </div>

              <div className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum itaque porro vero? Neque beatae ea at, maxime earum adipisci velit, rerum dolore molestiae id et tenetur asperiores saepe commodi!
              </div>
            </a>
          </div>
        </div>
        <div className='project'>
          <a href='https://darausz.github.io/valorant-wiki/' target="_blank">
            <div>
              <img className="preview" src='https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe'></img>
              Valorant Wiki
            </div>
          </a>
        </div>
        <Card project={
          {
            name: "Valorant Wiki",
            link: 'https://darausz.github.io/valorant-wiki/',
            img: 'https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum itaque porro vero? Neque beatae ea at, maxime earum adipisci velit, rerum dolore molestiae id et tenetur asperiores saepe commodi!"
          }
        } />
      </div>
      <img src={stand} className="mx-auto"></img>
    </div>
  )
}