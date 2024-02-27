import React from "react"
import Header from "./Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contato from "./Contato"
import Login from "./Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contato" element={<Contato />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
