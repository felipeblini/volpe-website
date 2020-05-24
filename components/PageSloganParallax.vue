<template>
  <div v-if="showParallax" v-lazy-container="{ selector: 'img' }">
    <client-only>
      <parallax :fixed="true" :speed-factor="0.5">
        <img
          :style="{
            backgroundColor: require(`~/assets/img/${$route.name}/slogan-background.jpg?lqip-colors`)[0]
          }"
          :data-srcSet="imagesSizesSet.srcSet"
          :data-src="imagesSizesSet.src"
          :data-loading="
            require(`~/assets/img/${$route.name}/slogan-background.jpg?lqip`)
          "
        />
      </parallax>
    </client-only>
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
  computed: {
    imagesSizesSet() {
      return require(`~/assets/img/${this.$route.name}/slogan-background.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&sizes[]=1200&sizes[]=1500&sizes[]=1800&sizes[]=1920`);
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
.parallax-container {
  position: relative;
  z-index: 0;

  height: 439px;

  .parallax-slogan {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;

    p {
      font-size: 23px;
      color: $nav-link;
    }
  }
}
</style>
