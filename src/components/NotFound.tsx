import { useAuth } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';



function NotFound() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut();
            navigate("/"); // Redireciona para a página inicial
        } catch (error) {
            console.error("Erro ao tentar encerrar a sessão:", error);
        }
    };
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Ops! A página que você está procurando não existe.</p>
      <Link to="/" style={styles.link} onClick={handleLogout}>Voltar para a página inicial</Link>
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

export default NotFound;
