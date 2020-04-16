<template>
  <div>
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#">Volpe Ambiental</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <a href="/" class="nav-link active" target="_self">Home</a>
              <hr />
            </li>
            <li class="nav-item">
              <a href="/quem-somos" class="nav-link" target="_self">
                Quem Somos
              </a>
              <hr />
            </li>
            <li class="nav-item">
              <a href="/servicos" class="nav-link" target="_self">Serviços</a>
              <hr />
            </li>
            <li class="nav-item">
              <a href="/contato" class="nav-link" target="_self">Contato</a>
              <hr />
            </li>
            <!-- <b-nav-item href="#" class="three"></b-nav-item>
            <b-nav-item href="#" class="four"></b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}

.navbar {
  padding: 36px;
  max-height: 112px;

  @media (min-width: 992px) {
    padding-top: 76px;
  }

  a.navbar-brand {
    display: block;
    text-indent: -9999px;
    overflow: hidden;
    width: 220px;
    height: 89px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("~assets/volpe_logotipo.png");
    filter: grayscale(100%);
  }

  ul.navbar-nav {
    &:hover {
      a.active ~ hr {
        width: 0 !important;
      }
    }

    .nav-item {
      overflow: hidden;
      margin-left: 18px;

      a.nav-link {
        font-size: 22px;
        text-transform: uppercase;
        color: #fff !important;

        &:hover ~ hr,
        &.active ~ hr {
          width: 100%;
        }

        &.active:hover ~ hr {
          width: 100% !important;
        }
      }

      hr {
        height: 0.25rem;
        width: 0;
        margin: 0;
        background: white;
        border: none;
        transition: 0.3s ease-in-out;
      }
    }
  }
}

.navbar-collapse.collapse {
  .nav-item {
    width: fit-content;
    margin-top: 20px;
  }
}

.page-hero {
  margin-top: -112px;
  background: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.--home {
    background-image: url("~assets/bkg-home.jpg");
  }
}
</style>
