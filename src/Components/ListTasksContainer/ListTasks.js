import React, {useEffect} from "react";

import Task from "./Task";

const ListTasks = (props) => {

  useEffect(() => {
    props.thunkGetTasks();
  }, []);

  return (
      <div className='container__tasks'>
        {props.tasks.map(task => {
          return (
              <Task tasks={props.tasks} key={task._id} thunkDeleteTask={props.thunkDeleteTask} thunkEditTask={props.thunkEditTask} actionChangeInp={props.actionChangeInp} task={task}/>
          )
        })}
      </div>
  );
}

export default ListTasks;
