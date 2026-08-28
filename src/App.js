// App entry component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import AdminRoutes from "./routes/AdminRoutes";
// import AuthProvider from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop ";          // ← fixed
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import CookieConsent from "./components/layout/CookieConsent";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <AuthProvider> */}
        <ScrollToTop />
        {/* <CookieConsent /> */}
        <Routes>
          {/* Public Website */}
          <Route path="/*" element={<WebsiteRoutes />} />

          {/* Admin Section */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;