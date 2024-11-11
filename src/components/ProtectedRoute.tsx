import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const Loading: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    <p className="ml-4 text-lg font-medium text-gray-700">Loading...</p>
  </div>
);

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <Loading />;
  }

  if (!isSignedIn) {
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
