import React from "react";
import AppHeader from "../../components/Header";
import UserRegister from "../../components/userRegisterForm";
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.main}>
      <AppHeader />
      <UserRegister />
    </div>
  );
};

export default index;
