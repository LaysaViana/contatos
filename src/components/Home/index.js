import React from "react";
import styles from "./Home.module.css";
import Card from "./../Card";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          <strong>CONTACTS</strong>
        </span>
        <button className={styles.botao}>
          <strong>Search</strong>
        </button>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
