import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import Divider from '../components/ui-components/Divider'
import LinkCard from '../components/ui-components/LinkCard'

function Home() {
  const { userDetail: { name }, logout } = useAuth()

  const handleLogout = async () => await logout()

  return (
    <div className='w-full px-48 pt-24'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-4xl text-white font-bold'>
          Welcome, {name}
        </h1>
        <button onClick={handleLogout}
          className="bg-blue-800 py-2 px-4 rounded text-sm text-blue-100 outline-none hover:bg-blue-900 focus:bg-blue-900 text-center disabled:bg-blue-500">
          Logout
        </button>
      </div>
      <Divider />
      <div className='mt-8 grid grid-cols-3 gap-7'>
        <Link to="/dashboard">
          <LinkCard title="Dashboard" />
        </Link>
        <Link to="/accounts">
          <LinkCard title="Accounts" />
        </Link>
        <Link to="/profile">
          <LinkCard title="Profile" />
        </Link>
        <Link to="/expenses">
          <LinkCard title="Expenses" />
        </Link>
      </div>
    </div>
  )
}

export default Home