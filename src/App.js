import React from "react";

import Header from "./Components/Header/Header";

import './App.scss';
import AddTask from "./Components/AddTask/AddTask";
import ListTasks from "./Components/ListTasks/ListTasks";

const App = () => {
  const tasks = [
    {id: 0, text: 'Task1'},
    {id: 1, text: 'Task2'},
    {id: 2, text: 'Task3'},
    {id: 3, text: 'Task4'},
  ]
  return (
      <div className="wrapper">
        <Header />
        <AddTask />
        <ListTasks tasks={tasks}/>
      </div>
  );
}

export default App;
