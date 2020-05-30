<template>
  <div>
    <PageHero pageTitle="Home" />

    <div class="page-main-content --index content-theme --dark py-5">
      <b-container>
        <b-row>
          <b-col class="content-center">
            <p class="highlight-text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </b-col>
        </b-row>
        <b-row
          class="img-responsive-wrapper"
          v-lazy-container="{ selector: 'img' }"
        >
          <b-col class="content-center">
            <img
              v-if="showResponsiveImg"
              :data-srcSet="contentImgSizesSet.srcSet"
              :data-src="contentImgSizesSet.src"
              :data-loading="require(`~/assets/img/index/cacamba.png?lqip`)"
              alt=""
            />
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col class="text-center">
            <h2 class="--bold">Nossa Atuação</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="content-center">
            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </b-col>
        </b-row>

        <ul class="row content-list my-5">
          <li class="col-lg-4">
            <div class="p-4">
              <img src="~assets/img/index/atividade-1.svg" alt="" />
              <h3 class="--bold mt-3">Atividades Ambientais</h3>
            </div>
          </li>
          <li class="col-lg-4">
            <div class="p-4">
              <img src="~/assets/img/index/atividade-2.svg" alt="" />
              <h3 class="--bold mt-3">Atividades Comerciais</h3>
            </div>
          </li>
          <li class="col-lg-4">
            <div class="p-4">
              <img src="~/assets/img/index/atividade-3.svg" alt="" />
              <h3 class="--bold mt-3">Atividades Socioambientais</h3>
            </div>
          </li>
        </ul>
      </b-container>
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>Frase com slogan ambiental</h4>
      </div>

      <PageSloganParallax />

      <div class="page-footer-content content-theme --light pt-3">
        <PageFooterContentLogo />

        <div class="page-footer-highlight-content">
          <b-container class="mt-4">
            <icon class="page-footer-icon">
              <img src="~/assets/img/index/footer-icon.svg" alt="" />
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
              <nuxt-link class="volpe-btn" to="/quem-somos">
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
      return require(`~/assets/img/index/cacamba.png?resize&sizes[]=450&sizes[]=680&sizes[]=825`);
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
.page-main-content.--index {
  @media (min-width: 768px) {
    background-image: url("~assets/img/index/main-content-background.jpg");
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: contain;
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

  ul.content-list {
    padding: 0;

    li {
      list-style: none;
      text-align: center;
      max-width: 346px;
      padding: 25px;

      @media (min-width: 992px) {
        margin-top: 0;
      }

      div {
        background: $dark-background;
        @include box-shadow-dark;
        @include box-border;

        img {
          width: 69px;
        }
      }
    }
  }
}
</style>
