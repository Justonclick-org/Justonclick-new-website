import Navbar from "./Navbar";
import Footer from "./Footer";
function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <div >
        {children}
      </div>
      <Footer />
    </>
  );
}

export default WebsiteLayout;
