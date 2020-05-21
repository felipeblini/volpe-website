<template>
  <div
    class="parallax-container"
    :style="{
      backgroundColor: require(`~/assets/img/${$route.name}/hero-background.jpg?lqip-colors`)[0]
    }"
  >
    <div class="container parallax-title" :class="$route.name">
      <h1>{{ pageTitle }}</h1>
    </div>

    <div
      class="parallax-image"
      v-if="showParallax"
      v-lazy-container="{ selector: 'img' }"
    >
      <client-only>
        <parallax :speed-factor="0.5" breakpoint="(min-width: 80px)">
          <img
            :data-srcSet="imagesSizesSet.srcSet"
            :data-src="imagesSizesSet.src"
            :data-loading="
              require(`~/assets/img/${$route.name}/hero-background.jpg?lqip`)
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
      return require(`~/assets/img/${this.$route.name}/hero-background.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&sizes[]=1200&sizes[]=1500&sizes[]=1800&sizes[]=1920`);
    }
  },
  mounted() {
    window.onresize = () => {
      this.showParallax = false;

      setTimeout(() => {
        this.showParallax = true;
      }, 100);
    };
  }
};
</script>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
  z-index: 1;

  height: 70vh;

  @media (min-width: 768px) {
    height: 100vh;
  }

  .parallax-title {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 70vh;

    @media (min-width: 768px) {
      height: 100vh;
    }

    h1 {
      color: $yellow-1;
      font-size: 153px;
      font-weight: 900;
    }

    &.quem-somos {
      h1 {
        font-size: 123px;
      }
    }

    &.index {
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
