import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
})

const createColumn = (column) => {
  return http.post('/columns', column)
}

const getColumns = () => {
  return http.get('/columns')
}

const createCard = (card) => {
  // si hemos metido imagen a la card
  // ahora el objeto card no es un objeto, como lleva archivos, ahora será un form-data
  // como aquí llega un objeto lo tenemos que trasnformar para mandarselo al servicio
  const data = new FormData();
  Object.keys(card).forEach(key => data.append(key, card[key]))
  return http.post('/cards', data)
}

const getCards = () => {
  // ahora el objeto card no es un objeto, como lleva archivos, ahora será un form-data
  return http.get('/cards')
}

export default {getColumns, createColumn, createCard, getCards };