import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contactus from './pages/Contact/Contactus';
import Footer from './components/footer/Footer';
import Login from './pages/Loginform/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
