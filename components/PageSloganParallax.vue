<template>
  <div
    v-if="showParallax"
    class="parallax-container"
    v-lazy-container="{ selector: 'img' }"
  >
    <client-only>
      <parallax :fixed="true" :speed-factor="0.5">
        <img
          :data-src="sloganImage"
          :data-srcSet="sloganImageSizesSet"
          :data-loading="sloganPlaceholder"
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
    sloganImage() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/slogan-background.jpg`);
    },
    sloganImageSizesSet() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/slogan-background.jpg`).srcSet;
    },
    sloganPlaceholder() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/slogan-background.jpg`).placeholder;
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
