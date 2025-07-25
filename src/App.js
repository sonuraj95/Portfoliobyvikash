import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Proje from './Components/Project/Proje'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="/Proje" element={<Proje />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
