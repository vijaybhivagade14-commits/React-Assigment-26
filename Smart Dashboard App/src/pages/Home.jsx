import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setErrorMsg("Minimum 8 characters required");
    } else if (!/[A-Z]/.test(value)) {
      setErrorMsg("Add 1 uppercase letter");
    } else if (!/[a-z]/.test(value)) {
      setErrorMsg("Add 1 lowercase letter");
    } else if (!/[@$!%*?&]/.test(value)) {
      setErrorMsg("Add 1 special character");
    } else {
      setErrorMsg("Strong Password");
    }
  };

  const handleLogin = () => {
    if (!email.includes("@gmail.com")) {
      alert("Invalid Email");
      return;
    }

    if (errorMsg !== "Strong Password") {
      alert("Password invalid");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 🔥 Password with eye icon */}
        <div className="password-box">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Validation message */}
        {password && (
          <p
            className={
              errorMsg === "Strong Password"
                ? "success-msg"
                : "error-msg"
            }
          >
            {errorMsg}
          </p>
        )}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Home;