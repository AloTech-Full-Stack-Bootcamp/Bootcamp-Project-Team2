import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Process from "./components/Process";
import Login from "./components/Login";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <LoginButton />
      <LogoutButton />
      {true ? (
        <Login />
      ) : (
        <Router>
          <div className="app">
            <Navbar />

            <Routes>
              <Route path="/process" element={<Process />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
