<template>
  <div
    class="parallax-container"
    :style="{
      backgroundColor: require(`~/assets/img/${$route.name
        .split('-')[0]
        .replace(/\//gm, '')}/hero-background.jpg?lqip-colors`)[0]
    }"
  >
    <div
      class="container parallax-title"
      :class="`--${$route.name.split('-')[0].replace(/\//gm, '')}`"
    >
      <h1>{{ pageTitle }}</h1>
    </div>

    <div
      class="parallax-image"
      v-if="showParallax"
      v-lazy-container="{ selector: 'img' }"
    >
      <client-only>
        <parallax :speed-factor="0.5">
          <img
            :data-srcSet="imagesSizesSet.srcSet"
            :data-src="imagesSizesSet.src"
            :data-loading="
              require(`~/assets/img/${$route.name
                .split('-')[0]
                .replace(/\//gm, '')}/hero-background.jpg?lqip`)
            "
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
    return { showParallax: true };
  },
  props: {
    pageTitle: String
  },
  computed: {
    imagesSizesSet() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(
          /\//gm,
          ""
        )}/hero-background.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&sizes[]=1200&sizes[]=1500&sizes[]=1800&sizes[]=1920`);
    }
  },
  mounted() {
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

  @media (min-width: 768px) {
    height: $parallax-desktop-height;
  }

  .parallax-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $parallax-mobile-height;

    @media (min-width: 768px) {
      justify-content: flex-end;
      height: $parallax-desktop-height;
    }

    h1 {
      color: $dark-title;
      font-size: 16vw;

      @media (min-width: 992px) {
        font-size: 153px;
      }

      font-weight: 900;
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
        text-indent: -9999px;
        overflow: hidden;

        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("~assets/img/volpe_logotipo.png");

        max-width: 879px;

        width: 80%;
        height: 225px;

        @media (min-width: 768px) {
          width: 70%;
          height: 325px;
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
