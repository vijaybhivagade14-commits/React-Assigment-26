import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const initial = user?.email?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="header">
      <h2>{title}</h2>

      <div className="right">
        <div className="profile">{initial}</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;