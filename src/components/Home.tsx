export default function Home() {
  return(
    <div className='wall'>
        <div className='bg-white w-32 h-12 absolute left-1/4 top-0'>light</div>
        <div className='display absolute left-1/2 top-1/4'>
          <div className='item bold text-4xl'>Daraus Zhang</div>
          <div className='shelf bg-amber-800 w-64 h-3'></div>
        </div>
        <div className='display absolute left-1/3 top-1/2'>
            <div className='item bold text-4xl'>Software Engineer</div>
          <div className='shelf bg-amber-800 w-64 h-3'></div>
        </div>
        <div className='display absolute left-3/4 top-3/4'>
        <div className='flex justify-between items-end'>
            <div className='item bold text-4xl'>Books</div>
            <div className='plant bg-green-700 w-16 h-16'>plant</div>
          </div>
          <div className='shelf bg-amber-800 w-64 h-3'></div>
        </div>
        <div className='welcome absolute left-0 bottom-1/4'>
          Welcome! Feel free to look around (wrap text bubble)
        </div>
      </div>
  )
}