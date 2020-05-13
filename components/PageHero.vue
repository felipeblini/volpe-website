<template>
  <div
    class="parallax-container"
    :style="{
      backgroundColor: require(`~/assets/img/${pageName}_background.jpg?lqip-colors`)[0]
    }"
  >
    <div class="parallax-title" :class="pageName">
      <h1>{{ pageTitle }}</h1>
    </div>

    <div v-if="showParallax" v-lazy-container="{ selector: 'img' }">
      <client-only>
        <parallax no-ssr :speed-factor="0.5" breakpoint="(min-width: 80px)">
          <img
            :data-srcSet="imagesSizesSet.srcSet"
            :data-src="imagesSizesSet.src"
            :data-loading="
              require(`~/assets/img/${pageName}_background.jpg?lqip`)
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
    pageName: String,
    pageTitle: String
  },
  computed: {
    imagesSizesSet() {
      return require(`~/assets/img/${this.pageName}_background.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&sizes[]=1200&sizes[]=1500&sizes[]=1800&sizes[]=1920`);
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
  top: -112px;
  z-index: 0;

  height: 70vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
}
.parallax-title {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;

  @media (min-width: 768px) {
    height: 100vh;
  }

  h1 {
    color: #f39e27;
  }

  &.home {
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
</style>
