import { keyArticles } from '../data/constitutionData.js'
import { Link } from 'react-router-dom'

function Articles() {
  return (
    <div className="container" style={{display:'grid', gap:16}}>
      <h2>Key Articles</h2>
      <div className="grid grid-3">
        {keyArticles.map(a => (
          <div key={a.number} className="card">
            <div className="card-title">Article {a.number}: {a.title}</div>
            <div className="card-desc">{a.description}</div>
          </div>
        ))}
      </div>
      <div style={{display:'flex', gap:12}}>
        <Link className="btn btn-outline" to="/preamble">Preamble</Link>
        <Link className="btn btn-outline" to="/rights">Fundamental Rights</Link>
        <Link className="btn btn-outline" to="/duties">Fundamental Duties</Link>
      </div>
    </div>
  )
}

export default Articles
