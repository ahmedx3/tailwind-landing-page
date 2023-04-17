import TravelCard from '../components/TravelCard';

function FeaturesSection() {
  return (
    <div className='flex flex-col p-6 px-10 space-y-4 items-center md:items-start'>
      <h1 className='font-Lato font-bold text-3xl '>Popular Destinations</h1>
      <p className='font-Lato text-[#333333] text-center'>
        Vacations to make your experience enjoyable in Indonesia!{' '}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
      </div>
    </div>
  );
}

export default FeaturesSection;
