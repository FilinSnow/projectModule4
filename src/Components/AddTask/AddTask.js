import React from "react";

const AddTask = (props) => {
  return (
      <div className='container__input-btn'>
        <div className="container__input">
          <input type="text" value={props.valueTask}
                 onChange={(e) => props.changeStateInput(e.target.value)}/>
        </div>
        <div className="container__btn">
          <button onClick={() => props.addTask()}>Add Task</button>
        </div>
      </div>
  );
}

export default AddTask;
