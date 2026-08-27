// Website routes

import { Routes, Route } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Home from "../pages/website/Home";
import About from "../pages/website/About";
import Contact from "../pages/website/Contact";
import Services from "../pages/website/Services";
import Products from "../pages/website/Products";


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WebsiteLayout>
            <Home />
          </WebsiteLayout>
        }
      />
      <Route
        path="/about"
        element={
          <WebsiteLayout>
            <About />
          </WebsiteLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <WebsiteLayout>
            <Contact />
          </WebsiteLayout>
        }
      />
        <Route
        path="/services"
        element={
          <WebsiteLayout>
            <Services />
          </WebsiteLayout>
        }
      />
        <Route 
        path="/products"
        element={
          <WebsiteLayout>
            <Products />
          </WebsiteLayout>
        }
      />
    </Routes>
  );
}

export default WebsiteRoutes;