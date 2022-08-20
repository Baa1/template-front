import authService from '../services/auth'

export const state = () => ({
  token: ""
})

export const mutations = {
  saveToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async signIn(context, { login, password }) {
    const data = await authService.login({ login, password })
    context.commit('saveToken', data.access_token)
  }
}

export const getters = {
  token: (state) => {
    return state.token
  }
}
