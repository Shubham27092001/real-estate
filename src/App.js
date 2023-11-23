import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home"
import SignUp from "./assets/pages/SignUp";
import SignIn from "./assets/pages/SignIn";
import Profile from "./assets/pages/Profile";
import About from "./assets/pages/About";
import Header from "./components/Header/Header"
function App() {
  return (
  <BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes></BrowserRouter>
  )
}

export default App;
