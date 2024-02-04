import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shorts from './Pages/Shorts';


function App() {
  return (
    <div className="bg-[#0f0f0f] ">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
