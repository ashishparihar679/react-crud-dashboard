import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mycss/home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://back-3gzx.onrender.com/parihar")
      .then((res) => setData(res.data))
      .catch(() => setError("Data load nahi ho pa raha"))
      .finally(() => setLoading(false));
  };

  const handleSearch = () => {
    setSearch(searchText);
  };

  // 🔴 DELETE FUNCTION
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    axios
      .delete(`https://back-3gzx.onrender.com/parihar/${id}`)
      .then(() => {
        // UI se turant remove
        setData(data.filter((item) => item.id !== id));
      })
      .catch(() => alert("Delete failed"));
  };

  const filteredData = data.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div className="home-container">
      <h2>User List</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="search-input"
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.password}</td>
              <td>
                <button
                  className="btn-primary"
                  onClick={() => navigate(`/update/${u.id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn-danger"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
