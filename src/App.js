import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Header from  "../src/Components/Header/Header";
import Banner from "../src/Components/Banner/Banner";
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Resume from './Components/Resume/Resume';
import Contact from './Components/ContactMe/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}


export default App;
