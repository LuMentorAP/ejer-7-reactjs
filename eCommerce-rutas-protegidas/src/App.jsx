import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import AllProductos from "./components/AllProdcuts";
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    if (!isAuthenticated) {
      setIsAuthenticated(true);
      alert("Bienvenido");
    } else {
      alert("Ya estás logeado!");
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    alert("Has cerrado sesión.");
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://67252ed8c39fedae05b4299f.mockapi.io/productos");
      const data = await res.json();
      setProductos(data);
    };

    fetchData();
  }, []);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogin={handleLogin} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <ProductList productos={productos} addToCart={addToCart} />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all" element={<AllProductos productos={productos} />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />

        {/* Rutas protegidas */}
        <Route path="/admin" element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
            <Admin />
          </RutaProtegida>
        } />
        <Route path="/carrito" element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
            <Cart cart={cart} clearCart={clearCart} />
          </RutaProtegida>
        } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
