import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Settings() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleChange = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    // ❌ old password check
    if (user.password !== oldPass) {
      alert("Old password incorrect");
      return;
    }

    // ❌ new password validation
    if (newPass.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // ❌ confirm match
    if (newPass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    // ✅ update password
    user.password = newPass;
    localStorage.setItem("user", JSON.stringify(user));

    alert("Password Updated Successfully");

    // reset fields
    setOldPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <>
      <Header title="Settings" />

      <div className="main">
        <Sidebar />

        <div className="content">
          <h2>Change Password</h2>

          <input
            type="password"
            placeholder="Old Password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />

          <button className="add-btn" onClick={handleChange}>
            Save
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Settings;