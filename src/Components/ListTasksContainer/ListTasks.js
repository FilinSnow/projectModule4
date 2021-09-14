import React from "react";


const ListTasks = (props) => {

  return (
      <div className='container__tasks'>
        {props.tasks.map(task => {
          return (
              <div key={task._id} className='task'>
                {task.text}
              </div>
          )
        })}
      </div>
  );
}

export default ListTasks;
