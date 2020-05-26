<template>
  <div>
    <PageHero pageTitle="Quem Somos" />

    <div class="page-content-theme --light py-4">
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
    </div>

    <div class="page-footer-wrapper">
      <div class="page-slogan px-4">
        <h4>Frase sobre a empresa</h4>
      </div>

      <PageSloganParallax />

      <div class="page-footer-content --dark py-4">
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
