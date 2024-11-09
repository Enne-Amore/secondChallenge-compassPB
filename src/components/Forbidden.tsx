// Forbidden.js
import React from 'react';
import { Link } from 'react-router-dom';

function Forbidden() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>403</h1>
      <p style={styles.message}>Acesso Negado. Você não tem permissão para acessar esta página.</p>
      <Link to="/" style={styles.link}>Voltar para a página inicial</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    color: '#333',
  },
  header: {
    fontSize: '5rem',
    margin: '0',
  },
  message: {
    fontSize: '1.5rem',
    margin: '20px 0',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Forbidden;
