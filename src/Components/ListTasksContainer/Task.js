import React, {useState} from "react";

import changeIcon from "../../img/edit.svg";
import deleteIcon from "../../img/delete.svg";
import saveIcon from "../../img/check-mark.svg";

const Task = (props) => {
  const [valueInput, setValueInput] = useState(props.task.text)
  const saveChange = (id) => {
    let obj = {
      _id: id,
      text: valueInput
    }
    props.thunkEditTask(obj);
  }

  const selectText = (e) => {
    e.target.select();

  }
  const changeCheckBox = (e, id) => {
    let obj = {
      _id: id,
      isCheck: e.target.checked
    }
    props.thunkEditTask(obj);
  }

  return (
      <div className='task'>
        <div className='task__check-text'>
          <div className='check'>
            <input type="checkbox"
                   onChange={
                     (e) =>
                         changeCheckBox(e, props.task._id)
                   }
                   checked={props.task.isCheck}
            />
          </div>
          <div className='text'>
            {
              !props.task.changeInput
                  ? <div className="task__text"
                         onDoubleClick={
                           () => props.actionChangeInp(props.task._id)
                         }

                  >
                   <p className={`${props.task.isCheck ? 'lineThrough' : ''}`}>{props.task.text}</p>
                  </div>
                  : <input
                      onFocus={
                        (e) =>
                            selectText(e)
                      }
                      onChange={
                        (e) =>
                            setValueInput(e.target.value)
                      }
                      value={valueInput}
                      type="text"
                  />
            }
          </div>

        </div>


        <div className="task__icons">
          {
            !props.task.changeInput
                ? <>
                  <div className="icon__change icon">
                    <img onClick={() => props.actionChangeInp(props.task._id)} src={changeIcon} alt="" className='img'/>
                  </div>
                  <div className="icon__delete icon">
                    <img onClick={() => props.thunkDeleteTask(props.task._id)} src={deleteIcon} alt="" className='img'/>
                  </div>
                </>
                : <div className="icon__save icon">
                  <img onClick={() => saveChange(props.task._id)} src={saveIcon} alt="" className='img'/>
                </div>
          }
        </div>
      </div>
  );
}

export default Task;
