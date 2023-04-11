
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './components/Resume';

import countryroad from '../src/images/countryroad.jpg';





function App() {
  return (
    <div className=" ">
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Resume' element={<Resume/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            
        </Routes>
    

    </div>
    

            

  );
}

export default App;
