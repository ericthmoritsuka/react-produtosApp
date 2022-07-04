import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoad(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Algo de inesperado aconteceu.");
      } finally {
        setLoad(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (load) return <div className="load"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`produtosApp | ${produto.nome}`}
        description={`${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
