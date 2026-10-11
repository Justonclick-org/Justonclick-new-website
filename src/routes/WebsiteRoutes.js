// Website routes

import { Routes, Route } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Home from "../pages/website/Home";
import About from "../pages/website/About";
import Contact from "../pages/website/Contact";
import Services from "../pages/website/Services";
import Products from "../pages/website/Products";
import Technologies from "../pages/website/Technologies"; 
import CaseStudy from "../pages/website/CaseStudy";
import Careers from "../pages/website/Careers";
import Blog from "../pages/website/Blog";
import BlogPost from "../pages/website/BlogPost";


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
        <Route
        path="/technologies"
        element={
          <WebsiteLayout>
            <Technologies />
          </WebsiteLayout>
        }
      />
        <Route
        path="/blog"
        element={
          <WebsiteLayout>
            <Blog />
          </WebsiteLayout>
        }
      />
        <Route
        path="/blog/:slug"
        element={
          <WebsiteLayout>
            <BlogPost />
          </WebsiteLayout>
        }
      />
        <Route
        path="/careers"
        element={
          <WebsiteLayout>
            <Careers />
          </WebsiteLayout>
        }
      />
        <Route
        path="/case-studies"
        element={
          <WebsiteLayout>
            <CaseStudy />
          </WebsiteLayout>
        }
      />
    </Routes>
  );
}

export default WebsiteRoutes;