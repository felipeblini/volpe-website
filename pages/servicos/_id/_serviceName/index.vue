<template>
  <div>
    <PageHero pageTitle="Serviços" />
    <ServicePopup
      :show="openModal"
      :service="openedService"
      @popup-close="openModal = false"
    />

    <div
      id="sobre"
      class="page-main-content --servicos content-theme --dark py-5"
    >
      <b-container>
        <b-row class="mt-5 align-items-center">
          <b-col lg="6">
            <p class="text-left --bigger">
              {{ firstTextBlock }}
            </p>
          </b-col>

          <b-col
            lg="6"
            class="img-responsive-wrapper text-center"
            v-lazy-container="{ selector: 'img' }"
          >
            <img
              v-if="state.showResponsiveImg"
              :data-srcSet="contentImgSizesSet.srcSet"
              :data-src="contentImgSizesSet.src"
              :data-loading="require(`~/assets/img/servicos/britador.png?lqip`)"
              alt=""
            />
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col>
            <h2 class="--smaller --bold">Conheça nossos serviços:</h2>
          </b-col>
        </b-row>

        <ul class="row services-list my-5">
          <li
            class="col"
            v-for="service in servicesList"
            :key="service.id"
            :id="`service-${service.id}`"
          >
            <div class="p-4">
              <img
                class="service-icon"
                :src="service.icon"
                :alt="service.title"
              />
              <h3>{{ service.title }}</h3>
              <p v-html="service.desc"></p>

              <footer class="d-flex justify-content-end">
                <a href="#" @click.prevent="openServiceModal(service)">
                  <img src="~assets/img/servicos/popup-open-icon.svg" />
                </a>
              </footer>
            </div>
          </li>
        </ul>
      </b-container>
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>{{ pageSlogan }}</h4>
      </div>

      <PageSloganParallax />

      <div class="page-footer-content content-theme --light pt-3">
        <PageFooterContentLogo />

        <div class="page-footer-highlight-content pb-5">
          <b-container class="mt-4">
            <div class="page-footer-icon">
              <img src="~/assets/img/servicos/shield.svg" alt="" />
            </div>
            <p>
              {{ footerTextBlock }}
            </p>
          </b-container>

          <b-container class="mt-4">
            <div class="icon-gap"></div>
            <p>
              <nuxt-link class="volpe-btn" :to="buttonLink">
                {{ buttonText }}
              </nuxt-link>
            </p>
          </b-container>
        </div>

        <div class="bottom-gap">
          <ScrollTopButton />
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";
import PageSloganParallax from "~/components/PageSloganParallax";
import PageFooterContentLogo from "~/components/PageFooterContentLogo";
import ScrollTopButton from "~/components/ScrollTopButton";
import AppFooter from "~/components/AppFooter";
import ServicePopup from "~/components/ServicePopup";

export default {
  components: {
    PageHero,
    PageSloganParallax,
    PageFooterContentLogo,
    ScrollTopButton,
    AppFooter,
    ServicePopup
  },
  async asyncData({ $axios, params }) {
    let pageContent = {};

    try {
      const requestParams = { slug: "servicos" };
      const { data } = await $axios.get("", { params: requestParams });

      const splitRendered = data[0].content.rendered.split(/\n\n\n\n/);

      const firstTextBlock = splitRendered[0];
      const pageSlogan = splitRendered[1];
      const footerTextBlock = splitRendered[2];
      const buttonText = splitRendered[3].split("buttonText:")[1].trim();
      const buttonLink = splitRendered[4].split("buttonLink:")[1].trim();

      pageContent = Object.assign(pageContent, {
        firstTextBlock,
        pageSlogan,
        footerTextBlock,
        buttonText,
        buttonLink
      });
    } catch (e) {
      console.log({ e });
    }

    const servicesList = [
      {
        id: 1,
        title: "Recebimento de Resíduos de Construção Civil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "/service-1/icon.svg",
        img1: "/service-1/img001.jpg",
        img2: "/service-1/img002.jpg"
      },
      {
        id: 2,
        title: "Areia e agregados reciclados",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "/service-2/icon.svg",
        img1: "/service-2/img001.jpg",
        img2: "/service-2/img002.jpg"
      },
      {
        id: 3,
        title: "Coleta de resíduos",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "/service-3/icon.svg",
        img1: "/service-3/img001.jpg",
        img2: "/service-3/img002.jpg"
      },
      {
        id: 4,
        title: "Fabricação de artefatos de concreto",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "/service-4/icon.svg",
        img1: "/service-4/img001.jpg",
        img2: "/service-4/img002.jpg"
      },
      {
        id: 5,
        title: "Reforma e Construção",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "/service-5/icon.svg",
        img1: "/service-5/img001.jpg",
        img2: "/service-5/img002.jpg"
      },
      {
        id: 6,
        title: "Demoliçao",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "/service-6/icon.svg",
        img1: "/service-6/img001.jpg",
        img2: "/service-6/img002.jpg"
      }
    ];

    let openedService = {},
      openModal = false;

    if (params.id) {
      openedService = servicesList.filter(x => x.id == params.id)[0] || {};
      openModal = openedService.hasOwnProperty("id");
    }

    pageContent = Object.assign(pageContent, {
      servicesList,
      openModal,
      openedService
    });

    return pageContent;
  },
  data() {
    return {
      state: {
        showResponsiveImg: true
      },
      firstTextBlock: "",
      pageSlogan: "",
      footerTextBlock: "",
      buttonText: "",
      buttonLink: "",
      servicesList: "",
      openModal: "",
      openedService: ""
    };
  },
  computed: {
    contentImgSizesSet() {
      return require(`~/assets/img/servicos/britador.png?resize&sizes[]=450&sizes[]=612`);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.state.showResponsiveImg = false;

      setTimeout(() => {
        this.state.showResponsiveImg = true;
      }, 100);
    });
  },
  methods: {
    openServiceModal(service) {
      console.log("open");
      this.openedService = {};
      this.openModal = false;

      setTimeout(() => {
        this.openedService = service;
        this.openModal = true;
      }, 200);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-main-content.--servicos {
  h2 {
    text-align: center;

    @media (min-width: 992px) {
      text-align: unset;
    }
  }
  .img-responsive-wrapper {
    min-height: 129px;

    @media (min-width: 420) {
      min-height: 217px;
    }

    @media (min-width: 650) {
      min-height: 289px;
    }

    img {
      width: 100%;
      max-width: 612px;
      padding: 0 20px;

      &[lazy="loading"] {
        filter: blur(2rem);
      }
    }
  }

  ul.services-list {
    margin: 0;
    padding: 0;

    li {
      @include box-border;
      @include box-shadow-dark;

      min-width: 45%;

      @media (min-width: 780px) {
        min-width: 30%;
      }

      display: flex;
      margin: 18px;
      list-style: none;

      & > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        img.service-icon {
          width: 74px;
          height: 74px;
        }

        h3 {
          font-size: 19px;
          margin-top: 15px;
          color: $dark-title;
        }

        p {
          font-size: 14px;
        }

        footer {
          flex-grow: 1;
          align-items: flex-end;

          a {
            width: 32px;
          }
        }
      }
    }
  }
}
</style>
