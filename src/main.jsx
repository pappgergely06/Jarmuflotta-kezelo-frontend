import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import LoginPage from './pages/login-page/LoginPage'
import AdminPage from './pages/admin-page/AdminPage'
import HomePage from './pages/home-page/HomePage'
import DriverPage from './pages/driver-page/DriverPage'
import NotFound from './pages/not-found/NotFound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='admin' element={<AdminPage />} />
      <Route path='home' element={<HomePage />} />
      <Route path='driver' element={<DriverPage/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)
