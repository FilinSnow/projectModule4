import React from "react";

const AddTask = (props) => {
  return (
      <div className='container__input-btn'>
        <div className="container__input">
          <input type="text"/>
        </div>
        <div className="container__btn">
          <button>Add Task</button>
        </div>
      </div>
  );
}

export default AddTask;
