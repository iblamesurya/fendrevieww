import { useState } from 'react'
import { quizQuestions } from '../data/quizData.js'

function Quiz() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)

  const current = quizQuestions[index]
  const selectOption = (i) => setSelected(i)
  const next = () => {
    if (selected == null) return
    const newAns = [...answers]
    newAns[index] = selected
    setAnswers(newAns)
    setSelected(null)
    if (index + 1 < quizQuestions.length) setIndex(index + 1)
    else setDone(true)
  }
  const score = answers.reduce((acc, a, i) => acc + (a === quizQuestions[i].answerIndex ? 1 : 0), 0)

  return (
    <div className="container" style={{display:'grid', gap:16}}>
      <h2>Quiz</h2>
      {!done && (
        <div className="card">
          <div className="card-title">{current.question}</div>
          <div style={{display:'grid', gap:8}}>
            {current.options.map((opt, i) => (
              <button key={opt} className={`btn ${selected===i?'btn-primary':'btn-outline'}`} onClick={() => selectOption(i)}>{opt}</button>
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginTop:12}}>
            <div className="badge">{index+1} / {quizQuestions.length}</div>
            <button className="btn btn-primary" onClick={next}>Next</button>
          </div>
        </div>
      )}
      {done && (
        <div className="card">
          <div className="card-title">Result</div>
          <div className="card-desc">Score: {score} / {quizQuestions.length}</div>
          <button className="btn btn-outline" onClick={() => { setIndex(0); setSelected(null); setAnswers([]); setDone(false) }}>Retry</button>
        </div>
      )}
    </div>
  )
}

export default Quiz
