import React, { useState, useEffect } from "react";
import UserHeaderNav from "../UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/conta/estatisticas":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minha Conta");
    }
    console.log(location.pathname);
    if ("/conta/estatisticas" === location.pathname) setTitle("Estatísticas");
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
