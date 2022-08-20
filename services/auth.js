import api from './api'

const login = async ({ login, password }) => {
  const response = await api.post(`/token?Username=${login}&Password=${password}`)
  return response.data
}

export default {
  login
}
