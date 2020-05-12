<template>
  <div>
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="/">Volpe Ambiental</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <a
                href="/"
                class="nav-link"
                :class="{ active: $store.state.active === 'home' }"
                target="_self"
                >Home</a
              >
              <hr />
            </li>
            <li class="nav-item">
              <a
                href="/quem-somos"
                class="nav-link"
                :class="{ active: $store.state.active === 'about-us' }"
                target="_self"
              >
                Quem Somos
              </a>
              <hr />
            </li>
            <li class="nav-item">
              <a
                href="/servicos"
                class="nav-link"
                :class="{ active: $store.state.active === 'services' }"
                target="_self"
                >Serviços</a
              >
              <hr />
            </li>
            <li class="nav-item">
              <a
                href="/contatos"
                :class="{ active: $store.state.active === 'contacts' }"
                class="nav-link"
                target="_self"
                >Contato</a
              >
              <hr />
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 9;
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
</style>
