import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product/Product'; 
import About from './pages/About/About';
import Contactus from './pages/Contact/Contactus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      
      </Routes>
      <Product />
      <About />
      <Contactus />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
