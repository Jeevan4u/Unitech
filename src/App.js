import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import AboutPage from './pages/AboutPage/AboutPage';
import Home from './pages/Home/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import CarreerPage from './pages/CarreerPage/CarreerPage';
import BlogIndex from './pages/BlogPage/BlogIndex';
import Contactindex from './pages/ContactPage/Contactindex';
import ScrollToTop from './Components/ScrollTop';
import Work from './pages/WorkPage/Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <ScrollToTop/>
        <Routes>
              <Route  index element = {<Home/>} />
              <Route path='/about'  element = {<AboutPage/>} />
              <Route path='/services'  element = {<ServicesPage/>} />
              <Route path='/career'  element = {<CarreerPage/>} />
              <Route path='/blog'  element = {<BlogIndex/>} />
              <Route path='/contact'  element = {<Contactindex/>} />
              <Route path='/work'  element = {<Work/>} />
          </Routes>
     
        
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
