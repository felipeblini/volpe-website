<template>
  <div>
    <div class="page-hero --home">
      <h1>Volpe Ambiental</h1>
    </div>
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        exercitationem quidem error, beatae, incidunt doloribus quaerat
        veritatis amet magnam autem cumque nisi quas? Tempore praesentium quas
        nihil id temporibus inventore?
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
h1 {
  text-indent: -9999px;
  overflow: hidden;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("~assets/volpe_logotipo.png");

  max-width: 879px;

  width: 90%;
  height: 186px;

  @media (min-width: 576px) {
    width: 80%;
    height: 225px;
  }

  @media (min-width: 768px) {
    width: 70%;
    height: 325px;
  }

  @media (min-width: 1200px) {
    width: 53%;
  }
}
</style>
