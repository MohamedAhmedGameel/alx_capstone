import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import "preline/preline";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";
import ProductCard from "./pages/Product";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    } else {
      console.warn("HSStaticMethods is not defined");
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProductCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
