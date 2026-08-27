import { Link } from "react-router-dom";
import { logout } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import {  Nav, NavItem, NavLink, Button } from "reactstrap";
import {
  FiHome,
  FiBriefcase,
  FiUserPlus,
  FiUsers,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";
import "./AdminLayout.css";
const navItems = [
  { label: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
  { label: "Job Listings", icon: FiBriefcase, path: "/admin/job-listings" },
  { label: "Add New Job", icon: FiUserPlus, path: "/admin/careers" },
  { label: "Applicants", icon: FiUsers, path: "/admin/applicants" },
];

function Sidebar({ currentPath }) {
  const { setIsAuth } = useAuth();

  // const handleLogout = () => {
  //   logout();
  //   setIsAuth(false);
  //   window.location.href = "/admin"; // or use navigate if preferred
  // };

 const handleLogout = async () => {
    try {
      await logout();
       setIsAuth(false);
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      localStorage.removeItem('user');
      window.location.href = '/admin';
    }
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">
            <FiBriefcase size={20} />
          </div>
          <span className="brand-text">HR Recruit</span>
        </div>
      </div>

      <Nav vertical className="sidebar-nav">
        {navItems.map((item) => {
          const isActive =
            currentPath === item.path ||
            (item.path !== "/admin/dashboard" &&
              currentPath.startsWith(item.path));

          return (
            <NavItem key={item.path}>
              <NavLink
                tag={Link}
                to={item.path}
                className={`nav-link-custom ${isActive ? "active" : ""}`}
              >
                <item.icon size={20} className="me-3" />
                <span>{item.label}</span>
                {isActive && <FiChevronRight size={16} className="ms-auto" />}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>

      <div className="sidebar-footer">
        <Button
          color="link"
          className="logout-btn w-100 text-start"
          onClick={handleLogout}
        >
          <FiLogOut size={18} className="me-3" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;