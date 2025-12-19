import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./mycss/nav.css";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      <h2 className="logo">CRUD App</h2>

      <div className="nav-links">
        <Link to="/" className={isActive("/") ? "nav-btn active" : "nav-btn"}>
          Home
        </Link>

        <Link
          to="/create"
          className={isActive("/create") ? "nav-btn active" : "nav-btn"}
        >
          Signup
        </Link>

        {!username && (
          <Link
            to="/login"
            className={isActive("/login") ? "nav-btn active" : "nav-btn"}
          >
            Login
          </Link>
        )}
      </div>

      {username && (
        <button className="logout-btn" onClick={handleLogout}>
          <span className="user-name">Welcome, {username}</span>
          Logout
        </button>
      )}
    </div>
  );
};

export default Nav;
