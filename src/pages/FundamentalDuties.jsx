import { fundamentalDuties } from '../data/constitutionData.js'

function FundamentalDuties() {
  return (
    <div className="container" style={{display:'grid', gap:16}}>
      <h2>Fundamental Duties</h2>
      <div className="card">
        <ol style={{paddingLeft:18}}>
          {fundamentalDuties.map((d, i) => (
            <li key={i} style={{marginBottom:8}}>{d}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default FundamentalDuties
