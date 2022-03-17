import React from "react";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCrpMYqDJuT7PF7qIyJ-e2scI7hJgwGoY_g&usqp=CAU"
          width={50}
        />
        <div>
          <p>nome</p>
          <p>cargo</p>
        </div>
      </div>
      <div className={styles.acoes}>
        <button className={styles.botao}>call</button>
        <button className={styles.botao}>send e-mail</button>
      </div>
    </div>
  );
};

export default Card;
