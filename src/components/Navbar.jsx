import { useState } from 'react'
import { Menu, Shield, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="container nav-wrap">
        <Link to="/" className="nav-brand">
          <Shield size={24} />
          <span>Indian Constitution</span>
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/preamble">Preamble</Link>
          <Link className="nav-link" to="/rights">Rights</Link>
          <Link className="nav-link" to="/duties">Duties</Link>
          <Link className="btn btn-outline" to="/roles"><BookOpen size={18} /> Get Started</Link>
        </div>
        <button className="btn btn-outline nav-menu" onClick={() => setOpen(!open)}><Menu size={20} /> Menu</button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <Link className="mobile-link" to="/preamble" onClick={() => setOpen(false)}>Preamble</Link>
        <Link className="mobile-link" to="/rights" onClick={() => setOpen(false)}>Rights</Link>
        <Link className="mobile-link" to="/duties" onClick={() => setOpen(false)}>Duties</Link>
        <Link className="mobile-link" to="/roles" onClick={() => setOpen(false)}>Get Started</Link>
      </div>
    </nav>
  )
}

export default Navbar
