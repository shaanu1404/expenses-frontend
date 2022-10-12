import { AuthProvider } from "./contexts/authContext"
import { ModalProvider } from './contexts/modalContext'
import AppRoutes from "./AppRoutes"

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
