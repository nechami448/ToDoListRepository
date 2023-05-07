import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
//axios.defaults.baseURL = process.env.apiUrl;
const apiClient=axios.create({
  baseURL:process.env.REACT_APP_API_URL
})
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
//axios.create();

export default {
  getTasks: async () => {
    const result = await apiClient.get(``)
    return result.data;
  },

  addTask: async (name) => {
    // console.log('addTask', name)
    const result = await apiClient.post(``, { name: name, isComplete: false }).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  },

  setCompleted: async (id, isComplete) => {
    const result = await apiClient.put(`/${id}?isComplete=${isComplete}`).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  },

  deleteTask: async (id) => {
    // console.log('deleteTask')
    const result = await apiClient.delete(`/${id}`).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  }

};

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log("OK");
  console.log("response",response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.error("error",error);
  return Promise.reject(error);
});



