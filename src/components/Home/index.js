import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          <strong>CONTACTS</strong>
        </span>
        <button>
          <strong>Search</strong>
        </button>
      </div>
      <div>cards</div>
    </div>
  );
};

export default Home;
