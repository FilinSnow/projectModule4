import axios from "axios";


export const api = {
  getTasks: async () => {
    return await axios.get('http://localhost:8000/allTasks');
  },
  addTask: async (task) => {
    return await axios.post('http://localhost:8000/createTask', task)
  },
  deleteTask: async (id) => {
    return await axios.delete(`http://localhost:8000/deleteTask/${id}`)
  },
  editTask: async (task) => {
    // console.log(task)
    return await axios.patch('http://localhost:8000/updateTask', task)
  },
}