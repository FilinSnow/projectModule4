import {api} from "../../api/api";

const GETTASKS = 'GETTASKS';

const initialState = {
  tasks: [],
}

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTASKS: {
      return {
        tasks: [...action.data]
      }
    }

    default: {
      return state;
    }
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
        .then((res) => {
          return dispatch(actionGetTasks(res.data.data))
        })
  }
}

export const thunkAddTask = (task) => {
  return dispatch => {

  }
}

export default TasksReducer