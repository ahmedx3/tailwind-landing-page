import './App.css';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className='container'>
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default App;
