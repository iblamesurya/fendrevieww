import { useNavigate } from 'react-router-dom'
import { Shield, GraduationCap, Users, Scale } from 'lucide-react'
import Card from '../components/Card.jsx'

function RoleSelection() {
  const navigate = useNavigate()
  return (
    <div className="container" style={{marginTop:16}}>
      <h2 style={{marginBottom:16}}>Select Your Role</h2>
      <div className="grid grid-4">
        <Card title="Admin" description="Oversee platform and content" icon={<Shield color="#000080" />} onClick={() => navigate('/admin')} />
        <Card title="Educator" description="Create educational updates" icon={<GraduationCap color="#FF9933" />} onClick={() => navigate('/educator')} />
        <Card title="Citizen" description="Browse constitutional content" icon={<Users color="#138808" />} onClick={() => navigate('/citizen')} />
        <Card title="Legal Expert" description="Provide legal insights" icon={<Scale color="#000080" />} onClick={() => navigate('/legal-expert')} />
      </div>
    </div>
  )
}

export default RoleSelection
