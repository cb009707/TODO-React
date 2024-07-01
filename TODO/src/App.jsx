import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  // Task to do list state
  const [todo, settodo] = useState([
    { "id": 1, "title": "Task 1", "status": false },
    { "id": 2, "title": "Task 2", "status": false }
  ]);

  // Temp state
  const [newtask, setnewtask] = useState('');
  const [updatetask, setupdatedata] = useState('');

  // Add task
  const addtask = () => {
    // Implement add task functionality
  };

  // Delete task
  const deletetask = (id) => {
    // Implement delete task functionality
  };

  // Mark task
  const marktask = (id) => {
    // Implement mark task functionality
  };

  // Cancel update
  const cancelupdate = () => {
    // Implement cancel update functionality
  };

  // Change task
  const changetask = (e) => {
    // Implement change task functionality
  };

  // Update task
  const updatetaskdata = (e) => {
    // Implement update task functionality
  };

  return (
    <>
      <div className="Container App">
        <br /> <br />
        <h1>Daily Tasks Application Using React JS</h1>
        <br /> <br />

        {/* Display ToDos */}
        {todo && todo.length ? '' : 'No Tasks Available!!'}

        {todo && todo.map((task, index) => (
          <React.Fragment key={task.id}>
            <span className="tasktext">{index+1}</span>
            <span className="tasktext">{task.title}</span>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default App;
