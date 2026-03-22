import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoffeePage from './pages/CoffeePage'
import CoffeeV2Page from './pages/CoffeeV2Page'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/coffee-v2" element={<CoffeeV2Page />} />
    </Routes>
  )
}
