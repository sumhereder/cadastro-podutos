import React, { useState, useEffect } from 'react';

function Body() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://sumhercorp.online/api-produtos.php')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className="conteinerBody">
      {produtos.map(produto => (
        <div key={produto.id} className="produto">
          <h3>{produto.nome}</h3>
          <img src={produto.imagem} alt={produto.nome} />
          <p>Estoque: {produto.estoque}</p>
          <p>Entrada: {produto.entrada}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
