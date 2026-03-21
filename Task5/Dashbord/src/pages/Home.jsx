import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
  
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  let data = JSON.parse(localStorage.getItem("users"));

  // ✅ sirf tab default data set karo jab bilkul null ho
  if (!data) {
    data = [
      {
        id: 1,
        name: "Vijay",
        age: 21,
        email: "vijay@gmail.com",
        mobile: "9876543210",
      },
      {
        id: 2,
        name: "Rahul",
        age: 22,
        email: "rahul@gmail.com",
        mobile: "9123456780",
      },
      {
        id: 3,
        name: "Karan",
        age: 23,
        email: "karan@gmail.com",
        mobile: "9123456780",
      },
      {
        id: 4,
        name: "Ajay",
        age: 24,
        email: "ajay@gmail.com",
        mobile: "9123456780",
      },
    ];

    localStorage.setItem("users", JSON.stringify(data));
  }

  setUsers(data);
}, []);

 return (
  <div className="container">
    <h2 className="heading">User List</h2>

    {users.map((user) => (
      <div key={user.id} className="user-card">
        <span className="user-name">{user.name}</span>

        <button
          className="btn"
          onClick={() => navigate(`/user/${user.id}`)}
        >
          View Details
        </button>
      </div>
    ))}
  </div>
);
}

export default Home;