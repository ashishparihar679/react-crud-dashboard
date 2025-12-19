import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/parihar/${id}`)
      .then(res => setUser(res.data));
  }, []);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default Read;
