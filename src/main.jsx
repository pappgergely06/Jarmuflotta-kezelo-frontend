import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import LoginPage from './pages/login-page/LoginPage'
import AdminPage from './pages/admin-page/AdminPage'
import DriverPage from './pages/driver-page/DriverPage'
import NotFound from './pages/not-found/NotFound'
import AuthProvider from './contexts/auth/AuthProvider'
import { Provider } from './components/ui/chakra/provider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path='driver' element={<DriverPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
)