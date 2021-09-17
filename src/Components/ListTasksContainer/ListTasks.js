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
              <Task {...props} key={task._id} task={task}/>
          )
        })}
      </div>
  );
}

export default ListTasks;
