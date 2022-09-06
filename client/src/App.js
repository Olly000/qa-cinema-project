import './App.css';
import Header from './components/HeaderNFooter/header';
import Footer from './components/HeaderNFooter/footer';
import Classification from './components/Classification/Classification';
import PlacesToGo from './components/Places-To-Go/PlacesTogo';
import Screens from './components/Screens/Screens';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import ListingsGallery from './components/ListingsGallery/ListingsGallery';
import Home from './components/Home/Home';
import BookingPage from './components/Booking/BookingPage'
import Payment from './components/PaymentPage/Payment'
import StripePayment from "./components/PaymentPage/StripePayment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/placesToGo/*" element={<PlacesToGo />} />
        <Route path="/screens/*" element={<Screens />} />
        <Route path="/listings" element={<ListingsGallery />} />
        <Route path='/about' element={<About />} />
          <Route path='/booking' element={<BookingPage/>}/>
          <Route path='/payment' element={<StripePayment/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
