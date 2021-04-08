<template>
  <div>
    <PageHero pageTitle="Quem Somos" />

    <div
      id="sobre"
      class="page-main-content --quemsomos content-theme --light py-2"
    >
      <b-container>
        <b-row class="mt-4">
          <b-col class="content-center">
            <p class="text-left --bigger">
              {{ firstTextBlock }}
            </p>
          </b-col>
        </b-row>

        <b-container class="content-box-container">
          <b-row
            id="missao"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <b-col class="content-box mt-5">
              <h2 class="--bold">Missão</h2>
              <p>
                {{ mission }}
              </p>
            </b-col>
          </b-row>

          <b-row
            id="visao"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <b-col class="content-box mt-5">
              <h2 class="--bold">Visão</h2>
              <p>
                {{ vision }}
              </p>
            </b-col>
          </b-row>
        </b-container>

        <b-row class="img-responsive-wrapper mt-5">
          <b-col class="content-center" v-lazy-container="{ selector: 'img' }">
            <img
              v-if="state.showResponsiveImg"
              :data-srcSet="responsiveImg.srcSet"
              :data-src="responsiveImg.src"
              :data-loading="responsiveImg.placeholder"
              alt="Capacete"
            />
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col class="content-center">
            <h3 class="highlight-text --secondary text-center">
              {{ bottomParagraph }}
            </h3>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>{{ pageSlogan }}</h4>
      </div>

      <PageSloganParallax />

      <div
        class="page-footer-content content-theme --dark pt-3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <PageFooterContentLogo />

        <div
          class="page-footer-highlight-content"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out"
        >
          <b-container class="mt-4">
            <div class="page-footer-icon">
              <img src="~/assets/img/quemsomos/footer-icon.svg" alt="" />
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

export default {
  components: {
    PageHero,
    PageSloganParallax,
    PageFooterContentLogo,
    ScrollTopButton,
    AppFooter
  },
  async asyncData({ $axios }) {
    try {
      return {
        firstTextBlock:
          "Lorem quem-somoss ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        mission:
          "Server ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sis. sit amet, consectetur adipiscing elit",
        vision:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sis. sit amet, consectetur adipiscing elit",
        bottomParagraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.",
        pageSlogan: "Frase sobre a empresa",
        footerTextBlock:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        buttonText: "Saiba mais",
        buttonLink: "/servicos",
        pageTitle: "Quem Somos",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      };
    } catch (e) {
      return {};
    }
  },
  data() {
    return {
      state: {
        showResponsiveImg: true
      },
      firstTextBlock: "",
      mission: "",
      vision: "",
      bottomParagraph: "",
      pageSlogan: "",
      footerTextBlock: "",
      buttonText: "",
      buttonLink: "",
      pageTitle: "",
      pageDescription: ""
    };
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
  computed: {
    responsiveImg() {
      return require("~/assets/img/quemsomos/capacete.png?sizes[]=320&sizes[]=800&sizes[]=1181");
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.state.showResponsiveImg = false;

      setTimeout(() => {
        this.state.showResponsiveImg = true;
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
.page-main-content.--quemsomos {
  @media (min-width: 768px) {
    background-image: url("~assets/img/quemsomos/background.svg");
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: contain;
  }

  .content-box-container {
    max-width: 370px;
    padding-left: 30px;

    @media (min-width: 411px) {
      padding-left: 15px;
    }

    @media (min-width: 768px) {
      max-width: 504px;
    }

    @media (min-width: 960px) {
      max-width: 656px;
    }

    & > .row {
      & > .col.content-box {
        @include light-box-shadow;
        @include box-border;

        background: $light-background;
        text-align: left;
        padding: 38px 31px;

        max-width: 293px;

        @media (min-width: 768px) {
          max-width: 316px;
        }

        h2 {
          color: $dark-title;
          font-size: 46px;
          text-transform: lowercase;
        }
      }

      &::before,
      &::after {
        content: "";
        display: none;
        width: 33px;
        height: 41px;
        position: relative;
        z-index: 2;
        background: url("~assets/img/quemsomos/arrow.png") no-repeat;
      }

      &:nth-child(1) {
        @media (min-width: 411px) {
          justify-content: flex-start;
        }

        &::before,
        &::after {
          align-self: flex-end;
          top: 63px;
          transform: rotate(180deg);
        }

        &::before {
          left: 11px;
        }

        @media (min-width: 411px) and (max-width: 959px) {
          &::before {
            display: block;

            @media (min-width: 768px) {
              left: 48px;
            }
          }
        }

        @media (min-width: 960px) {
          &::after {
            display: block;
            left: -66px;
          }
        }

        & > .col.content-box {
          @media (min-width: 411px) {
            margin-left: -33px;
          }
        }
      }

      &:nth-child(2) {
        @media (min-width: 411px) {
          justify-content: flex-end;
        }

        &::before,
        &::after {
          top: -13px;
          align-self: flex-start;
        }

        &::before {
          left: 77px;
        }

        &::after {
          left: -17px;
        }

        @media (min-width: 411px) and (max-width: 959px) {
          &::after {
            display: block;

            @media (min-width: 768px) {
              left: -77px;
            }
          }
        }

        @media (min-width: 960px) {
          margin-top: -160px;

          &::before {
            display: block;
          }
        }

        & > .col.content-box {
          @media (min-width: 411px) {
            margin-right: -33px;
          }
        }
      }
    }
  }

  .img-responsive-wrapper {
    min-height: 200px;

    @media (min-width: 420) {
      min-height: 450px;
    }

    @media (min-width: 650) {
      min-height: 680px;
    }

    @media (min-width: 800) {
      min-height: 825px;
    }

    img {
      width: 100%;
      max-width: 825px;
      padding: 0 20px;

      &[lazy="loading"] {
        filter: blur(2rem);
      }
    }
  }
}
</style>
