import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, BarChart, FileText, MessageSquare } from 'lucide-react'

function Sidebar({ title, items }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">{title}</div>
      <nav>
        {items.map((i) => (
          <NavLink key={i.label} to={i.to || '#'} className="sidebar-item">
            {i.icon === 'dashboard' && <LayoutDashboard size={18} />}
            {i.icon === 'users' && <Users size={18} />}
            {i.icon === 'content' && <FileText size={18} />}
            {i.icon === 'analytics' && <BarChart size={18} />}
            {i.icon === 'discussions' && <MessageSquare size={18} />}
            <span>{i.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
