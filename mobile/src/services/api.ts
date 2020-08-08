import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-proffy-nlw.herokuapp.com/'
})

export default api;