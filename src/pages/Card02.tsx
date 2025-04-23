import React from 'react';

const Card02: React.FC = () => {
  return (
    <div style={styles.cardContainer}>
      <h1 style={styles.heading}>Página de Teste</h1>
      <p style={styles.text}>Este é um exemplo simples de uma página genérica para testar seu layout e estrutura.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Clique aqui</button>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    color: '#666',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Card02;
