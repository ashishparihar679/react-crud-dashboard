import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./mycss/update.css";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/parihar/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/parihar/${id}`, user);
    alert("Updated");
    navigate("/");
  };

  return (
    <>
    <div className="edit-container">

      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input name="name" value={user.name} onChange={handleChange} />
        <input name="email" value={user.email} onChange={handleChange} />
        <input name="phone" value={user.phone} onChange={handleChange} />
        <button>Update</button>
      </form>
    </div>
    </>
  );
};

export default Update;
