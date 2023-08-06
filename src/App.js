import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import CategoryPreview from './pages/CategoryPreview'; // Corrected the case
import Checkout from './pages/Checkout'; // Added import
import ShowProducts from './pages/ShowProducts'; // Added import
import AddProduct from './pages/AddProduct';
import Orders from './components/order/order';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categorypreview" element={<CategoryPreview />} /> {/* Corrected the case */}
        <Route path="/checkout" element={<Checkout />} /> {/* Corrected the case */}
        <Route path="/showproducts" element={<ShowProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/myorders" element={<Orders/>} /> 

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
