import React from "react";

import {Produto} from './Produto';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252434', '#fc3766'],
  },

  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#fc3796'],
  },

  {
    id: 3,
    nome: 'tablet',
    preco: 'R$ 4000',
    cores: ['#29d8d5', '#252434', '#ac3766']
  },
];

export const ListColors = () => {
  return (
    <section>
      {
      produtos
      .filter((produto) => Number(produto.preco.replace('R$', '')) > 1500)
      .map((produto) => <Produto produto={produto} />)
      }
    </section>
  );
};