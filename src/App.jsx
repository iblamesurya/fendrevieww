import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import RoleSelection from './pages/RoleSelection.jsx'
import EducatorDashboard from './pages/EducatorDashboard.jsx'
import CitizenDashboard from './pages/CitizenDashboard.jsx'
import Preamble from './pages/Preamble.jsx'
import FundamentalRights from './pages/FundamentalRights.jsx'
import FundamentalDuties from './pages/FundamentalDuties.jsx'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roles" element={<RoleSelection />} />
          <Route path="/educator" element={<EducatorDashboard />} />
          <Route path="/citizen" element={<CitizenDashboard />} />
          <Route path="/preamble" element={<Preamble />} />
          <Route path="/rights" element={<FundamentalRights />} />
          <Route path="/duties" element={<FundamentalDuties />} />
          {/* routes removed */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
