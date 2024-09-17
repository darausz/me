import vite from "./assets/react.svg"

export default function Main() {
  return(
    <div className="main">
        <div className="home" id="Home">
          <div className='intro'>
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
        </div>
        <div className='skills'>
          <img src={vite} className='h-20'></img>
          <img src={vite} className='h-20'></img>
          <img src={vite} className='h-20'></img>
          <img src={vite} className='h-20'></img>
          <img src={vite} className='h-20'></img>
        </div>
        <div id="Projects">
          <div className='project'>
            <a href='https://darausz.github.io/valorant-wiki/'>
            <div>
              <img className="preview" src='https://repository-images.githubusercontent.com/858335329/e1480ce8-9374-4b6c-9546-95a7319d9ebe'></img>
              Valorant Wiki
            </div>
            </a>
          </div>
        </div>
      </div>
  )
}