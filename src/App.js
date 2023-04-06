
import './App.css';
// import Header from'./components/Header';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom';
import Projects from './pages/Projects';



function App() {
  return (
    <div className=' m-6'>
        <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
    </Routes>

    </div>
    

            

  );
}

export default App;
