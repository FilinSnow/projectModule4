import React, {useEffect} from "react";
import {connect} from "react-redux";
import {thunkGetTasks} from "../Reducers/TasksReducer";
import ListTasks from "./ListTasks";


const ListTasksContainer = (props) => {
  useEffect(() => {
    props.thunkGetTasks()
  }, [])
  return (
      <div>
        <ListTasks tasks={props.tasks}/>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksApp.tasks
  }
}

export default connect(mapStateToProps, {thunkGetTasks})(ListTasksContainer);
