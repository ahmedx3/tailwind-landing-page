import './App.css';
import HeroSection from './components/HeroSection';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className='container'>
      <NavigationBar />
      <HeroSection />
    </div>
  );
}

export default App;
