import { Routes, Route } from 'react-router-dom'
import HeHomePage from './pages/HeHomePage'
import HeContactPage from './pages/HeContactPage'
import HeLegalPage from './pages/HeLegalPage'
import HeNotFoundPage from './pages/HeNotFoundPage'
import PetsPage from './pages/PetsPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HeHomePage />} />
      <Route path="/pets" element={<PetsPage />} />
      <Route path="/contact" element={<HeContactPage />} />
      <Route path="/legal" element={<HeLegalPage />} />
      <Route path="*" element={<HeNotFoundPage />} />
    </Routes>
  )
}
