import React from "react";
import styles from "./Contato.module.css";
import footer from "../img/typewriter.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="produtosApp | Contato" description="Entre em contato" />
      <img src={footer} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>email@email.com</li>
          <li>99 9999-9999</li>
          <li>Rua, numero, bairro, cidade, ES</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
