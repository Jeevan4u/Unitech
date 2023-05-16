import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
// import AboutPage from './pages/AboutPage/AboutPage';
import Home from './pages/Home/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
// import ServicesPage from './pages/ServicesPage/ServicesPage';
// import CarreerPage from './pages/CarreerPage/CarreerPage';
// import BlogIndex from './pages/BlogPage/BlogIndex';
// import Contactindex from './pages/ContactPage/Contactindex';
import ScrollToTop from './Components/ScrollTop';
import Work from './pages/WorkPage/Work';
import Error from './Components/Error';
const LazyAbout = React.lazy(()=> import("./pages/AboutPage/AboutPage"))
const LazyServices = React.lazy(()=> import("./pages/ServicesPage/ServicesPage"))
const LazyCarreer = React.lazy(()=> import("./pages/CarreerPage/CarreerPage"))
const LazyBlogIndex = React.lazy(()=> import("./pages/BlogPage/BlogIndex"))
const LazyContactindex = React.lazy(()=> import("./pages/ContactPage/Contactindex"))
const LazyWork = React.lazy(()=> import("./pages/WorkPage/Work"))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <ScrollToTop/>
        <Routes>
              <Route  index path='/' element = {<Home/>} />
              <Route path='/about'  element = {<React.Suspense fallback="Loading...."><LazyAbout/></React.Suspense>} />
              <Route path='/services'  element = {<React.Suspense fallback="Loading..."><LazyServices/></React.Suspense>} />
              <Route path='/career'  element = {<React.Suspense fallback="Loading..."><LazyCarreer/></React.Suspense>}/>
              <Route path='/blog'  element = {<React.Suspense fallback="Loading..."><LazyBlogIndex/></React.Suspense>} />
              <Route path='/contact'  element = {<React.Suspense fallback="Loading..."><LazyContactindex/></React.Suspense>}/>
              <Route path='/work'  element =  {<React.Suspense fallback="Loading..."><LazyWork/></React.Suspense>} />
              <Route path='*'  element = {<Home/>} />
            
          </Routes>
     
        
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
