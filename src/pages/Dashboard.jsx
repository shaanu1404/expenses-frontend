import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function Dashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard