<template>
  <div class="logo-wrapper" v-if="showResponsiveHighlightLogo">
    <b-container>
      <img
        :srcSet="footerLogoImgSizesSet.srcSet"
        :src="footerLogoImgSizesSet.src"
        alt=""
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
    footerLogoImgSizesSet() {
      return require(`~/assets/img/${this.$route.name}/highlight-logo.jpg?resize&sizes[]=450&sizes[]=680&sizes[]=900&sizes[]=1306`);
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
