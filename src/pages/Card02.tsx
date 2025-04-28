import React from 'react';
import { useNavigate } from 'react-router-dom';
import Caminhao01 from "../assets/images/imgcaminhao02.png";
import BackButton from '../components/BackButton';

const Card02: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>
      
      <BackButton onClick={handleVoltar} />

      {/* Card central */}
      <div style={{
        maxWidth: '1000px',
        margin: '80px auto 0 auto',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
      }}>
        
        {/* Título */}
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Detalhes da Carreta</h1>

        {/* Área de informações + imagem */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          
          {/* Lista */}
          <ul style={{ listStyle: 'none', padding: 0, flex: 1, fontSize: '18px' }}>
            <li><strong>ID Prancha:</strong> 22</li>
            <li><strong>Data de Modificação:</strong> 2024-01-01</li>
            <li><strong>Documentação:</strong> 9BRDEF1234A100001</li>
            <li><strong>Estado de Conservação:</strong> Novo</li>
            <li><strong>Preço:</strong> R$ 205.000</li>
            <li><strong>Cargas Disponibilizados:</strong> 12t</li>
            <li><strong>Tamanho (Comprimento):</strong> 11m</li>
            <li><strong>Cor:</strong> Branca</li>
            <li><strong>Tamanho (Largura):</strong> 2.5m</li>
            <li><strong>Freio:</strong> Ar</li>
          </ul>

          {/* Imagem */}
          <img
            src={Caminhao01}
            alt="Foto caminhão 2"
            width={450}
            height={280}
            style={{ marginLeft: '40px', borderRadius: '10px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card02;