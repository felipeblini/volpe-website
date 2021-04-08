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
    state.phone = payload.phone;
    state.address = payload.address;
    state.cep = payload.cep;
    state.city = payload.city;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing";

    const excerpt = content + "[...]";

    const servicesList = [{
      id: 1,
      title: "Recebimento de Resíduos de Construção Civil",
      excerpt,
      content,
      icon: "s1",
      img1: "service1.jpg",
      img2: "service1-paisagem.jpg"
    },
    {
      id: 2,
      title: "Areia e agregados reciclados",
      excerpt,
      content,
      icon: "s2",
      img1: "service2.jpg",
      img2: "service2-paisagem.jpg"
    },
    {
      id: 3,
      title: "Coleta de resíduos",
      excerpt,
      content,
      icon: "s3",
      img1: "service3.jpg",
      img2: "service3-paisagem.jpg"
    },
    {
      id: 4,
      title: "Fabricação de artefatos de concreto",
      excerpt,
      content,
      icon: "s4",
      img1: "service4.jpg",
      img2: "service4-paisagem.jpg"
    },
    {
      id: 5,
      title: "Reforma e Construção",
      excerpt,
      content,
      icon: "s5",
      img1: "service5.jpg",
      img2: "service5-paisagem.jpg"
    },
    {
      id: 6,
      title: "Demolição",
      excerpt,
      content,
      icon: "s6",
      img1: "service6.jpg",
      img2: "service6-paisagem.jpg"
    }]

    commit('storeServicesList', servicesList)

    commit('storeContactInfo', {
      phone: "(11) 3607-4071 | (11) 3607-2101",
      address: "Rua São Bento, 555",
      cep: "06186-140",
      city: "Osasco - SP"
    })

  }
}
