<template>
  <div>
    <PageHero pageName="quemsomos" pageTitle="Quem Somos" />

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
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";

export default {
  components: { PageHero },
  create() {
    this.$store.commit("setMenu", "home");
  }
};
</script>
