import { useState, useEffect } from "react";
import "./App.css";
import UserCards from "./components/UserCards";

function App() {

  // ✅ State to show/hide form modal
  const [showForm, setShowForm] = useState(false);

  // ✅ Form data state (controlled inputs)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    email: "",
    image: null,
  });

  // ✅ Load users from localStorage (runs only once on first render)
  const [users, setUsers] = useState(() => {
    try {
      const data = localStorage.getItem("users");
      return data ? JSON.parse(data) : [];
    } catch {   
      return [];
    }
  });

  // ✅ Save users to localStorage whenever users state changes
  useEffect(() => {
    try {
      localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      alert("❌ Storage full! Please delete some data.");
    }
  }, [users]);

  // ✅ Convert image file → Base64 (for permanent storage)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // ✅ Handle input changes (text + image)
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    //  Image input
    if (name === "image") {
      const file = files[0];

      //  Limit image size (200KB)
      if (file.size > 200000) {
        alert("❌ Image must be less than 200KB");
        return;
      }

      setFormData({
        ...formData,
        image: file,
      });
    } 
    //  Text inputs
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    const { name, age, dob, email, image } = formData;

    //  Validation
    if (!name || !age || !dob || !email || !image) {
      alert("❌ Please fill all fields");
      return;
    }

    // ✅ Convert image to Base64
    const base64Image = await convertToBase64(image);

    // ✅ Create new user object
    const newUser = {
      name,
      age,
      dob,
      email,
      image: base64Image,
    };

    // ✅ Add new user to users array
    setUsers([...users, newUser]);

    alert("✅ Form Submitted");

    // ✅ Reset form
    setFormData({
      name: "",
      age: "",
      dob: "",
      email: "",
      image: null,
    });

    // ✅ Close form modal
    setShowForm(false);
  };

  return (
    <div className="App">

      {/* 🔥 Main Heading */}
      <h1>User Form</h1>

      {/* 🔹 Button to open form */}
      <button onClick={() => setShowForm(true)}>Add User</button>

      {/* ================= FORM MODAL ================= */}
      {showForm && (
        <div className="overlay" onClick={() => setShowForm(false)}>
          
          {/* Prevent closing when clicking inside form */}
          <div
            className="form-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>User Form</h2>

            {/* 🔹 Input fields */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="file"
              name="image"
              onChange={handleChange}
            />

            {/* 🔹 Form buttons */}
            <div className="btns">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}

      {/* ================= USER CARDS ================= */}
      <div className="user-list">

        {/* 🔁 Loop through users and render cards */}
        {users.map((user, index) => (
          <UserCards key={index} user={user} />
        ))}

      </div>

    </div>
  );
}

export default App;