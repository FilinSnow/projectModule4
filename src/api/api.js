import axios from "axios";


export const api = {
  getTasks: async () => {
    return await axios.get('http://localhost:8000/allTasks');
  },
  addTask: async (task) => {
    return await axios.post('http://localhost:8000/createTask', {
      task
    })
  }
}