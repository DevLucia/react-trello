import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  // es importante activar esto en el cors, que permitimos la cookie, haciendo esto para que coja la cookie
  withCredentials: true
})

const authenticate = (user) => {
  return http.post('/authenticate', user)
}


export default { authenticate };