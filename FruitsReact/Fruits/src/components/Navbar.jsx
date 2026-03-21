function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <h2 className="logo">MyApp</h2>

      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;