import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/layouts/ProtectedRoute'
import PublicRoute from './components/layouts/PublicRoute'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Expenses from './pages/Expenses'
import AppLayout from './components/layouts/AppLayout'
import Settings from './pages/Settings'

function AppRoutes() {
  return (
    <Routes>
      <Route path='' element={<PublicRoute />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='' element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path='' element={<AppLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='profile' element={<Profile />} />
          <Route path='expenses' element={<Expenses />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate replace to="/dashboard" />} />
    </Routes>
  )
}

export default AppRoutes