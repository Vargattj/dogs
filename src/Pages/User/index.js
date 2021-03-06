import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../../Components/Feed/index";
import { Routes, Route } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost/index";
import UserStats from "./UserStats";

function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
