import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Process from "./components/Process";
import Login from "./components/Login";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      {!username ? (
        <Login />
      ) : (
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/process" element={<Process />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
