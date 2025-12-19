import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import "./mycss/nav.css";
import axios from "axios";


const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const username = localStorage.getItem("username");

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("username");
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
  axios.get(URL)
    .then(res => setData(res.data))
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false));
}, []);


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
          signup
        </Link>
         <Link
          to="/login"
          className={isActive("/create") ? "nav-btn active" : "nav-btn"}
        >
          Login
        </Link>

        
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <span className="user-name">Welcome , {username}</span>
        Logout
      </button>
      
      {/* if (loading) return <h3>Loading...</h3>;
if (error) return <h3>{error}</h3>; */}

    </div>
  );
};

export default Nav;
