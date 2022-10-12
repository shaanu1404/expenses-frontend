import { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import AuthService from '../utils/services/auth-service'

const AuthContext = createContext();

const extractFromToken = (token) => {
  const user = jwtDecode(token)
  const userDetail = {
    userId: user.userId,
    name: user.name,
    active: user.active
  }
  return userDetail
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("token") ? true : false)
  const [userDetail, setUserDetail] = useState(
    localStorage.getItem("userDetail") ? JSON.parse(localStorage.getItem("userDetail")) : null
  )

  useEffect(() => {
    if (localStorage.getItem("token")) {
      try {
        const userDetail = extractFromToken(localStorage.getItem("token"))
        localStorage.setItem("userDetail", JSON.stringify(userDetail))
        setUserDetail(userDetail)
      } catch (e) {
        logout()
      }
    }
  }, [])

  const login = async (email, password) => {
    try {
      const { accessToken } = await AuthService.loginUser(email, password)
      const userDetail = extractFromToken(accessToken)
      localStorage.setItem("userDetail", JSON.stringify(userDetail))
      setUserDetail(userDetail)
      setAuthenticated(true)
    } catch (e) {
      return e.message
    }
  };

  const register = async ({ name, username, email, password }) => {
    try {
      const message = await AuthService.registerUser({ name, username, email, password })
      return [message, null]
    } catch (e) {
      return [null, e.message]
    }
  }

  const logout = async () => {
    try {
      await AuthService.logout()
      setAuthenticated(false)
      setUserDetail(null)
      localStorage.removeItem("token")
      localStorage.removeItem("refresh")
      localStorage.removeItem("userDetail")
    } catch (e) {
      return e.message
    }
  };

  return (
    <AuthContext.Provider value={{
      authenticated, login, logout, register, userDetail
    }}>
      {children}
    </AuthContext.Provider>
  )
}