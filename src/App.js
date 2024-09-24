import { Route, Routes } from "react-router-dom";
import './App.css';

import Login from './page/Login';
import Signup from './page/Signup';

import Barpage from './page/Barpage';
import Cartpage from './page/Cartpage';
import Dietpage from './page/Dietpage';
import Homepage from './page/Homepage';
import Mypage from './page/Mypage';
import Footer from './COMPONENT/Footer';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Bar" element={<Barpage/>}/>
        <Route path="/Cart" element={<Cartpage/>}/>
        <Route path="/Diet" element={<Dietpage/>}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/Mypage" element={<Mypage/>}/>
      </Routes>
    </div>
  );
}

export default App;