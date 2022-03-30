import {Routes,Route,} from "react-router-dom";
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Cart from "./Cart";
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import ShoppingList from './ShoppingList';
import Social from "./Social";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ShoppingList />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil" element={<Social />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
