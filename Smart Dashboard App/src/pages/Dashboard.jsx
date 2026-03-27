import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  const [cards, setCards] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    mobile: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(data);
  }, []);

  const handleSubmit = () => {
    // ❌ empty check
    if (!form.name || !form.gender || !form.mobile) {
      alert("All fields required");
      return;
    }

    // ❌ mobile validation
    if (!/^\d{10}$/.test(form.mobile)) {
      alert("Mobile must be 10 digits");
      return;
    }

    const updated = [...cards, form];
    setCards(updated);
    localStorage.setItem("cards", JSON.stringify(updated));

    setForm({ name: "", gender: "", mobile: "" });
    setShowForm(false);
  };

  const visibleCards = showAll ? cards : cards.slice(0, 2);

  return (
    <>
      <Header title="Dashboard" />

      <div className="main">
        <Sidebar />

        <div className="content">
          {/* 🔥 Add Button */}
          <button className="add-btn" onClick={() => setShowForm(true)}>
            + Add Info
          </button>

          {/* 🔥 POPUP FORM */}
          {showForm && (
            <div className="popup">
              <div className="popup-content">
                <h3>➕ Add Details</h3>
                <input
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Enter Gender"
                  value={form.gender}
                  onChange={(e) =>
                    setForm({ ...form, gender: e.target.value })
                  }
                />

                <input
                  placeholder="Enter Mobile"
                  value={form.mobile}
                  onChange={(e) =>
                    setForm({ ...form, mobile: e.target.value })
                  }
                />

                <div className="btn-group">
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit
                  </button>

                  <button className="cancel-btn" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 🔥 CARDS */}
          <div className="card-container">
            {visibleCards.map((c, i) => (
              <div className="card" key={i}>
                <p><span>Name:</span> {c.name}</p>
                <p><span>Gender:</span> {c.gender}</p>
                <p><span>Mobile:</span> {c.mobile}</p>
              </div>
            ))}
          </div>

          {/* 🔥 SHOW MORE */}
          {cards.length > 2 && (
            <button
              className="show-toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "⬆ Show Less" : "⬇ Show More"}
            </button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;