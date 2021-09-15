import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import TasksReducer from "../Components/Reducers/TasksReducer";


const reducers = combineReducers({
  tasksApp: TasksReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;