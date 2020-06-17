<template>
  <div
    class="logo-wrapper"
    v-if="showResponsiveHighlightLogo"
    v-lazy-container="{ selector: 'img' }"
  >
    <b-container>
      <img
        :data-src="footerLogoImg"
        :data-srcSet="footerLogoImgSizesSet"
        :data-loading="footerLogoImgPlaceholder"
      />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showResponsiveHighlightLogo: true
    };
  },
  computed: {
    footerLogoImg() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/highlight-logo.jpg`);
    },
    footerLogoImgSizesSet() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/highlight-logo.jpg`).srcSet;
    },
    footerLogoImgPlaceholder() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/highlight-logo.jpg`).placeholder;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.showResponsiveHighlightLogo = false;

      setTimeout(() => {
        this.showResponsiveHighlightLogo = true;
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
