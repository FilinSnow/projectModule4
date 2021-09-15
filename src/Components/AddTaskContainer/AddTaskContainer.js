import React from "react";
import {connect} from "react-redux";

import AddTask from "./AddTask";
import {thunkAddTask} from "../Reducers/TasksReducer";

const AddTaskContainer = (props) => {

  return (
      <div>
        <AddTask thunkAddTask={props.thunkAddTask}/>
      </div>
  );
}



export default connect(null, {thunkAddTask})(AddTaskContainer);
