import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import StudentTable from './components/StudentTable'
// import ReactDOM from 'react-dom';
// import Students from './components/students';
// import Topics from './components/topics';
// import Courses from './components/courses';
// import Admissions from './components/admissions'
// import Branches from './components/branches'
import './App.css';
import Home from './components/Home';

function App() {

   const [activeTab, SetActiveTab] = useState('Students');

   

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/students" element={<StudentTable/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
