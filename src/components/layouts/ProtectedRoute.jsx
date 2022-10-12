import { Outlet, Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function ProtectedRoute() {
    const { authenticated } = useAuth()

    return authenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute