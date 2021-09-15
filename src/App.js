import React from "react";

import Header from "./Components/Header/Header";
import ListTasksContainer from "./Components/ListTasksContainer/ListTasksContainer";
import AddTaskContainer from "./Components/AddTaskContainer/AddTaskContainer";

import './App.scss';


const App = () => {

  return (
      <div className="wrapper">
        <Header/>
        <AddTaskContainer/>
        <ListTasksContainer/>
      </div>
  );
}

export default App;
