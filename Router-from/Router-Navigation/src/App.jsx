import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/home";


function Login() {

const navigate = useNavigate();     
const user = true;
function login() {
if (user === true) {                    
console.log("User is valid");
navigate("/home");                  
} else {
console.log("Invalid user");
}
}

return (  
<div style={{ textAlign: "center"}}>
<h1>Login Page</h1>

<button onClick={login}>Login</button>
</div>
);
}

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
</Routes>
</BrowserRouter>
);
}

export default App;