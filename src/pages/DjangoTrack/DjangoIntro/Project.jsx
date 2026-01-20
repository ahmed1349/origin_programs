import './Article.css'

function DjangoIntroProject() {
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Intro Project</h1>
      </div>

      <div className="article-body">
        <section className="project-section">
          <h2 className="section-title">📋 Project: Personal Blog</h2>
          
          <div className="project-details">
            <h3 className="details-title">Project Overview</h3>
            <p className="details-text">
              Build a simple personal blog using Django. This project will help you practice 
              the fundamental concepts of Django including models, views, templates, and the admin panel.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">Task Instructions</h3>
            <ol className="instructions-list">
              <li>
                <strong>Set up your Django project:</strong>
                <ul className="nested-list">
                  <li>Create a virtual environment and install Django</li>
                  <li>Create a new Django project using <code>django-admin startproject</code></li>
                  <li>Create a new app called <code>blog</code> using <code>python manage.py startapp blog</code></li>
                </ul>
              </li>
              <li>
                <strong>Create the Post model:</strong>
                <ul className="nested-list">
                  <li>Create a <code>Post</code> model in <code>models.py</code></li>
                  <li>Add fields: title (CharField), content (TextField), created_at (DateTimeField)</li>
                  <li>Add <code>__str__</code> method to return the title</li>
                </ul>
              </li>
              <li>
                <strong>Set up the admin panel:</strong>
                <ul className="nested-list">
                  <li>Register the Post model in <code>admin.py</code></li>
                  <li>Create a superuser using <code>python manage.py createsuperuser</code></li>
                  <li>Run migrations: <code>python manage.py makemigrations</code> and <code>python manage.py migrate</code></li>
                </ul>
              </li>
              <li>
                <strong>Create views:</strong>
                <ul className="nested-list">
                  <li>Create a view to list all blog posts</li>
                  <li>Create a view to display a single post</li>
                  <li>Use Django's template system to render HTML</li>
                </ul>
              </li>
              <li>
                <strong>Set up URLs:</strong>
                <ul className="nested-list">
                  <li>Create <code>urls.py</code> in your blog app</li>
                  <li>Include blog URLs in the main project's <code>urls.py</code></li>
                  <li>Create routes for listing posts and viewing individual posts</li>
                </ul>
              </li>
              <li>
                <strong>Create templates:</strong>
                <ul className="nested-list">
                  <li>Create a base template with navigation</li>
                  <li>Create a template to list all posts</li>
                  <li>Create a template to display a single post</li>
                  <li>Use Django template tags and filters</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="project-details">
            <h3 className="details-title">Requirements</h3>
            <ul className="requirements-list">
              <li>✅ Use Django models to define data structure</li>
              <li>✅ Set up and use the Django admin panel</li>
              <li>✅ Create views and URL routing</li>
              <li>✅ Use Django templates for rendering</li>
              <li>✅ Follow Django best practices</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">Bonus Challenges</h3>
            <ul className="bonus-list">
              <li>Add categories or tags to posts</li>
              <li>Add pagination to the post list</li>
              <li>Add a search functionality</li>
              <li>Style your blog with CSS</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This project will help you understand Django's core concepts. Take your time, 
              experiment with the admin panel, and refer back to the Q&A section when needed!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DjangoIntroProject

