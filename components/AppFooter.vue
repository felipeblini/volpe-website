<template>
  <div class="footer-wrapper content-theme --dark py-4">
    <b-container>
      <b-row>
        <b-col class="footer-logo">
          <nuxt-link to="/">Volpe Ambiental</nuxt-link>
          <p class="mt-1">
            Rua São Bento, 555<br />
            CEP 06186-140 | Osasco - SP
          </p>
          <p>(11) 3607-4071 | (11) 3607-2101</p>
        </b-col>

        <b-col class="footer-nav">
          <b-row>
            <b-col lg="4" class="nav-group-wrapper">
              <h4>
                <nuxt-link to="/quem-somos">Quem Somos</nuxt-link>
              </h4>
              <ul>
                <li>
                  <nuxt-link to="/quem-somos#sobre">Sobre Nós</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/quem-somos#missao">Nossa Missão</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/quem-somos#visao">Nossa Visão</nuxt-link>
                </li>
              </ul>
            </b-col>
            <b-col lg="4" class="nav-group-wrapper">
              <h4>
                <nuxt-link to="/servicos">Serviços</nuxt-link>
              </h4>
              <ul>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Conheça Nossos<br />Serviços
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Recebimento de Resíduos de Construção Civil
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Areia e agregados reciclados
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Coleta de resíduos
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Fabricação de artefatos de concreto
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Reforma e Construção
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/servicos#servico">
                    Demoliçao
                  </nuxt-link>
                </li>
              </ul>
            </b-col>
            <b-col lg="4" class="nav-group-wrapper">
              <h4>
                <nuxt-link to="/contatos">Contato</nuxt-link>
              </h4>
              <ul>
                <li>
                  <nuxt-link to="/contatos#servico">Onde Estamos</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contatos#servico">Fale Conosco</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contatos#servico">Localização</nuxt-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="justify-content-end my-4">
        <small>Copyright | {{ new Date().getFullYear() }}</small>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  color: $nav-link;

  .footer-logo {
    min-width: 180px;
    font-size: 11px;

    @media (min-width: 360px) {
      max-width: 200px;
    }

    @media (min-width: 414px) {
      font-size: 12px;
    }

    @media (min-width: 768px) {
      max-width: 300px;
      font-size: 14px;
    }

    @media (min-width: 992px) {
      max-width: 300px;
    }

    @media (min-width: 1200px) {
      max-width: 395px;
    }

    a {
      @include nav-brand-link(91px, 35px, 164px, 63px);
    }
  }

  .footer-nav {
    flex-grow: 1;

    .nav-group-wrapper {
      padding: 5px;

      @media (min-width: 500px) {
        padding: 10px;
      }

      h4 {
        a {
          display: block;
          color: inherit;
          text-transform: uppercase;
          font-size: 15px;

          @media (min-width: 400px) {
            font-size: 19px;
          }

          @media (max-width: 991px) {
            background: url("~assets/img/arrow-right.svg") no-repeat center
              right;
          }

          &:hover {
            text-decoration: none;
          }
        }
      }

      ul {
        padding: 0;
        display: none;

        @media (min-width: 992px) {
          display: block;
        }

        li {
          list-style: none;

          a {
            font-size: 14px;
            color: inherit;
            display: block;
            padding: 10px 0 0;
          }
        }
      }
    }
  }
}
</style>
