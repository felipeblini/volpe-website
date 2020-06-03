<template>
  <div>
    <PageHero pageTitle="Contatos" />

    <div class="page-main-content --contatos content-theme --dark py-5">
      <b-container>
        <b-row>
          <b-col cols="4" class="unity-pin">
            <div class="pin-icon"></div>
          </b-col>

          <b-col>
            <div class="unity-box">
              <h2 class="--bold">Nome da Unidade</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>00 0000-0000</p>
            </div>
          </b-col>
        </b-row>
        <b-row
          class="img-responsive-wrapper mt-5"
          v-lazy-container="{ selector: 'img' }"
        >
          <b-col class="content-center">
            <img
              v-if="showResponsiveImg"
              :data-srcSet="contentImgSizesSet.srcSet"
              :data-src="contentImgSizesSet.src"
              :data-loading="require(`~/assets/img/contatos/truck.png?lqip`)"
              alt=""
            />
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col>
            <b-alert v-model="resultDone" :variant="resultStatus" dismissible>
              <span v-html="resultMessage"></span>
            </b-alert>
          </b-col>
        </b-row>

        <b-row class="mt-5 flex-row-reverse">
          <b-col cols="2" class="justify-content-end">
            Logo
          </b-col>
          <b-col>
            <h1 class="--smaller --bold">Fale com a Volpe</h1>

            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-name"
                label="Nome:"
                label-for="input-name"
              >
                <b-form-input
                  id="input-name"
                  ref="name"
                  v-model="form.name"
                  required
                  placeholder="Nome"
                  oninvalid="this.setCustomValidity('Por favor informe seu nome')"
                  oninput="setCustomValidity('')"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-phone"
                label="Telefone:"
                label-for="input-phone"
              >
                <b-form-input
                  id="input-phone"
                  ref="phone"
                  v-model="form.phone"
                  required
                  placeholder="Telefone"
                  oninvalid="this.setCustomValidity('Por favor informe seu telefone')"
                  oninput="setCustomValidity('')"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-email"
                label="Email:"
                label-for="input-email"
              >
                <b-form-input
                  id="input-email"
                  ref="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="E-mail"
                  oninvalid="this.setCustomValidity('Por favor informe seu email')"
                  oninput="setCustomValidity('')"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-msg"
                label="Mensagem:"
                label-for="input-msg"
              >
                <b-form-textarea
                  id="input-msg"
                  ref="msg"
                  v-model="form.msg"
                  required
                  placeholder="Mensagem"
                  rows="3"
                  max-rows="6"
                  oninvalid="this.setCustomValidity('Por favor escreva uma mensagem')"
                  oninput="setCustomValidity('')"
                ></b-form-textarea>
              </b-form-group>

              <b-button
                :disabled="!isFormValid()"
                type="submit"
                variant="primary"
              >
                {{ sendingEmail ? "Enviando, aguarde..." : "Enviar" }}
              </b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="gmap-wrapper">
      <!-- google map embeded here -->
    </div>

    <AppFooter />
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";
import ScrollTopButton from "~/components/ScrollTopButton";
import AppFooter from "~/components/AppFooter";

export default {
  components: { PageHero, ScrollTopButton, AppFooter },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        msg: ""
      },
      sendingEmail: false,
      resultDone: false,
      resultStatus: "",
      resultMessage: "",
      showResponsiveImg: true
    };
  },
  computed: {
    contentImgSizesSet() {
      return require(`~/assets/img/contatos/truck.png?resize&sizes[]=450&sizes[]=680&sizes[]=876`);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.showResponsiveImg = false;

      setTimeout(() => {
        this.showResponsiveImg = true;
      }, 100);
    });
  },
  methods: {
    isFormValid() {
      if (this.sendingEmail) return false;
      if (!Object.keys(this.$refs).length) return false;

      for (const prop in this.$refs) {
        if (!this.$refs[prop].validity.valid) return false;
      }

      return true;
    },

    onSubmit(evt) {
      evt.preventDefault();

      this.sendingEmail = true;
      this.$nuxt.$loading.start();

      this.$axios.post("/api/contact", { ...this.form }).then(res => {
        this.resultMessage =
          res.status === 200
            ? "<b>Mensagem enviada com sucesso!</b><br /><small>Logo entraremos em contato. Obrigado</small>"
            : `<b>Algo deu errado :(</b><small><br>Por favor, entre em contato conosco pelo telefone <b>${this.$store.state.phoneNumber}</b></small><br><small>Ou tente novamente</small>`;

        this.resultStatus = res.status === 200 ? "success" : "warning";

        if (res.status === 200) {
          this.form.name = "";
          this.form.phone = "";
          this.form.email = "";
          this.form.msg = "";
        }

        this.sendingEmail = false;
        this.resultDone = true;
        this.$nuxt.$loading.finish();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.unity-pin {
  display: flex;
  align-items: center;

  .pin-icon {
    height: 117px;
    width: 100%;
    background: url("~assets/img/contatos/pin.png") no-repeat right center;
    background-size: contain;
  }
}
.unity-box {
  background: $light-background;
  padding: 40px;
  max-width: 75%;
  border-radius: 27px;

  h2 {
    font-size: 34px;
  }

  p {
    color: $light-paragraph;
    margin: 0;
    line-height: 27px;

    &:nth-last-child(1) {
      margin-top: 10px;
      font-weight: bold;
    }
  }
}

.img-responsive-wrapper {
  min-height: 162px;

  @media (min-width: 420) {
    min-height: 170px;
  }

  @media (min-width: 650) {
    min-height: 263px;
  }

  @media (min-width: 800) {
    min-height: 304px;
  }

  img {
    width: 100%;
    max-width: 750px;
    padding: 0 20px;

    &[lazy="loading"] {
      filter: blur(2rem);
    }
  }
}

.gmap-wrapper {
  border: solid;
  height: 250px;
}
</style>
