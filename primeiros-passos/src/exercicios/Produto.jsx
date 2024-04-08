import React from 'react'

const props = {
  produto: ''
}

export const Produto = ({ produto: { id, nome, preco, cores } }) => {
  return (
    <div key={id}>
      <h1>{nome}</h1>
      <p>Preço: {preco}</p>
      <ul>
        {cores.map((cor) => (
          <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
          {cor}
          </li>
        ))}
      </ul>
    </div>
  )
}
