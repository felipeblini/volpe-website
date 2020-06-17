<template>
  <div v-if="showParallax" class="parallax-container">
    <client-only>
      <parallax :fixed="true" :speed-factor="0.5">
        <img
          class="lazyload"
          :style="{
            backgroundColor: require(`~/assets/img/${$route.name
              .split('-')[0]
              .replace(/\//gm, '')}/slogan-background.jpg?lqip-colors`)[0]
          }"
          :data-srcSet="imagesSizesSet.srcSet"
          :data-src="imagesSizesSet.src"
          :data-loading="
            require(`~/assets/img/${$route.name
              .split('-')[0]
              .replace(/\//gm, '')}/slogan-background.jpg?lqip`)
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
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(
          /\//gm,
          ""
        )}/slogan-background.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&sizes[]=1200&sizes[]=1500&sizes[]=1800&sizes[]=1920`);
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
  position: absolute;
}
</style>
