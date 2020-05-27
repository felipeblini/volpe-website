<template>
  <div>
    <PageHero pageTitle="Quem Somos" />

    <div class="page-main-content --quem-somos content-theme --light py-5">
      <b-container>
        <b-row class="mt-5">
          <p class="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </b-row>

        <b-container class="content-box-container">
          <b-row class="justify-content-start">
            <b-col class="content-box mt-5">
              <h2>Missão</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut sis. sit amet, consectetur
                adipiscing elit
              </p>
            </b-col>
          </b-row>

          <b-row class="justify-content-end">
            <b-col class="content-box mt-5">
              <h2>Visão</h2>
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
          <img
            v-if="showResponsiveImg"
            :data-srcSet="contentImgSizesSet.srcSet"
            :data-src="contentImgSizesSet.src"
            :data-loading="require(`~/assets/img/quem-somos/capacete.png?lqip`)"
            alt=""
          />
        </b-row>

        <b-row class="mt-5">
          <h3 class="highlight-text --sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius.
          </h3>
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
          <a
            href="#top"
            class="back-to-top-link"
            onclick="scrollToTop();return false"
            >Voltar para o topo</a
          >
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
import AppFooter from "~/components/AppFooter";

export default {
  components: {
    PageHero,
    PageSloganParallax,
    PageFooterContentLogo,
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
      &::before,
      &::after {
        content: "";
        display: block;
        width: 33px;
        height: 41px;
        position: relative;
        z-index: 2;
        left: -63px;
        background: url("~assets/img/quem-somos/arrow.png") no-repeat;
      }

      &:nth-child(1) {
        &::before {
          align-self: flex-end;
          top: 59px;
          left: 72px;
          transform: rotate(180deg);
        }

        &::after {
          display: none;
        }

        @media (min-width: 960px) {
          &::before {
            display: none;
          }

          &::after {
            display: block;
            align-self: flex-end;
            top: 59px;
            transform: rotate(180deg);
          }
        }
      }

      &:nth-child(2) {
        &::before {
          align-self: flex-start;
          top: -10px;
          left: 222px;
        }

        &::after {
          display: none;
        }

        @media (min-width: 960px) {
          margin-right: -60px;

          &::after {
            display: none;
          }

          &::before {
            display: block;
            left: 70px;
            top: -10px;
          }
        }
      }

      @media (min-width: 960px) {
        &:nth-child(2) {
          margin-top: -160px;
        }
      }
      & > .content-box {
        @include light-box-shadow;
        @include box-border;

        background: $light-background;
        border-radius: 40px;
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
