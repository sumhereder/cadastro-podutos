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
          <div className="nomeProduto">{produto.Nome}</div>
          <img className="imagemProduto" src={produto.Imagem} alt={produto.nome} />
          <div className="estoqueProduto">Estoque: {produto.Estoque}</div>
          <div className="entradaProduto">Entrada: {produto.Entrada}</div>
        </div>
      ))}
    </div>
  );
}

export default Body;
