import { Link } from 'react-router-dom'
import { preambleText } from '../data/constitutionData.js'

function Preamble() {
  return (
    <div>
      <div className="flag-bg" style={{padding:'48px 0'}}>
        <div className="container">
          <div className="preamble">
            <h1>Preamble</h1>
            <p>{preambleText}</p>
            <Link to="/articles" className="btn btn-outline" style={{marginTop:16}}>Back to Constitution</Link>
          </div>
        </div>
      </div>
      <section className="container" style={{marginTop:24}}>
        <div className="card">
          <div className="card-title">Explanation</div>
          <p className="card-desc">The Preamble declares India to be a Sovereign, Socialist, Secular, Democratic Republic and outlines Justice, Liberty, Equality and Fraternity as guiding ideals. It embodies the spirit and philosophy of the Constitution.</p>
        </div>
      </section>
    </div>
  )
}

export default Preamble
