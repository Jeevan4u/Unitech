import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import AboutPage from './pages/AboutPage/AboutPage';
import Home from './pages/Home/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import WorkPage from "./pages/WorkPage/Work"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route  index element = {<Home/>} />
            <Route path='/about'  element = {<AboutPage/>} />
            <Route path='/work'  element = {<WorkPage/>} />
        </Routes>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
