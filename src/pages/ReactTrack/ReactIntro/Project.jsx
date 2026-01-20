import './Article.css'

function ReactIntroProject() {
  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">React Intro Project</h1>
      </div>

      <div className="article-body">
        <section className="project-section">
          <h2 className="section-title">📋 Project: Todo List App</h2>
          
          <div className="project-details">
            <h3 className="details-title">Project Overview</h3>
            <p className="details-text">
              Build a simple Todo List application using React. This project will help you practice 
              the fundamental concepts of React including components, state management, and event handling.
            </p>
          </div>

          <div className="project-details">
            <h3 className="details-title">Task Instructions</h3>
            <ol className="instructions-list">
              <li>
                <strong>Set up your project:</strong>
                <ul className="nested-list">
                  <li>Create a new React app using <code>create-react-app</code> or Vite</li>
                  <li>Set up your project structure with components folder</li>
                </ul>
              </li>
              <li>
                <strong>Create the TodoList component:</strong>
                <ul className="nested-list">
                  <li>Create a functional component called <code>TodoList</code></li>
                  <li>Use <code>useState</code> to manage the list of todos</li>
                  <li>Initialize state with an empty array</li>
                </ul>
              </li>
              <li>
                <strong>Add todo functionality:</strong>
                <ul className="nested-list">
                  <li>Create an input field to add new todos</li>
                  <li>Add a button to submit new todos</li>
                  <li>Each todo should have a unique ID and text</li>
                </ul>
              </li>
              <li>
                <strong>Display todos:</strong>
                <ul className="nested-list">
                  <li>Map through the todos array and display each todo</li>
                  <li>Show the todo text in a list item</li>
                  <li>Add a checkbox to mark todos as complete</li>
                </ul>
              </li>
              <li>
                <strong>Delete functionality:</strong>
                <ul className="nested-list">
                  <li>Add a delete button for each todo</li>
                  <li>Implement the delete function to remove todos from state</li>
                </ul>
              </li>
              <li>
                <strong>Styling:</strong>
                <ul className="nested-list">
                  <li>Style your components using CSS or CSS Modules</li>
                  <li>Make it visually appealing and user-friendly</li>
                  <li>Add hover effects and transitions</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="project-details">
            <h3 className="details-title">Requirements</h3>
            <ul className="requirements-list">
              <li>✅ Use functional components only</li>
              <li>✅ Use React hooks (useState)</li>
              <li>✅ Handle user input and events</li>
              <li>✅ Update state correctly</li>
              <li>✅ Clean and readable code</li>
            </ul>
          </div>

          <div className="project-details">
            <h3 className="details-title">Bonus Challenges</h3>
            <ul className="bonus-list">
              <li>Add local storage to persist todos</li>
              <li>Add edit functionality for existing todos</li>
              <li>Add filtering (All, Active, Completed)</li>
              <li>Add a counter showing total and completed todos</li>
            </ul>
          </div>

          <div className="final-thought">
            <h2 className="final-title">Ready to Build?</h2>
            <p className="final-text">
              This project will solidify your understanding of React basics. Take your time, 
              experiment, and don't hesitate to refer back to the Q&A section if you get stuck!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReactIntroProject

