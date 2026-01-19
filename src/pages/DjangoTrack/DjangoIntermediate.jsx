import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Navbar from '../../components/layout/Navbar/Navbar'
import './DjangoIntermediate.css'

function DjangoIntermediate() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Navbar />
      <div className="level-page-container">
        <div className="level-header">
          <div className="level-logo">🐍</div>
          <h1 className="level-title">Django Track — Intermediate</h1>
        </div>

        <div className="level-content">
          <section className="content-section">
            <h2 className="section-title">Coming Soon</h2>
            <p className="section-text">
              The Django Intermediate content is being prepared. Check back soon!
            </p>
          </section>
        </div>

        <div className="level-actions">
          <Button onClick={() => navigate('/django')} variant="outline">
            ← Back to Django Track
          </Button>
          <Button onClick={() => navigate('/django/advanced')} variant="primary">
            Next: Advanced →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DjangoIntermediate

