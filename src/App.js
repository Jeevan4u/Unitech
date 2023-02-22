import './index.css'
import Navbar from './layout/Navbar';
import Banner from './pages/LandingPage/Banner';
import About from './pages/About/About';
import Flexservices from './pages/Flexservices/Flexservices';
import Portfolio from './pages/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About/>
      <Flexservices/>
      <Portfolio/>
    </div>
  );
}

export default App;
