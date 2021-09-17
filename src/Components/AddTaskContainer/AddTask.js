import React, {useState} from "react";
import {Button} from "@material-ui/core";

const AddTask = (props) => {
  const [valueTask, setValueTask] = useState('');
  const changeStateInput = (text) => {
    setValueTask(text);
  }

  const addTask = () => {
    const taskObj = {
      text: valueTask,
      isCheck: false
    }
    props.thunkAddTask(taskObj)
    setValueTask('');
  };
  return (
      <div className='container__input-btn'>
        <div className="container__input">
          <input type="text" value={valueTask}
                 onChange={(e) => changeStateInput(e.target.value)}/>
        </div>
        <div className="container__btn">
          <Button variant="contained" color="primary" onClick={() => addTask()}>
            Add Task
          </Button>
        </div>
      </div>
  );
}

export default AddTask;
