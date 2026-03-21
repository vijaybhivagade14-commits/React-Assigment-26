import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;