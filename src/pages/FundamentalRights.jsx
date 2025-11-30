import { fundamentalRights } from '../data/constitutionData.js'

function FundamentalRights() {
  return (
    <div className="container" style={{display:'grid', gap:16}}>
      <h2>Fundamental Rights</h2>
      {fundamentalRights.map((r) => (
        <div key={r.name} className="card">
          <div className="card-title">{r.name} • {r.range}</div>
          <div style={{display:'grid', gap:8}}>
            {r.articles.map(a => (
              <div key={a.number} className="card" style={{padding:12}}>
                <div className="card-title">Article {a.number}: {a.title}</div>
                <div className="card-desc">{a.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FundamentalRights
