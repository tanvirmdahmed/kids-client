import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="text-center my-40">
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details!'
        })
        return <Navigate state={{ from: location }} to="/login" replace></Navigate>
    }
    return children;
    ;
};

export default PrivateRoute;