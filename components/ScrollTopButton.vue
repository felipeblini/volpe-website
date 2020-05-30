<template>
  <a href="#top" class="back-to-top-link" onclick="scrollToTop();return false">
    Voltar para o topo
  </a>
</template>

<style lang="scss" scoped>
a.back-to-top-link {
  outline: none;
  width: 50px;
  transform: rotate(-90deg);
  background: url("~assets/img/circle-arrow.svg") no-repeat center right;
  text-indent: -9999px;
  overflow: hidden;
  display: block;
}
</style>
