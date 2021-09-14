import React, {useState} from "react";

import Header from "./Components/Header/Header";
import AddTask from "./Components/AddTask/AddTask";
import ListTasksContainer from "./Components/ListTasksContainer/ListTasksContainer";

import './App.scss';


const App = () => {
  const [valueTask, setValueTask] = useState('');

  const [tasks, setTasks] = useState(
      [
        {id: 0, text: 'Task1'},
        {id: 1, text: 'Task2'},
        {id: 2, text: 'Task3'},
        {id: 3, text: 'Task4'},
      ]
  );
  const changeStateInput = (text) => {
    setValueTask(text);
  }
  const addTask = () => {
    const taskObj = {
      id: new Date().getTime(),
      text: valueTask
    }
    setTasks([
      ...tasks,
      taskObj
    ]);
    setValueTask('');
  };

  return (
      <div className="wrapper">
        <Header/>
        <AddTask valueTask={valueTask} changeStateInput={changeStateInput} addTask={addTask}/>
        <ListTasksContainer />
      </div>
  );
}

export default App;
