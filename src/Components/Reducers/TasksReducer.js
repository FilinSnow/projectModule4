import {api} from "../../api/api";

const GETTASKS = 'GETTASKS';
const CHANGEINP = 'CHANGEINP';

const initialState = {
  tasks: [],
}

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTASKS: {
      return {
        tasks: [
            ...action.data.map(elem => {
              return {
                ...elem,
                changeInput: false
              }
            })
        ]
      }
    }
    case CHANGEINP: {
      return {
        tasks: [
            ...state.tasks.map(elem => {
              if(elem._id === action.id) {
                return {
                  ...elem,
                  changeInput: !elem.changeInput
                }
              }
              return {
                ...elem
              }
            })
        ]
      }
    }
    default: {
      return state;
    }
  }
}

export const actionChangeInp = (id) => {
  return {
    type: CHANGEINP,
    id
  }
}
export const actionGetTasks = (data) => {
  return {
    type: GETTASKS,
    data
  }
}

export const thunkGetTasks = () => {
  return dispatch => {
    return api.getTasks()
        .then(res => {
          const copyArrTrue = res.data.data.filter(elem => elem.isCheck === true);
          const copyArrFalse = res.data.data.filter(elem => elem.isCheck === false);
          res.data.data = [...copyArrFalse, ...copyArrTrue];
          return dispatch(actionGetTasks(res.data.data))
        })
  }
}

export const thunkAddTask = (task) => {
  return dispatch => {
    return api.addTask(task)
        .then(res => {
          if (res) {
            dispatch(thunkGetTasks());
          }
        })
  }
}

export const thunkDeleteTask = (id) => {
  return dispatch => {
    return api.deleteTask(id)
        .then(res => {
          if (res) {
            dispatch(thunkGetTasks());
          }
        })
  }
}

export const thunkEditTask = (task) => {
  return dispatch => {
    return api.editTask(task)
        .then(res => {
          if (res) {
            dispatch(thunkGetTasks());
          }
        })
  }
}
export default TasksReducer