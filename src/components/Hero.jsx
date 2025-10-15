const Hero = () => {
  const paginationItemStyle = 'w-2 h-2 border border-white rounded-full'

  return (
    <div className='px-10 flex-1 flex items-center'>
      <div className='text-center text-white space-y-4 md:space-y-6'>
        <p className='font-medium text-lg sm:text-xl md:text-2xl'>Startup 3</p>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold'>
          Forget About Code
        </h1>
        <p className='text-sm md:text-lg md:w-[50%] md:mx-auto'>
          Startup Framework gives you complete freedom over your creative
          process — you don&apos;t have to think about any technical aspects.
          There are no limits and absolutely no coding.
        </p>

        {/* pagination for large devices */}
        <div className='flex justify-center gap-1'>
          <div className={`${paginationItemStyle} bg-white`}></div>
          <div className={paginationItemStyle}></div>
          <div className={paginationItemStyle}></div>
          <div className={paginationItemStyle}></div>
          <div className={paginationItemStyle}></div>
        </div>

        <button className='bg-primary px-7 py-2 rounded-full'>
          Create an Account
        </button>
      </div>
    </div>
  )
}

export default Hero
