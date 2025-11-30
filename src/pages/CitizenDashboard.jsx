import Sidebar from '../components/Sidebar.jsx'
import Card from '../components/Card.jsx'

function CitizenDashboard() {
  const items = [
    { label: 'Dashboard', icon: 'dashboard', to: '/citizen' },
    { label: 'Browse Constitution', icon: 'content', to: '/preamble' }
  ]

  

  return (
    <div className="layout container">
      <Sidebar title="Citizen" items={items} />
      <div style={{display:'grid', gap:16}}>
        <div className="grid grid-3">
          <Card title="Preamble" description="Vision and values" onClick={() => window.location.assign('/preamble')} />
          <Card title="Fundamental Rights" description="Protections for citizens" onClick={() => window.location.assign('/rights')} />
          <Card title="Fundamental Duties" description="Responsibilities of citizens" onClick={() => window.location.assign('/duties')} />
        </div>

        
      </div>
    </div>
  )
}

export default CitizenDashboard
