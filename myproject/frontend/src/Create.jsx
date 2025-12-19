import { useState } from "react";
import axios from "axios";
import "./mycss/create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("All fields required");
      return;
    }

    await axios.post("https://back-3gzx.onrender.com/parihar", {
      name,
      email,
      phone,
    });

    alert("User Added");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
        <button>Add</button>
      </form>
    </>
  );
};

export default Create;
