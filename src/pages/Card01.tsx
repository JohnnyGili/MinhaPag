import React from 'react';
import { Link } from 'react-router-dom';


const Card01: React.FC = () => {
    return (
      <div>
        <h1>Detalhes do Card 01</h1>
        <Link to={"/"}> Voltar pagina HOME</Link>
      </div>
    );
  };
  
  export default Card01;
  