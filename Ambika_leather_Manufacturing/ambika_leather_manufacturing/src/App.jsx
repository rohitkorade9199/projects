import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import ProductCatalogue from './components/Products/ProductCatalogue';
import Blog from './components/Blog/Blog';
// import Contact from './components/Contact/Contact';

function App() {
  return (
   
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/catalogue" element={<ProductCatalogue />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
