function NavigationBar() {
  return (
    <div className='flex justify-between items-center p-6 px-10'>
      <h1 className='font-roboto text-[#42A7C3] text-2xl font-bold'>
        Traveling!
      </h1>
      <div className='hidden md:block flex space-x-16'>
        <a href='www.google.com' className='font-Lato text-sm'>
          Product
        </a>
        <a href='www.google.com' className='font-Lato text-sm'>
          Contact Us
        </a>
        <a href='www.google.com' className='font-Lato text-sm'>
          About Us
        </a>
      </div>
      <button className='hidden md:block rounded bg-[#FA8443] text-white  px-6 py-2 font-Lato text-sm hover:bg-orange-700'>
        Sign Up
      </button>

      <button
        data-collapse-toggle='navbar-hamburger'
        type='button'
        class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        aria-controls='navbar-hamburger'
        aria-expanded='false'
        className='md:hidden'
      >
        <span class='sr-only'>Open main menu</span>
        <svg
          class='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default NavigationBar;
