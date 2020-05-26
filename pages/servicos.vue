<template>
  <div>
    <PageHero pageTitle="Serviços" />

    <div class="page-content-theme --dark">
      <div class="container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ab non
          est repellat. Ab ipsum numquam placeat vel cupiditate eum quo.
          Adipisci, impedit. Facere culpa in a officia nobis? Possimus.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ab non
          est repellat. Ab ipsum numquam placeat vel cupiditate eum quo.
          Adipisci, impedit. Facere culpa in a officia nobis? Possimus.
        </p>
      </div>
      <div class="secondary-content --yellow">
        <div class="container">
          <h3>Faça seu orçamento com a Volpe, conheça nossas soluções</h3>
          <nuxt-link class="btn mt-4" to="/contatos" title="Fale Conosco">
            Fale conosco!
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>Frase com foco na qualidade</h4>
      </div>

      <PageSloganParallax />

      <div class="page-footer-content --light py-4">
        <div class="container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            asperiores facere voluptatibus? Labore repellat corrupti ducimus
            quos quasi distinctio aperiam, ea tempora! Ea tempora possimus
            dolorem sunt eos laudantium maxime.
          </p>
        </div>

        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";
import PageSloganParallax from "~/components/PageSloganParallax";
import AppFooter from "~/components/AppFooter";

export default {
  components: { PageHero, PageSloganParallax, AppFooter }
};
</script>

<style lang="scss" scoped>
.secondary-content {
  .container {
    padding: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 40px;
      line-height: 40px;
      font-weight: 900;
      text-align: center;
      padding: 0 90px;
    }

    a.btn {
      border: solid 1px;
      padding: 10px 60px;
      font-weight: 900;
      border-radius: 40px;
      font-size: 25px;
    }
  }
}
</style>
