import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderNFooter/header';
import Footer from './components/HeaderNFooter/footer';
import Classification from './components/Classification/Classification';
import PlacesToGo from './components/Places-To-Go/PlacesTogo';
import Screens from './components/Screens/Screens';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/placesToGo" element={<PlacesToGo />} />
        <Route path="/screens" element={<Screens />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
