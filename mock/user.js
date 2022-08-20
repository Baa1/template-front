const users = [
  {
    id: 1,
    login: 'vasya',
    password: '12345678'
  },
  {
    id: 2,
    login: 'qwe',
    password: '12345678'
  },
  {
    id: 3,
    login: 'vasya',
    password: '12345678'
  },
  {
    id: 4,
    login: 'vasya',
    password: '12345678'
  },
  {
    id: 5,
    login: 'vasya',
    password: '12345678'
  },
  {
    id: 6,
    login: 'vasya',
    password: '12345678'
  },
]

const getUsers = () => {
  return users
}

const getUserById = (id) => {
  return users.find(user => user.id == id)
}

export default {
  getUsers,
  getUserById
}
