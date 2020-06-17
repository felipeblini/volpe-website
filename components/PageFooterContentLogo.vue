<template>
  <div class="logo-wrapper" v-if="showResponsiveHighlightLogo">
    <b-container>
      <img :src="footerLogoImgSizesSet" class="lazyload" alt="" />
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
    footerLogoImgSizesSet() {
      return require(`~/assets/img/${this.$route.name
        .split("-")[0]
        .replace(/\//gm, "")}/highlight-logo.jpg`);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.showResponsiveHighlightLogo = false;

      setTimeout(() => {
        this.showResponsiveFooterLogo = true;
      }, 100);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
