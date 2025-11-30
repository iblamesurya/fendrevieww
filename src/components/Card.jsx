function Card({ title, description, icon, onClick, children }) {
  return (
    <div className="card" onClick={onClick} style={{cursor: onClick ? 'pointer' : 'default'}}>
      {icon}
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-desc">{description}</p>}
      {children}
    </div>
  )
}

export default Card
