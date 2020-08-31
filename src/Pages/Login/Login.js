import React from "react";
import LoginPasswordLost from "../../Components/LoginPasswordLost";
import LoginPasswordReset from "../../Components/LoginPasswordReset";
import LoginForm from "../../Components/LoginForm";
import { Routes, Route } from "react-router-dom";
import LoginCreate from "../../Components/LoginCreate";

// import { Container } from './styles';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost/>} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
