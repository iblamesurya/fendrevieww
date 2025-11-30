import { Link } from 'react-router-dom'
import { BookOpenCheck, Scale, ArrowRight } from 'lucide-react'
import Card from '../components/Card.jsx'

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <h1 className="hero-title">Learn the Indian Constitution</h1>
            <p className="hero-sub">Explore the Preamble, Fundamental Rights and Duties in a simple, focused experience.</p>
            <Link to="/roles" className="btn btn-primary" style={{marginTop:16}}>
              <ArrowRight size={18} /> Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{marginTop:24}}>
        <div className="grid grid-3">
          <Card title="Preamble" description="Vision and values" icon={<Scale color="#000080" />}/>
          <Card title="Fundamental Rights" description="Protections for citizens" icon={<BookOpenCheck color="#000080" />}/>
          <Card title="Fundamental Duties" description="Responsibilities of citizens" icon={<Scale color="#000080" />}/>
        </div>
      </section>

      
    </div>
  )
}

export default Home
