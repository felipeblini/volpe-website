<template>
  <div>
    <PageHero pageTitle="Home" />

    <div class="page-main-content page-content-theme --dark py-5">
      <div class="container">
        <div class="row">
          <p class="highlight-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          class="row img-responsive-wrapper mt-5"
          v-if="showResponsiveImg"
          v-lazy-container="{ selector: 'img' }"
        >
          <img
            :data-srcSet="contentImgSizesSet.srcSet"
            :data-src="contentImgSizesSet.src"
            :data-loading="require(`~/assets/img/index/cacamba.png?lqip`)"
            alt=""
          />
        </div>
        <div class="row">
          <h2>Nossa Atuação</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
        <ul class="row mt-5 mb-5">
          <li class="col-lg-4">
            <div class="p-4">
              <img src="~/assets/img/index/atividade-1.svg" alt="" />
              <h3 class="mt-3">Atividades Ambientais</h3>
            </div>
          </li>
          <li class="col-lg-4">
            <div class="p-4">
              <img src="~/assets/img/index/atividade-2.svg" alt="" />
              <h3 class="mt-3">Atividades Comerciais</h3>
            </div>
          </li>
          <li class="col-lg-4">
            <div class="p-4">
              <img src="~/assets/img/index/atividade-3.svg" alt="" />
              <h3 class="mt-3">Atividades Socioambientais</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="page-slogan px-4">
      <h4>Frase com slogan ambiental</h4>
    </div>

    <div class="page-slogan-parallax">
      <PageSloganParallax />

      <div class="page-footer-content page-content-theme --light py-4">
        <div class="container">
          <div
            class="row page-footer-logo-wrapper"
            v-if="showResponsiveFooterLogo"
            v-lazy-container="{ selector: 'img' }"
          >
            <img
              :data-srcSet="footerLogoImgSizesSet.srcSet"
              :data-src="footerLogoImgSizesSet.src"
              :data-loading="require(`~/assets/img/index/footer-logo.jpg?lqip`)"
              alt=""
            />
          </div>
          <div class="row page-footer-content-wrapper">
            <img src="~/assets/img/index/footer-icon.svg" alt="" />
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt asperiores facere voluptatibus? Labore repellat
                corrupti ducimus quos quasi distinctio aperiam, ea tempora! Ea
                tempora possimus dolorem sunt eos laudantium maxime.
              </p>
              <nuxt-link to="/servicos">Saiba Mais</nuxt-link>
            </div>
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";
import PageSloganParallax from "~/components/PageSloganParallax";
import AppFooter from "~/components/AppFooter";

export default {
  components: { PageHero, PageSloganParallax, AppFooter },
  data() {
    return {
      showResponsiveImg: true,
      showResponsiveFooterLogo: true
    };
  },
  computed: {
    contentImgSizesSet() {
      return require(`~/assets/img/index/cacamba.png?resize&sizes[]=450&sizes[]=680&sizes[]=825`);
    },
    footerLogoImgSizesSet() {
      return require(`~/assets/img/index/footer-logo.jpg?resize&sizes[]=450&sizes[]=680&sizes[]=900&sizes[]=1306`);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.showResponsiveImg = false;
      this.showResponsiveFooterLogo = false;

      setTimeout(() => {
        this.showResponsiveImg = true;
        this.showResponsiveFooterLogo = true;
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
.img-responsive-wrapper {
  min-height: 200px;

  img {
    width: 100%;
    max-width: 825px;
    padding: 0 20px;

    &[lazy="loading"] {
      filter: blur(2rem);
    }
  }
}

ul {
  padding: 0;

  li {
    list-style: none;
    text-align: center;
    margin-top: 70px;
    max-width: 346px;

    &:nth-child(1) {
      margin-top: 0;
    }

    @media (min-width: 992px) {
      margin-top: 0;
    }

    div {
      border-radius: 50px;
      -webkit-box-shadow: 10px 10px 39px 16px rgba(26, 26, 26, 1);
      -moz-box-shadow: 10px 10px 39px 16px rgba(26, 26, 26, 1);
      box-shadow: 10px 10px 39px 16px rgba(26, 26, 26, 1);

      img {
        width: 69px;
      }
    }
  }
}

.page-footer-logo-wrapper {
  img {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
