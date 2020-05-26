<template>
  <div id="top">
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <nuxt-link to="/" class="navbar-brand" target="_self">
          Volpe Ambiental
        </nuxt-link>

        <b-navbar-toggle target="nav-collapse">
          <template v-slot>
            <img width="35px" src="~assets/img/nav-toggler.svg" alt="" />
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" target="_self">
                Home
              </nuxt-link>
              <hr />
            </li>
            <li class="nav-item">
              <nuxt-link to="/quem-somos" class="nav-link" target="_self">
                Quem Somos
              </nuxt-link>
              <hr />
            </li>
            <li class="nav-item">
              <nuxt-link to="/servicos" class="nav-link" target="_self">
                Serviços
              </nuxt-link>
              <hr />
            </li>
            <li class="nav-item">
              <nuxt-link to="/contatos" class="nav-link" target="_self">
                Contato</nuxt-link
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
  position: absolute;
  right: 0;
  left: 0;
  z-index: 9;
}

.navbar {
  padding: 36px;
  max-height: 112px;

  @media (min-width: 992px) {
    padding-top: 76px;
  }

  a.navbar-brand {
    @include nav-brand-link(91px, 35px, 220px, 85px);
    filter: grayscale(100%);
    @media (min-width: 768px) {
      margin-top: 40px;
    }
  }

  ul.navbar-nav {
    &:hover {
      a.nuxt-link-exact-active ~ hr {
        width: 0 !important;
      }
    }

    .nav-item {
      overflow: hidden;
      margin-left: 18px;

      a.nav-link {
        font-size: 22px;
        text-transform: uppercase;
        color: $nav-link !important;

        &:hover ~ hr,
        &.nuxt-link-exact-active ~ hr {
          width: 100%;
        }

        &.nuxt-link-exact-active:hover ~ hr {
          width: 100% !important;
        }
      }

      hr {
        height: 0.25rem;
        width: 0;
        margin: 0;
        background: $nav-link-underline;
        border: none;
        transition: 0.3s ease-in-out;
      }
    }
  }
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-collapse.collapse {
  @media (max-width: 991px) {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
  }

  .nav-item {
    width: fit-content;
    margin-top: 20px;
  }
}
</style>
