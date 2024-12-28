import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({ tasks, onDragEnd }) {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="task-list"
        >
          {tasks.map((task, index) => (
            <Draggable key={task.title} draggableId={task.title} index={index}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <TaskItem task={task} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TaskList
