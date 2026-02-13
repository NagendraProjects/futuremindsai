import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovingTicker from './components/MovingTicker';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import About from './pages/About';
import Placement from './pages/Placement';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
        <MovingTicker />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/placement" element={<Placement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;