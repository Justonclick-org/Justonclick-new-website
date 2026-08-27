import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container } from "reactstrap";

function AdminLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="admin-layout-wrapper">
      <div className="admin-layout-container">
        <Sidebar currentPath={pathname} />

        <main className="main-content">
          <Container fluid className="content-container">
            <div className="p-2">{children}</div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;