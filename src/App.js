import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import ContactForm from "./components/contact/ContactForm";
import Nav from "./components/layout/Nav";
import Admin from "./components/admin/Admin";
import "./App.css";
import { AuthProvider } from "./contex/AuthContex";
import Login from "./components/login/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:id" exact element={<Detail />}></Route>
          <Route path="/contact" exact element={<ContactForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
