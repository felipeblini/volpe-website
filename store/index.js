export const state = () => ({
  phone: "",
  address: "",
  cep: "",
  city: "",
  servicesList: []
})

export const mutations = {
  storeServicesList(state, payload) {
    state.servicesList = payload
  },

  storeContactInfo(state, payload) {
    state.phone = payload.telefones;
    state.address = payload.endereco;
    state.cep = payload.cep;
    state.city = payload.cidade;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const servicesRequestParams = { categories: "2" };
    const { data: servicesData } = await app.$axios.get("", {
      params: servicesRequestParams
    });

    commit('storeServicesList', servicesData.reverse())

    const contactInfo = await app.$axios.get("", {
      params: { slug: 'contato' }
    });

    commit('storeContactInfo', contactInfo.data[0].acf)

  }
}
