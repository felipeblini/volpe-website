<template>
  <div>
    <PageHero pageTitle="Serviços" />

    <div
      id="sobre"
      class="page-main-content --servicos content-theme --dark py-5"
    >
      <b-container>
        <b-row class="mt-5 align-items-center">
          <b-col lg="6">
            <p class="text-left --bigger">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum s.
            </p>
          </b-col>

          <b-col
            lg="6"
            class="img-responsive-wrapper text-center"
            v-lazy-container="{ selector: 'img' }"
          >
            <img
              v-if="showResponsiveImg"
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
          <li class="col" id="recebimento-de-resíduos-de-construção-civil">
            <div class="p-4">
              <img
                class="service-icon"
                src="~assets/img/servicos/residuos.svg"
                alt="Recebimento de Resíduos de Construção Civil"
              />
              <h3>Recebimento de resíduos de construção civil</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>

              <footer class="d-flex justify-content-end">
                <a href="#">
                  <img src="~assets/img/servicos/popup-open-icon.svg" />
                </a>
              </footer>
            </div>
          </li>

          <div class="w-100 d-md-none"></div>

          <li class="col" id="areia-e-agregados-reciclados">
            <div class="p-4">
              <img
                class="service-icon"
                src="~/assets/img/servicos/sand.svg"
                alt="Areia e agregados reciclados"
              />
              <h3>Areia e agregados reciclados</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>

              <footer class="d-flex justify-content-end">
                <a href="#">
                  <img src="~assets/img/servicos/popup-open-icon.svg" />
                </a>
              </footer>
            </div>
          </li>

          <div class="w-100 d-md-none"></div>
          <div class="w-100 d-none d-md-block d-lg-none"></div>

          <li class="col" id="coleta-de-resíduos">
            <div class="p-4">
              <img
                class="service-icon"
                src="~/assets/img/servicos/cacamba.svg"
                alt="Coleta de resíduos"
              />
              <h3>Coleta de resíduos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>

              <footer class="d-flex justify-content-end">
                <a href="#">
                  <img src="~assets/img/servicos/popup-open-icon.svg" />
                </a>
              </footer>
            </div>
          </li>

          <div class="w-100 d-md-none"></div>
          <div class="w-100 d-none d-lg-block"></div>

          <li class="col" id="fabricacao-de-artefatos-de-concreto">
            <div class="p-4">
              <img
                class="service-icon"
                src="~assets/img/servicos/factoring.svg"
                alt="Fabricação de artefatos de concreto"
              />
              <h3>Fabricação de artefatos de concreto</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>

              <footer class="d-flex justify-content-end">
                <a href="#">
                  <img src="~assets/img/servicos/popup-open-icon.svg" />
                </a>
              </footer>
            </div>
          </li>

          <div class="w-100 d-md-none"></div>
          <div class="w-100 d-none d-md-block d-lg-none"></div>

          <li class="col" id="reforma-e-construcao">
            <div class="p-4">
              <img
                class="service-icon"
                src="~/assets/img/servicos/construction.svg"
                alt="Reforma e Construção"
              />
              <h3>Reforma e Construção</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis.
              </p>

              <footer class="d-flex justify-content-end">
                <a href="#">
                  <img src="~assets/img/servicos/popup-open-icon.svg" />
                </a>
              </footer>
            </div>
          </li>

          <div class="w-100 d-md-none"></div>

          <li class="col" id="demolicao">
            <div class="p-4">
              <img
                class="service-icon"
                src="~/assets/img/servicos/demolition.svg"
                alt="Demoliçao"
              />
              <h3>Demoliçao</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>

              <footer class="d-flex justify-content-end">
                <a href="#">
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
        <h4>Frase sobre a empresa</h4>
      </div>

      <PageSloganParallax />

      <div class="page-footer-content content-theme --light pt-3">
        <PageFooterContentLogo />

        <div class="page-footer-highlight-content pb-5">
          <b-container class="mt-4">
            <icon class="page-footer-icon">
              <img src="~/assets/img/servicos/shield.svg" alt="" />
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
      return require(`~/assets/img/servicos/britador.png?resize&sizes[]=450&sizes[]=612`);
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

      display: flex;
      margin: 18px;
      list-style: none;

      & > div {
        display: flex;
        flex-direction: column;

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
