import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
 
  const [todo, settodo] = useState([
    {"id":1,"title":"Task 1","status":false},
    {"id":2,"title":"Task 2","status":false}
  ]);

  const [newtask, setnewtask] = useState('');
  const [updatetask, setupdatedata] = useState('');




  return (
    <>
      <div className="Container App">
        <h1>Daily Tasks Application Using React JS</h1>
      </div>
    </>
  );
}

export default App;
