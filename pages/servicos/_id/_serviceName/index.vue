<template>
  <div>
    <PageHero pageTitle="Serviços" />

    <ServiceModal
      v-if="state.openedModal"
      :serviceId="state.openedService.id"
      @modal-closed="toggleServiceModal({})"
    />

    <div
      id="sobre"
      class="page-main-content --servicos content-theme --dark py-5"
    >
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <p class="text-left --bigger">
              {{ firstTextBlock }}
            </p>
          </b-col>

          <b-col
            md="6"
            class="img-responsive-wrapper text-center"
            v-lazy-container="{ selector: 'img' }"
          >
            <img
              v-if="state.showResponsiveImg"
              :data-srcSet="responsiveImg.srcSet"
              :data-src="responsiveImg.src"
              :data-loading="responsiveImg.placeholder"
              alt="Britador"
            />
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col>
            <h2 class="--smaller --bold">Conheça nossos serviços:</h2>
          </b-col>
        </b-row>

        <client-only>
          <ul class="row services-list my-5">
            <li
              class="col"
              v-for="(service, index) in servicesList"
              :key="service.id"
              :id="`service-${service.id}`"
              @click.prevent="toggleServiceModal(service)"
              data-aos="fade-up"
              :data-aos-offset="(100 * index).toString()"
              data-aos-duration="1000"
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
                  <a href="#">
                    <img src="~assets/img/servicos/popup-open-icon.svg" />
                  </a>
                </footer>
              </div>
            </li>
          </ul>
        </client-only>
      </b-container>
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>{{ pageSlogan }}</h4>
      </div>

      <PageSloganParallax />

      <div
        class="page-footer-content content-theme --light pt-3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <PageFooterContentLogo />

        <div
          class="page-footer-highlight-content pb-5"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out"
        >
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
  async asyncData({ params }) {
    const firstTextBlock = "";
    const pageSlogan = "";
    const footerTextBlock = "";
    const buttonText = "Saiba mais";
    const buttonLink = "/contatos";
    const pageTitle = "Serviços";
    const pageDescription =
      "Lorem ipsumnm dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore";

    const pageContent = {
      firstTextBlock,
      pageSlogan,
      footerTextBlock,
      buttonText,
      buttonLink,
      pageTitle,
      pageDescription
    };

    if (params.id) {
      try {
        const { data: serviceContent } = await $axios.get(params.id);

        pageContent = Object.assign(pageContent, {
          state: {
            showResponsiveImg: true,
            openedModal: true,
            openedService: {
              id: serviceContent.id,
              title: serviceContent.title.rendered,
              content: serviceContent.content.rendered,
              icon: serviceContent.acf.icone,
              img1: serviceContent.acf.foto_quadrada,
              img2: serviceContent.acf.foto_paisagem
            }
          },
          pageTitle: serviceContent.title.rendered,
          pageDescription: serviceContent.acf.page_description
        });
      } catch (e) {}
    }

    return pageContent;
  },
  data() {
    return {
      state: {
        showResponsiveImg: true,
        openedModal: false,
        openedService: {}
      },
      firstTextBlock: "",
      pageSlogan: "",
      footerTextBlock: "",
      buttonText: "",
      buttonLink: "",
      pageTitle: "",
      pageDescription: ""
    };
  },
  computed: {
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
    },
    responsiveImg() {
      return require("~/assets/img/servicos/britador.png?sizes[]=200&sizes[]=320&sizes[]=612");
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
    if (
      this.$device.isMobileOrTablet &&
      this.state.openedService.id != undefined
    ) {
      this.state.openedService = {};
      this.state.openedModal = false;
      next(false);
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.$device.isMobileOrTablet &&
      this.state.openedService.id != undefined
    ) {
      this.state.openedService = {};
      this.state.openedModal = false;
      next(false);
    } else {
      next();
    }
  },
  mounted() {
    // fix scroolbar gap when comming from server with opened modal
    if (this.state.openedModal) {
      let body = document.querySelector("body");
      setTimeout(() => {
        body.style.paddingRight = "0";
      }, 1000);
    }

    window.addEventListener("resize", () => {
      this.state.showResponsiveImg = false;

      setTimeout(() => {
        this.state.showResponsiveImg = true;
      }, 100);
    });
  },
  methods: {
    toggleServiceModal(service) {
      this.state.openedService = service;
      this.state.openedModal = Boolean(this.state.openedService.id);

      if (!this.state.openedModal) {
        // force duplicated modal close when comming from server with opened modal
        try {
          document.querySelector("body").classList.remove("modal-open");

          let serverModal = document.querySelector(
            "#__BVID__22___BV_modal_outer_"
          );

          if (!serverModal) {
            serverModal = document.querySelector(
              "#__BVID__24___BV_modal_outer_"
            );
          }

          serverModal.parentNode.removeChild(serverModal);
        } catch (e) {}
      }
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
