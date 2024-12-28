import React from 'react'
import './TaskItem.css'

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
    </div>
  )
}

export default TaskItem
