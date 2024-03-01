import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contactus from './pages/Contact/Contactus';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
