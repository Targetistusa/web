import React from 'react'
import { Button } from '../shadcn_components/ui/button'
import { useUserContext } from '../Context/UserContext'
import { handleLogoutAmplify, handleSignOutGoogle } from '../services/auth/auth'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  const { user, setUser } = useUserContext()
  const navigate = useNavigate()
  console.log("User in Dashboard:", user)
  const handleLogout = () => {
    if (user.userId.length === 21) {
      handleSignOutGoogle(navigate, setUser)
    }
    else if (user.userId.length === 36) {
      handleLogoutAmplify(navigate, setUser)
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <Button className="bg-purple-500 text-white hover:bg-purple-600" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Dashboard