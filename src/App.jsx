import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoffeePage from './pages/CoffeePage'
import CoffeeV2Page from './pages/CoffeeV2Page'
import HeHomePage from './pages/HeHomePage'
import NotFoundPage from './pages/NotFoundPage'
import HeNotFoundPage from './pages/HeNotFoundPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/coffee-v2" element={<CoffeeV2Page />} />
      <Route path="/he" element={<HeHomePage />} />
      <Route path="/he/*" element={<HeNotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
