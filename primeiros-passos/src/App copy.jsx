import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ListColors} from './exercicios/ListColors';
import { EventButton } from "./exemplos/EventButton";
import { Header } from "./exercicios/componentes/Header";
import { Home } from "./exercicios/componentes/Home";
import { Incrementador } from "./exercicios/componentes/Incrementador";
import { Produtos } from "./exercicios/componentes/Produtos";
import Radio from "./exercicios/Form/Radio";

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({target}) {
    setRespostas({...respostas, [target.id]: target.value});
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({id, resposta}) => respostas[id] === resposta,);
    setResultado(`Voce acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      resultadoFinal();
    }
  }
  
  return (
    <BrowserRouter>
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) =>( 
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta} />))}
      
      {resultado ? <p>{resultado}</p> : (<button onClick={handleClick}>Próximo</button>)}
      
    </form>

      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes> */}
    {/* hello world3
    <ListColors />
    <EventButton /> */}
    {/* <Incrementador /> */}
    </BrowserRouter>
  );
};

export default App;