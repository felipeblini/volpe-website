<template>
  <div>
    <PageHero pageTitle="Serviços" />
    <ServiceModal
      v-if="openedService.id"
      :serviceId="openedService.id"
      @popup-close="openServiceModal({})"
    />

    <div
      id="sobre"
      class="page-main-content --servicos content-theme --dark py-5"
    >
      <b-container>
        <b-row class="align-items-center">
          <b-col lg="6">
            <p class="text-left --bigger">
              {{ $device.isMobileOrTablet }}
              {{ firstTextBlock }}
            </p>
          </b-col>

          <b-col lg="6" class="img-responsive-wrapper text-center">
            <img
              v-if="state.showResponsiveImg"
              :data-src="contentImgSizesSet"
              class="lazyload"
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
            @click="openedService = service"
          >
            <div class="p-4">
              <img
                class="service-icon"
                :src="service.icon"
                :alt="service.title"
              />
              <h3>{{ service.title }}</h3>
              <p v-html="service.excerpt"></p>

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
import ServiceModal from "~/components/ServiceModal";

export default {
  components: {
    PageHero,
    PageSloganParallax,
    PageFooterContentLogo,
    ScrollTopButton,
    AppFooter,
    ServiceModal
  },
  async asyncData({ $axios, params }) {
    let pageContent;

    try {
      const requestParams = { slug: "servicos" };
      const { data } = await $axios.get("", { params: requestParams });

      const splitRendered = data[0].content.rendered.split(/\n\n\n\n/);
      const pageSEO = data[0].acf;

      const firstTextBlock = splitRendered[0];
      const pageSlogan = splitRendered[1];
      const footerTextBlock = splitRendered[2];
      const buttonText = splitRendered[3].split("buttonText:")[1].trim();
      const buttonLink = splitRendered[4].split("buttonLink:")[1].trim();
      const pageTitle = pageSEO.page_title;
      const pageDescription = pageSEO.page_description;

      pageContent = {
        firstTextBlock,
        pageSlogan,
        footerTextBlock,
        buttonText,
        buttonLink,
        pageTitle,
        pageDescription
      };
    } catch (e) {
      pageContent = {};
    }

    if (params.id) {
      const serviceContent = await $axios.get(params.id);

      pageContent = Object.assign(pageContent, {
        pageTitle: serviceContent.data.title.rendered,
        pageDescription: serviceContent.data.acf.page_description
      });
    }

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
      openedService: {},
      pageTitle: "",
      pageDescription: ""
    };
  },
  computed: {
    contentImgSizesSet() {
      return require(`~/assets/img/servicos/britador.png`);
    },
    servicesList() {
      return this.$store.state.servicesList
        .filter(x => !x.content.protected)
        .map(service => {
          return {
            id: service.id,
            title: service.title.rendered.trim(),
            excerpt: service.excerpt.rendered,
            icon: service.acf.icone
          };
        });
    }
  },

  /*
   ** Headers of the page
   */
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageDescription
        }
      ]
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (this.$device.isMobileOrTablet && this.openedService.id != undefined) {
      this.openedService = {};
      next(false);
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.$device.isMobileOrTablet && this.openedService.id != undefined) {
      this.openedService = {};
      next(false);
    } else {
      next();
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.openedService =
        this.$store.state.servicesList.filter(
          x => x.id == this.$route.params.id
        )[0] || {};
    }

    window.addEventListener("resize", () => {
      this.state.showResponsiveImg = false;

      setTimeout(() => {
        this.state.showResponsiveImg = true;
      }, 100);
    });
  },
  methods: {
    openServiceModal(service) {
      this.openedService = service;
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
