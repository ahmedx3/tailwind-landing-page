function TravelCard() {
  return (
    <div className='max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-[#F2F5F6] p-4'>
      <img
        className='rounded-lg h-auto max-w-full'
        src='https://asset.kompas.com/crops/_V09GAFq4Dv4zVD6is9DdPePhAA=/0x0:780x520/750x500/data/photo/2022/02/08/62021c704aac8.jpg'
        alt=''
      />

      <div className='p-5'>
        <div className='flex flex-row'>
          <svg
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className='w-5 h-5 mr-2 text-[#42A7C3]'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
            ></path>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
            ></path>
          </svg>
          <p className='font-sm text-[#8F8F8F] '>Manggarai Barat</p>
        </div>
        <h1 href='#'>
          <h5 className='mb-2 font-Lato text-xl font-bold tracking-tight text-[#333333] '>
            Flores Road Trip 3D2N
          </h5>
        </h1>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          3 days
        </p>
        <div className='flex flex-row'>
          <p className='font-normal text-[#42A7C3] '>Rp 6.705</p>
          <p className='font-sm text-[#347F90] '>/orang</p>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
