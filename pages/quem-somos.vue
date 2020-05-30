<template>
  <div>
    <PageHero pageTitle="Quem Somos" />

    <div
      id="sobre"
      class="page-main-content --quem-somos content-theme --light py-5"
    >
      <b-container>
        <b-row class="mt-5">
          <b-col class="content-center">
            <p class="text-left --bigger">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </b-col>
        </b-row>

        <b-container class="content-box-container">
          <b-row id="missao">
            <b-col class="content-box mt-5">
              <h2 class="--bold">Missão</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut sis. sit amet, consectetur
                adipiscing elit
              </p>
            </b-col>
          </b-row>

          <b-row id="visao">
            <b-col class="content-box mt-5">
              <h2 class="--bold">Visão</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut sis. sit amet, consectetur
                adipiscing elit
              </p>
            </b-col>
          </b-row>
        </b-container>

        <b-row
          class="img-responsive-wrapper mt-5"
          v-lazy-container="{ selector: 'img' }"
        >
          <b-col class="content-center">
            <img
              v-if="showResponsiveImg"
              :data-srcSet="contentImgSizesSet.srcSet"
              :data-src="contentImgSizesSet.src"
              :data-loading="
                require(`~/assets/img/quem-somos/capacete.png?lqip`)
              "
              alt=""
            />
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col class="content-center">
            <h3 class="highlight-text --secondary text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius.
            </h3>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>Frase sobre a empresa</h4>
      </div>

      <PageSloganParallax />

      <div class="page-footer-content content-theme --dark pt-3">
        <PageFooterContentLogo />

        <div class="page-footer-highlight-content">
          <b-container class="mt-4">
            <icon class="page-footer-icon">
              <img src="~/assets/img/quem-somos/footer-icon.svg" alt="" />
            </icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </b-container>

          <b-container class="mt-4">
            <icon class="icon-gap"></icon>
            <p>
              <nuxt-link class="volpe-btn" to="/servicos">
                Saiba Mais
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
  data() {
    return {
      showResponsiveImg: true
    };
  },
  computed: {
    contentImgSizesSet() {
      return require(`~/assets/img/quem-somos/capacete.png?resize&sizes[]=450&sizes[]=680&sizes[]=979`);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.showResponsiveImg = false;

      setTimeout(() => {
        this.showResponsiveImg = true;
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
.page-main-content.--quem-somos {
  @media (min-width: 768px) {
    background-image: url("~assets/img/quem-somos/main-content-background.jpg");
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: contain;
  }

  .content-box-container {
    max-width: 370px;

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
        background: url("~assets/img/quem-somos/arrow.png") no-repeat;
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
