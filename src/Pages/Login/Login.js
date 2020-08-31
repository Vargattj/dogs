import React, { useContext } from "react";
import LoginPasswordLost from "../../Components/LoginPasswordLost";
import LoginPasswordReset from "../../Components/LoginPasswordReset";
import LoginForm from "../../Components/LoginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginCreate from "../../Components/LoginCreate";
import { UserContext } from "../../UserContext";

// import { Container } from './styles';

function Login() {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
