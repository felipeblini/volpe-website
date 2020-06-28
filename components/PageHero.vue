<template>
  <div class="parallax-container">
    <div
      class="container parallax-title"
      :class="`--${$route.name.split('-')[0].replace(/\//gm, '')}`"
    >
      <h1>
        <span>{{ pageTitle }}</span>
        <img
          :srcSet="require('~/assets/img/volpe_logotipo.png').srcSet"
          :v-lazy="require('~/assets/img/volpe_logotipo.png')"
          :loading="require('~/assets/img/volpe_logotipo.png').placeholder"
          alt=""
        />
      </h1>
    </div>

    <div
      class="parallax-image"
      v-if="showParallax"
      v-lazy-container="{ selector: 'img' }"
    >
      <client-only>
        <parallax v-if="webpSupport" :speed-factor="0.5">
          <img
            :data-src="heroImgWebp"
            :data-loading="heroImage.placeholder"
            alt="Volpe Ambiental - Hero Image"
            type="image/webp"
          />
        </parallax>
        <parallax v-else :speed-factor="0.5">
          <img
            :data-src="heroImage.src"
            :data-srcSet="heroImage.srcSet"
            :data-loading="heroImage.placeholder"
            alt="Volpe Ambiental - Hero Image"
          />
        </parallax>
      </client-only>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
  components: {
    Parallax
  },
  data() {
    return { showParallax: true, webpSupport: false };
  },
  props: {
    pageTitle: String
  },
  computed: {
    heroImgWebp() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/hero-background.webp`);
    },
    heroImage() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(
          /\//gm,
          ""
        )}/hero-background.jpg?sizes[]=400&sizes[]=800&sizes[]=1200&sizes[]=1917`);
    }
  },
  mounted() {
    const windowSize = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    const mockCanvas = document.createElement("canvas");
    if (!!(mockCanvas.getContext && mockCanvas.getContext("2d"))) {
      // was able or not to get WebP representation
      if (
        mockCanvas.toDataURL("image/webp").indexOf("data:image/webp") == 0 &&
        windowSize >= 1200
      ) {
        this.webpSupport = true;
      }
    }

    window.addEventListener("resize", () => {
      this.showParallax = false;

      setTimeout(() => {
        this.showParallax = true;
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
$parallax-desktop-height: 100vh;
$parallax-mobile-height: 70vh;

.parallax-container {
  background-color: #2a2b2c;
  position: relative;
  z-index: 1;

  height: $parallax-mobile-height;

  @media (min-width: 768px) {
    height: $parallax-desktop-height;
  }

  .parallax-image {
    position: absolute;
    top: 0;
    width: 100%;

    & > .Masthead {
      &::before {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  .parallax-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $parallax-mobile-height;

    @media (orientation: landscape) and (max-width: 828px) {
      padding-top: 100px;
    }

    @media (min-width: 768px) {
      justify-content: flex-end;
      height: $parallax-desktop-height;
    }

    h1 {
      color: $dark-title;
      font-size: 16vw;
      font-weight: 900;

      @media (min-width: 992px) {
        font-size: 153px;
      }

      img {
        display: none;
      }
    }

    &.--quemsomos {
      h1 {
        font-size: 10vw;

        @media (min-width: 992px) {
          font-size: 123px;
        }
      }
    }

    &.--index {
      justify-content: center;

      h1 {
        display: flex;

        max-width: 879px;

        width: 80%;
        height: 225px;

        align-items: flex-end;

        img {
          display: block;
          width: 100%;
        }

        span {
          display: none;
        }

        @media (min-width: 768px) {
          width: 60%;
          height: 225px;
        }

        @media (min-width: 1200px) {
          width: 53%;
        }
      }
    }
  }
}
</style>
