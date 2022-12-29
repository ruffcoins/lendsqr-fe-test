import React from 'react';
import "./styles/styles.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Login />} />
        {/*<Route  path="newSignin" element={<SignInPage />} />*/}
      </Routes>
    </Router>

  );
}

export default App;
