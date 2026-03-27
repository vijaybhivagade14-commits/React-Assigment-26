import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">
      <button
        className={location.pathname === "/dashboard" ? "active" : ""}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>

      <button
        className={location.pathname === "/settings" ? "active" : ""}
        onClick={() => navigate("/settings")}
      >
        Settings
      </button>
    </div>
  );
}

export default Sidebar;