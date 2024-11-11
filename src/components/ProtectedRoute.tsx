import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();

  // Redireciona para a página 403 se o usuário não estiver autenticado
  return isSignedIn ? children : <Navigate to="/403" replace />;
};

export default ProtectedRoute;
