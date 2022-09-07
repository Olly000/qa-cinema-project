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
import Contact from './components/Contact/ContactPage';
import GettingThere from './components/GettingThere/GettingThere';
import ListingsNav from './components/ListingsGallery/sub-components/ListingsNav';
import BookingPage from "./components/Booking/BookingPage";
import Payment from "./components/PaymentPage/Payment";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/placesToGo/*" element={<PlacesToGo />} />
        <Route path="/screens/*" element={<Screens />} />
        <Route path="/listings" element={<ListingsNav />} >
          <Route index element={<ListingsGallery />} />
          <Route path="current" element={<ListingsGallery upcoming={false} current={true} />} />
          <Route path="upcoming" element={<ListingsGallery upcoming={true} current={false} />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/openingTimes' element={<Home />} />
        <Route path='/gettingThere' element={<GettingThere />} />
          <Route path='/booking' element={<BookingPage/>} />
          <Route path='/payment' element={<Payment/>} />
      }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
