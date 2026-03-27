import { useState } from 'react'
import { UserProvider } from './context/UserContext';
import Home from "./components/Home";
import './App.css'

function App() {

  return (
    <UserProvider>
      <Home />
    </UserProvider>
  )
}

export default App;
