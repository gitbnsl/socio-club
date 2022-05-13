import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom";
import ContactFrom from './components/ContactFrom';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<ContactFrom />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
