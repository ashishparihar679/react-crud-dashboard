import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./mycss/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://back-3gzx.onrender.com/parihar?email=${email}&password=${password}`
      );

      if (res.data.length > 0) {
        localStorage.setItem("username", res.data[0].name);
        login(); // context login
        navigate("/"); // home
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Server error");
    }
  };
  //   localStorage.setItem("username", res.data[0].name);

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}

        <input
          type="password"
          placeholder="tumhara Password dalo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login; // ✅ MOST IMPORTANT LINE
