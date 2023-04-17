import './App.css';

function App() {
  return (
    <div className='container'>
      {/* Navigation bar */}
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
        <button className='hidden md:block rounded bg-[#FA8443] text-white  px-6 py-2 font-Lato text-sm'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;
