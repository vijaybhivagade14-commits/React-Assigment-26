import { useParams, useNavigate } from "react-router-dom";import "./style.css";

function UserDetails() {
  const { id } = useParams(); // URL se id
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h2>User Not Found</h2>;

return (
  <div className="details-container">
    <div className="details-card">
      <h2 className="details-title">User Details</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Age:</b> {user.age}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Mobile:</b> {user.mobile}</p>

      <button className="back-btn" onClick={() => navigate("/")}>
  ⬅ Back
</button>
    </div>
  </div>
);
}

export default UserDetails;