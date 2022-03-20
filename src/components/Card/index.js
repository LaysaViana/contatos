import React from "react";
import styles from "./Card.module.css";

const Card = ({ nome, cargo, imagem }) => {

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          src={imagem}
          width={50}
        />
        <ul>
          <li className={styles.nome}>{nome}</li>
          <li className={styles.cargo}>{cargo}</li>
        </ul>
      </div>
      <div className={styles.acoes}>
        <button className={styles.botao}>call</button>
        <button className={styles.botao}>send e-mail</button>
      </div>
    </div>
  );
};

export default Card;
