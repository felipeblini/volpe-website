<template>
  <div>
    <PageHero pageTitle="Contatos" />

    <div class="page-main-content --dark py-4">
      <div class="container">
        <b-alert v-model="resultDone" :variant="resultStatus" dismissible>
          <span v-html="resultMessage"></span>
        </b-alert>

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

          <b-button :disabled="!isFormValid()" type="submit" variant="primary">
            {{ sendingEmail ? "Enviando, aguarde..." : "Enviar" }}
          </b-button>
        </b-form>
      </div>
    </div>

    <div class="gmap-wrapper">
      <!-- google map embeded here -->
    </div>

    <AppFooter />
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";
import AppFooter from "~/components/AppFooter";

export default {
  components: { PageHero, AppFooter },
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
      resultMessage: ""
    };
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
.gmap-wrapper {
  height: 520px;
}
</style>
