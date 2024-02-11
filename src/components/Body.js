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
          <h4>{produto.Nome}</h4>
          <img src={produto.Imagem} alt={produto.nome} />
          <p>Estoque: {produto.Estoque}</p>
          <p>Entrada: {produto.Entrada}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
