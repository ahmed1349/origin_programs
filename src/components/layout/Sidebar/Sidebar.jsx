import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import './Sidebar.css'

function Sidebar({ 
  title, 
  logo, 
  articles, 
  backPath, 
  backLabel,
  color = '#61DAFB' 
}) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <aside className="sidebar" style={{ '--sidebar-color': color }}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {typeof logo === 'string' && !logo.includes('.') ? (
            <span className="sidebar-logo-emoji">{logo}</span>
          ) : (
            <img src={logo} alt={`${title} logo`} className="sidebar-logo-image" />
          )}
        </div>
        <h2 className="sidebar-title">{title}</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="article-list">
          {articles.map((article) => {
            const isActive = location.pathname === article.path
            return (
              <li key={article.id} className="article-item">
                <button
                  className={`article-link ${isActive ? 'active' : ''}`}
                  onClick={() => navigate(article.path)}
                >
                  {article.title}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {backPath && (
        <div className="sidebar-footer">
          <Button 
            onClick={() => navigate(backPath)} 
            variant="outline"
            size="small"
          >
            {backLabel || '← Back'}
          </Button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar

