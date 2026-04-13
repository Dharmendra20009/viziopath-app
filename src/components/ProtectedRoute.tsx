import React from 'react';
import { useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    return <>{children}</>;
};

export default ProtectedRoute;
