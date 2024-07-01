import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  // Task to do list state
  const [todo, settodo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false }
  ]);

  // Temp state
  const [newtask, setnewtask] = useState('');
  const [updatetask, setupdatedata] = useState('');

  // Add task
  const addtask = () => {
    if (newtask) {
      let num = todo.length + 1;
      let newentry = { id: num, title: newtask, status: false };
      settodo([...todo, newentry]);
      setnewtask('');
    }
  };

  // Delete task
  const deletetask = (id) => {
    let newtasks = todo.filter((item) => item.id !== id);
    settodo(newtasks);
  };

  // Mark task
  const marktask = (id) => {
    let newtask = todo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status });
      }
      return task;
    });
    settodo(newtask);
  };

  // Cancel update
  const cancelupdate = () => {
    setupdatedata('');
  };

  // Change task
  const changetask = (e) => {
    let newentry = {
      id: updatetask.id,
      title: e.target.value,
      status: updatetask.status ? true : false
    };
    setupdatedata(newentry);
  };

  // Update task
  const updatetaskdata = () => {
    let updatedtasks = todo.map(task => {
      if (task.id === updatetask.id) {
        return updatetask;
      }
      return task;
    });
    settodo(updatedtasks);
    setupdatedata('');
  };

  return (
    <>
      <div className="Container App">
        <br /> <br />
        <h1>Daily Tasks Application Using React JS</h1>
        <br /> <br />

        {/* Update Task */}
        {updatetask && (
          <div className="row">
            <div className="col">
              <input
                value={updatetask.title}
                onChange={(e) => changetask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button
                onClick={updatetaskdata}
                className="btn btn-lg btn-success mr-20"
              >
                Update
              </button>
              <button
                onClick={cancelupdate}
                className="btn btn-lg btn-warning"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <br />
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input
              value={newtask}
              onChange={(e) => setnewtask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addtask}
              className="btn btn-lg btn-success"
            >
              Add a Task
            </button>
          </div>
        </div>

        {/* Display ToDos */}
        {todo && todo.length ? '' : 'No Tasks Available!!'}

        {todo && todo
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task, index) => (
            <React.Fragment key={task.id}>
              <div className="col taskback">
                <div className={task.status ? 'done' : ''}>
                  <span className="tasknumber">{index + 1}</span>
                  <span className="tasktext">{task.title}</span>
                </div>
                <div className="iconswrap">
                  <span title="comp/not"
                    onClick={() => marktask(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {task.status ? null : (
                    <span title="edit"
                      onClick={() => setupdatedata({ id: task.id, title: task.title, status: task.status ? true : false })}>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span title="delete"
                    onClick={() => deletetask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
}

export default App;
