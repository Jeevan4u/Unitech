import './index.css'
import Navbar from './layout/Navbar';
import Banner from './pages/LandingPage/Banner';
import About from './pages/About/About';
import Flexservices from './pages/Flexservices/Flexservices';
import Portfolio from './pages/Portfolio/Portfolio';
import Product from './pages/Product/Product';
import Creative from './pages/CreativePage/Creative';
import Services from './pages/Services/Services';
import Testimonials from "./pages/Testimonials/Testimonials"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About/>
      <Flexservices/>
      <Portfolio/>
      <Product/>
      <Creative/>
      <Services/>
      <Testimonials/>
    </div>
  );
}

export default App;
