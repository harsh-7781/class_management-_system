import React , { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Students from './components/students';
// import Topics from './components/topics';
// import Courses from './components/courses';
// import Admissions from './components/admissions'
// import Branches from './components/branches'
import './App.css';

function App() {

   const [activeTab, SetActiveTab] = useState('Students');

   

  return (
    <div className="App">
         <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light mb-4 container-fluid">
      <div className="container-fluid main">


        <div className="collapse navbar-collapse justify-content-end main" id="collapsibleNavbar">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"> 
              <div to ="" className="head Active"><strong>Home</strong></div>
            </li>
            <li classNames="nav-item">
              <div to  ="/About"  className="head"><strong>About Us</strong></div>
            </li>
            <li className="nav-item">
              <div to ="/Contact" className="head"><strong>Contact</strong></div>
            </li>  
            <li className="nav-item">
              <div to ="/Instamart" className="head"><strong>Instamart</strong></div>
            </li>   
            <li className="nav-item">
              <div to ="/Cart" className="head"><strong>Cart</strong></div>
            </li>   
            <li className="nav-item">
              
            </li> 
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default App;
