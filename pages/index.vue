<template>
  <div>
    <div class="parallax-container">
      <div class="parallax-title">
        <h1>Volpe Ambiental</h1>
      </div>
      <parallax :speed-factor="0.5" breakpoint="(min-width: 280px)">
        <img :srcSet="multipleSizes.srcSet" :src="multipleSizes.src" />
      </parallax>
    </div>

    <div class="container mt-5">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
    </div>

    <!-- <div
      class="page-hero --home"
      :style="{
        backgroundImage: `url(${require('~/assets/bkg-home.jpg?sqip')})`,
        backgroundRepeat: 'no-repeat'
      }"
    >
      <h1>Volpe Ambiental</h1>
    </div>-->
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
const multipleSizes = require("~/assets/bkg-home.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&&sizes[]=1920");

export default {
  components: {
    Parallax
  },
  data() {
    return { multipleSizes };
  },
  create() {
    this.$store.commit("setMenu", "home");
  }
};
</script>

<style lang="scss">
.parallax-container {
  position: relative;
  top: -112px;
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
    text-indent: -9999px;
    overflow: hidden;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("~assets/volpe_logotipo.png");

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
</style>
