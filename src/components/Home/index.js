import React from "react";
import styles from "./Home.module.css";
import Card from "./../Card";
import Avatar1 from "./../../Assets/avatar1.jpg";
import Avatar2 from "./../../Assets/avatar2.jpg";
import Avatar4 from "./../../Assets/avatar4.jpg";
import Avatar5 from "./../../Assets/avatar5.jpg";

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
        <Card nome="Tom James" cargo="Programmer" imagem={Avatar1} />
        <Card nome="Alessa Smith" cargo="Manager" imagem={Avatar2} />
        <Card nome="Kate Minard" cargo="Web Designer" imagem={Avatar4} />
        <Card nome="John Tudor" cargo="Database Admin" imagem={Avatar5} />
      </div>
      <span className={styles.comentario}>
        <strong>We found 23 contacts</strong>
      </span>
    </div>
  );
};

export default Home;
