<template>
  <div
    class="parallax-container"
    :style="{
      backgroundColor: `rgb(${pallete[0]}, ${pallete[1]}, ${pallete[2]})`
    }"
  >
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
        <parallax :speed-factor="0.5" breakpoint="(min-width:300px)">
          <img
            :data-src="heroImage"
            :data-srcSet="heroImageSizesSet"
            :data-loading="heroPlaceholder"
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
    return { showParallax: true, pallete: [39, 39, 39] };
  },
  props: {
    pageTitle: String
  },
  computed: {
    heroImage() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/hero-background.jpg`);
    },
    heroImageSizesSet() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/hero-background.jpg`).srcSet;
    },
    heroPlaceholder() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/hero-background.jpg`).placeholder;
    }
  },
  mounted() {
    const imageURL = require(`~/assets/img/${this.$route.name
      .split("-")[0]
      .replace(/\//gm, "")}/hero-background.jpg?lqip-colors`);

    const { getColorFromURL } = require("color-thief-node");

    (async () => {
      const dominantColor = await getColorFromURL(imageURL);
      this.pallete = dominantColor;
    })();

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
  position: relative;
  z-index: 1;

  height: $parallax-mobile-height;

  @media (min-width: 992px) {
    height: $parallax-desktop-height;
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

  .parallax-image {
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
