import { useState } from 'react'
import { discussions as initial } from '../data/mockData.js'

function Discussion() {
  const [list, setList] = useState(initial)
  const [title, setTitle] = useState('')
  const add = () => {
    if (!title.trim()) return
    const id = Math.max(...list.map(l => l.id)) + 1
    setList([{ id, title, author: 'You', replies: 0 }, ...list])
    setTitle('')
  }
  return (
    <div className="container" style={{display:'grid', gap:16}}>
      <h2>Community Discussion</h2>
      <div className="card" style={{display:'grid', gap:8}}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Start a topic" style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
        <button className="btn btn-primary" onClick={add}>Post</button>
      </div>
      <div className="grid grid-3">
        {list.map(d => (
          <div key={d.id} className="card">
            <div className="card-title">{d.title}</div>
            <div className="card-desc">{d.author} • {d.replies} replies</div>
            <button className="btn btn-outline" onClick={() => alert('Open discussion')}>Open</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Discussion
