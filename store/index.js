export const state = () => ({
  phoneNumber: '18 981156331',
  active: 'home'
})

export const mutations = {
  setMenu(state, menu) {
    state.active = menu
  }
}
