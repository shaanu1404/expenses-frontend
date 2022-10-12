import { Outlet, Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function PublicRoute() {
    const { authenticated } = useAuth()

    return authenticated ? <Navigate to="/" replace /> : <Outlet />
}

export default PublicRoute