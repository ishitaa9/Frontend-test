import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Weather from './components/Weather/Weather.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
      <Weather />
    </div>
  );
}

export default App;