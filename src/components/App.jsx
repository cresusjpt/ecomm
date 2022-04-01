import {Routes,Route,} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/App.css';
import Cart from "./Cart";
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import ShoppingList from './ShoppingList';
import Social from "./Social";
import {useState} from 'react'
import SearchBar from "./SearchBar";

function App() {
  let [listCart, setListCart] = useState([]);
  let [favedList, setFavedList] = useState([])
  return (
    <div className="App">
      <Header listCart={listCart} setListCart={setListCart} favedList={favedList} setFavedList={setFavedList} />
      <Routes>
        <Route path="/" element={<ShoppingList listCart={listCart} setListCart={setListCart} favedList={favedList} setFavedList={setFavedList} />}/>
        <Route path="/cart" element={<Cart listCart={listCart} setListCart={setListCart} />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil" element={<Social />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
