import './App.css'
import { AuthProvider } from './context/AuthContext'
import Routers from './routes/Routers'
import { Toaster } from "@/components/ui/toaster"


function App() {

  return (
      <AuthProvider>
      <Routers />
      <Toaster position="top-right" />
      </AuthProvider>
  )
}

export default App
