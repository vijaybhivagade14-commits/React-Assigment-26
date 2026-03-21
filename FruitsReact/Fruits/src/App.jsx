import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {

  //  State for page navigation
  const [page, setPage] = useState("home");

  //  State for fruit shop data
  const [fruits, setFruits] = useState([
    { name: "Apple", price: 10, qty: 0 },
    { name: "Banana", price: 20, qty: 0 },
    { name: "Grapes", price: 5, qty: 0 },
    { name: "Mango", price: 15, qty: 0 }
  ]);

  //  State for API users
  const [users, setUsers] = useState([]);

  //  Fetch users from API (runs only once on page load)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  //  Function to update fruit quantity
  const updateQty = (index, type) => {
    const updated = [...fruits]; // copy array (important for React state)

    if (type === "add") {
      updated[index].qty += 1; // increase quantity
    } else if (type === "sub" && updated[index].qty > 0) {
      updated[index].qty -= 1; // decrease quantity (not below 0)
    }

    setFruits(updated); // update state
  };

  //  Calculate total amount (price * qty)
  const totalAmount = fruits.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  //  Calculate total quantity
  const totalQty = fruits.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <>
      {/*  Navbar for page switching */}
      <Navbar setPage={setPage} />

      {/*  Conditional Rendering (Pages) */}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      {/*  Fruit Shop Section */}
      <div className="fruit-container">
        <h1 className="title">🍎 Fruit Shop</h1>

        {fruits.map((item, index) => (
          <div className="fruit-item" key={index}>

            {/* Fruit Info */}
            <div>
              <h3>{item.name} (💰{item.price})</h3>
              <p>Total: 💰{item.qty * item.price}</p>
            </div>

            {/* Buttons */}
            <div>
              <button onClick={() => updateQty(index, "sub")}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(index, "add")}>+</button>
            </div>

          </div>
        ))}

        <hr />

        {/*  Total Summary */}
        <div className="total">
          <h2>Total Quantity: {totalQty}</h2>
          <h2>Total Amount: 💰{totalAmount}</h2>
        </div>
      </div>

      {/*  User List Section (API Data) */}
      <h1 className="title">👨‍💻 User List</h1>

      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
         
        </div>
      ))}
    </>
  );
}

export default App;