
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom';
import Projects from './pages/projects';
import sea from '../src/images/sea.jpg';
import countryroad from '../src/images/countryroad.jpg';
import empire from '../src/images/empire.jpg';
import castle from '../src/images/castle.jpg';




function App() {
  return (
    <div className="relative ">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
    <img src={countryroad} alt='sea' className='absolute top-0 right-0 -z-10 h-screen w-screen'></img>

    </div>
    

            

  );
}

export default App;
