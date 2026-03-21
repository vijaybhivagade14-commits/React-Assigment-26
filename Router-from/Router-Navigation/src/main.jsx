import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Login from "./Pages/Login.jsx"
import User from "./Pages/User.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)