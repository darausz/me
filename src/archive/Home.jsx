import shelf1 from "../assets/Shelf1.png";
import light from "../assets/Light.png"

export default function Home() {
  return (
    <div className='wall'>
      <div className='h-32 absolute left-1/4 top-0'>
        <img src={light}></img>
      </div>
      <div className='display absolute left-1/2 top-1/4'>
        <div className='item bold text-4xl'>Daraus Zhang</div>
        {/* <div className='shelf bg-amber-800 w-64 h-3'></div> */}
        <div className='shelf'>
          <img src={shelf1}></img>
        </div>
      </div>
      <div className='display absolute left-1/3 top-1/2'>
        <div className='item bold text-4xl'>Software Engineer</div>
        {/* <div className='shelf bg-amber-800 w-64 h-3'></div> */}
        <div className='shelf'>
          <img src={shelf1}></img>
        </div>
      </div>
      <div className='display absolute left-3/4 top-3/4'>
        <div className='flex justify-between items-end'>
          <div className='item bold text-4xl'>Books</div>
          <div className='plant bg-green-700 w-16 h-16'>plant</div>
        </div>
        {/* <div className='shelf bg-amber-800 w-64 h-3'></div> */}
        <div className='shelf'>
          <img src={shelf1}></img>
        </div>
      </div>
      <div className='welcome absolute left-0 bottom-1/4'>
        Welcome! Feel free to look around (wrap text bubble)
      </div>
    </div>
  )
}