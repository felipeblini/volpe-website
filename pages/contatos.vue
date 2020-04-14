<template>
  <div class="container mt-5">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-name" label="Nome:" label-for="input-name">
        <b-form-input
          id="input-name"
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
          v-model="form.msg"
          required
          placeholder="Mensagem"
          rows="3"
          max-rows="6"
          oninvalid="this.setCustomValidity('Por favor escreva uma mensagem')"
          oninput="setCustomValidity('')"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        msg: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$axios.post("/api/contact", { ...this.form }).then(res => {
        const responseMsg =
          res.status === 200
            ? "Sua mensagem foi enviada com sucesso, logo entraremos em contato. Obrigado"
            : `Ocorreu um erro desconhecido, tente novamente ou entre em contato conosco pelo telefone ${this.$store.state.phoneNumber}`;

        if (res.status === 200) {
          this.form.name = "";
          this.form.phone = "";
          this.form.email = "";
          this.form.msg = "";
        }

        alert(responseMsg);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
