import mock from '@/mock/user'

export const state = () =>({
  user: {},
  users: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async getUserById(context, id) {
    const user = mock.getUserById(id)
    context.commit('setUser', user)
  },
  async getUsers(context) {
    const users = mock.getUsers()
    context.commit('setUsers', users)
  },
}

export const getters = {
  user: state => { 
    return state.user 
  },
  users: state => { 
    return state.users 
  }
}
