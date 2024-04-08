import React from "react";
import {Link} from 'react-router-dom';

export const Header = () => {
  return (<header>
    <ul>
      <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/produtos">Produtos</Link>
        </li>
    </ul>
  </header>
  );
};
