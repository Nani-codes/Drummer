import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Functions from './pages/Functions';
import Nav from './templates/Nav';
import Dup from './pages/Dup';
import Home from './pages/Home'
// import Footer from './templates/Footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Functions' element={<Functions/>} />
          <Route path='/dup' element={<Dup/>} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
