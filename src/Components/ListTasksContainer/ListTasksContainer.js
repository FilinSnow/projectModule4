import React from "react";
import {connect} from "react-redux";
import {actionChangeInp, thunkDeleteTask, thunkEditTask, thunkGetTasks} from "../Reducers/TasksReducer";

import ListTasks from "./ListTasks";


const ListTasksContainer = (props) => {

  return (
        <ListTasks {...props} />

  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksApp.tasks
  }
}

export default connect(mapStateToProps, {
  actionChangeInp,
  thunkGetTasks,
  thunkDeleteTask,
  thunkEditTask
})(ListTasksContainer);
