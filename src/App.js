
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import countryroad from '../src/images/countryroad.jpg';





function App() {
  return (
    <div className=" ">
        <Navbar className='z-10'/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/Skills' element={<Skills/>}></Route>
        </Routes>
    <img src={countryroad} alt='sea' className='absolute top-0 right-0 -z-10 h-screen w-screen '></img>

    </div>
    

            

  );
}

export default App;
