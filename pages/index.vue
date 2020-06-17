<template>
  <div>
    <PageHero pageTitle="Home" />

    <div class="page-main-content --index content-theme --dark py-5">
      <b-container>
        <b-row>
          <b-col class="content-center">
            <p class="text-center highlight-text">
              {{ firstTextBlock }}
            </p>
          </b-col>
        </b-row>
        <b-row class="img-responsive-wrapper">
          <b-col class="content-center" v-lazy-container="{ selector: 'img' }">
            <img
              v-if="state.showResponsiveImg"
              :data-srcSet="require('~/assets/img/index/cacamba.png').srcSet"
              :data-src="require('~/assets/img/index/cacamba.png')"
              :data-loading="
                require('~/assets/img/index/cacamba.png').placeholder
              "
            />
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col class="text-center">
            <h2 class="--bold">Nossa Atuação</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="content-center">
            <p class="text-center">
              {{ secondTextBlock }}
            </p>
          </b-col>
        </b-row>

        <ul class="row content-list my-5 justify-content-center">
          <li class="col-lg-4">
            <div class="p-4" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="require('~/assets/img/index/atividade-1.svg')"
                :alt="activity1"
              />
              <h3 class="--bold mt-3">{{ activity1 }}</h3>
            </div>
          </li>
          <li class="col-lg-4">
            <div class="p-4" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="require('~/assets/img/index/atividade-2.svg')"
                :alt="activity2"
              />
              <h3 class="--bold mt-3">{{ activity2 }}</h3>
            </div>
          </li>
          <li class="col-lg-4">
            <div class="p-4" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="require('~/assets/img/index/atividade-2.svg')"
                :alt="activity3"
              />
              <h3 class="--bold mt-3">{{ activity3 }}</h3>
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

        <div class="page-footer-highlight-content">
          <b-container class="mt-4">
            <div class="page-footer-icon">
              <img src="~/assets/img/index/footer-icon.svg" alt="" />
            </div>
            <p v-html="footerTextBlock"></p>
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
      const params = { slug: "home" };
      const { data } = await $axios.get("", { params });

      const splitRendered = data[0].content.rendered.split(/\n\n\n\n/);
      const pageSEO = data[0].acf;

      return {
        firstTextBlock: splitRendered[0],
        secondTextBlock: splitRendered[1],
        activity1: splitRendered[2],
        activity2: splitRendered[3],
        activity3: splitRendered[4],
        pageSlogan: splitRendered[5],
        footerTextBlock: splitRendered[6],
        buttonText: splitRendered[7].split("buttonText:")[1].trim(),
        buttonLink: splitRendered[8].split("buttonLink:")[1].trim(),
        pageTitle: pageSEO.page_title,
        pageDescription: pageSEO.page_description
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
      secondTextBlock: "",
      activity1: "",
      activity2: "",
      activity3: "",
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
