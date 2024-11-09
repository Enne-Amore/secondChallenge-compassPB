// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

// Componente de Loading para exibir durante o carregamento
const Loading = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Carregando...</p>
    </div>
);

function ProtectedRoute({ children }) {
    const { isSignedIn, isLoaded } = useUser();

    // Se o estado de autenticação ainda estiver carregando, mostra a tela de carregamento
    if (!isLoaded) {
        return <Loading />;
    }

    // Se o usuário não está autenticado, redireciona para a página 403
    if (!isSignedIn) {
        return <Navigate to="/403" replace />;
    }

    // Caso esteja autenticado e o estado carregado, renderiza o componente filho
    return children;
}

export default ProtectedRoute;
