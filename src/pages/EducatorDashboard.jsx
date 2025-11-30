import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Card from '../components/Card.jsx'
import { sessions as initialSessions } from '../data/mockData.js'

function EducatorDashboard() {
  const items = [
    { label: 'Dashboard', icon: 'dashboard', to: '/educator' },
    { label: 'Post Updates', icon: 'content' },
    { label: 'Announcements', icon: 'content' },
    { label: 'Schedule Sessions', icon: 'analytics' }
  ]

  const [updates, setUpdates] = useState([])
  const [updateForm, setUpdateForm] = useState({ title: '', body: '' })
  const [annForm, setAnnForm] = useState({ title: '', detail: '' })
  const [sessions, setSessions] = useState(initialSessions)
  const [sessionForm, setSessionForm] = useState({ title: '', date: '' })

  const submitUpdate = (e) => { e.preventDefault(); setUpdates(prev => [{ ...updateForm }, ...prev]); setUpdateForm({ title:'', body:'' }); alert('Update posted') }
  const deleteUpdate = (idx) => { setUpdates(prev => prev.filter((_,i)=>i!==idx)); alert('Update deleted') }

  const submitAnnouncement = (e) => { e.preventDefault(); alert('Announcement posted') }

  const submitSession = (e) => { e.preventDefault(); setSessions(prev => [{ ...sessionForm }, ...prev]); setSessionForm({ title:'', date:'' }); alert('Session scheduled') }

  

  return (
    <div className="layout container">
      <Sidebar title="Educator" items={items} />
      <div style={{display:'grid', gap:16}}>
        <div className="grid grid-1">
          <Card title="Welcome" description="Share educational updates and schedule sessions" />
        </div>

        <div className="card">
          <h3 className="card-title">Post Updates/Articles</h3>
          <form onSubmit={submitUpdate} style={{display:'grid', gap:12}}>
            <input value={updateForm.title} onChange={e=>setUpdateForm({...updateForm,title:e.target.value})} placeholder="Title" style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
            <textarea value={updateForm.body} onChange={e=>setUpdateForm({...updateForm,body:e.target.value})} placeholder="Body" rows={5} style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
            <button className="btn btn-primary">Publish</button>
          </form>
          <div style={{marginTop:12}} className="grid grid-2">
            {updates.map((u, idx) => (
              <div key={idx} className="card" style={{padding:12}}>
                <div className="card-title">{u.title}</div>
                <div className="card-desc">{u.body}</div>
                <button className="btn btn-danger" style={{marginTop:8}} onClick={()=>deleteUpdate(idx)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Announcements</h3>
          <form onSubmit={submitAnnouncement} style={{display:'grid', gap:12}}>
            <input value={annForm.title} onChange={e=>setAnnForm({...annForm,title:e.target.value})} placeholder="Title" style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
            <textarea value={annForm.detail} onChange={e=>setAnnForm({...annForm,detail:e.target.value})} placeholder="Details" rows={4} style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
            <button className="btn btn-primary">Publish Announcement</button>
          </form>
        </div>

        

        

        <div className="card">
          <h3 className="card-title">Schedule Educational Sessions</h3>
          <form onSubmit={submitSession} style={{display:'grid', gap:12}}>
            <input value={sessionForm.title} onChange={e=>setSessionForm({...sessionForm,title:e.target.value})} placeholder="Session Title" style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
            <input value={sessionForm.date} onChange={e=>setSessionForm({...sessionForm,date:e.target.value})} placeholder="YYYY-MM-DD" style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}} />
            <button className="btn btn-primary">Schedule</button>
          </form>
          <div style={{display:'grid', gap:8, marginTop:12}}>
            {sessions.map(s => (
              <div key={s.title} className="card" style={{padding:12}}>
                <div className="card-title">{s.title}</div>
                <div className="card-desc">{s.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducatorDashboard
