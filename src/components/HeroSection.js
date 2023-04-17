function HeroSection() {
  return (
    <div className='flex flex-col-reverse justify-between p-6 px-10 md:flex-row'>
      <div className='flex flex-col space-y-6 justify-center mt-2'>
        <h1 className='font-Poppins  text-5xl font-bold text-center md:text-left '>
          Start your journey by one click, explore beautiful world!
        </h1>
        <p className='text-gray-600 text-center md:text-left'>
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us!
        </p>
        <div className='flex flex-row justify-center md:justify-normal'>
          <button
            type='button'
            class='text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2'
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/732/732208.png'
              alt=''
              className='w-6 mr-2'
            />
            <p className='text-left'>
              <p className='text-sm'>Get it on</p>
              <p className='text-md font-bold'>Google Play</p>
            </p>
          </button>
          <button
            type='button'
            class='text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2'
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/505px-Apple_logo_white.svg.png?20220821122232'
              alt=''
              className='w-6 mr-2 '
            />
            <p className='text-left'>
              <p className='text-sm'>Get it on</p>
              <p className='text-md font-bold'>Apple Store</p>
            </p>
          </button>
        </div>
      </div>
      <img
        src='https://i.ibb.co/tqVBhkP/illus.png'
        alt=''
        className='max-w-xl space-y-12'
      />
    </div>
  );
}

export default HeroSection;
