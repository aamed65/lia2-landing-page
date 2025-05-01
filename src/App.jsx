// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramInfo from './components/ProgramInfo';
import AboutProgram from './components/AboutProgram';
import ProgramDetails from './components/ProgramDetails';
import ProgramStructure from './components/ProgramStructure';
import SprintComponent from './components/SprintComponent';
import QuizComponent from './components/QuizComponent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfoCard from './components/InfoCard';



function App() {
  return (
    <div className="App">
      <Navbar />
     <Hero />
    <ProgramInfo />
    <div className="two-column-layout">
    <div className="left-column">
     <AboutProgram />
     <ProgramStructure />
     </div>
     <div className="right-column">
      <ProgramDetails />
      </div>
      </div>
      <SprintComponent />
      <InfoCard />
      <QuizComponent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 