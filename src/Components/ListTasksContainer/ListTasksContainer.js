import React from "react";
import {connect} from "react-redux";
import {actionChangeInp, thunkDeleteTask, thunkEditTask, thunkGetTasks} from "../Reducers/TasksReducer";

import ListTasks from "./ListTasks";


const ListTasksContainer = (props) => {

  return (
      <div>
        <ListTasks actionChangeInp={props.actionChangeInp}
                   thunkEditTask={props.thunkEditTask}
                   thunkGetTasks={props.thunkGetTasks}
                   tasks={props.tasks}
                   thunkDeleteTask={props.thunkDeleteTask}
        />
      </div>
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
