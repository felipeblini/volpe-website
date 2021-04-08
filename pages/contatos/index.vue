<template>
  <div>
    <PageHero pageTitle="Contatos" />

    <a href="#" id="onde-estamos"></a>

    <div class="page-main-content --contatos content-theme --dark py-5">
      <b-container>
        <b-row
          class="unity-row mt-4"
          v-for="unity in unitiesList"
          :key="unity.id"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <b-col class="unity-pin">
            <div class="pin-icon"></div>
          </b-col>

          <b-col class="col col-10" md="8">
            <div class="unity-box">
              <h2 class="--bold">{{ unity.name }}</h2>
              <p>{{ unity.address }}</p>
              <p>{{ unity.city }}</p>
              <p>{{ unity.phone }}</p>
            </div>
          </b-col>
        </b-row>

        <b-row class="img-responsive-wrapper mt-5">
          <b-col class="content-center" v-lazy-container="{ selector: 'img' }">
            <img
              v-if="state.showResponsiveImg"
              :data-srcSet="responsiveImg.srcSet"
              :sizes="responsiveImg.sizes"
              :data-src="responsiveImg.src"
              :data-loading="responsiveImg.placeholder"
              alt="Caminhão"
            />
          </b-col>
        </b-row>

        <b-row class="form-row mt-4">
          <b-col cols="4" class="contact-logo-wrapper">
            <div></div>
          </b-col>

          <b-col id="fale-conosco" class="contact-form-wrapper">
            <h1 class="--bigger --bold mb-5">Fale com a Volpe</h1>

            <form @submit="onSubmit">
              <b-row>
                <b-col md="6">
                  <b-form-group
                    id="input-group-name"
                    label="Nome:"
                    label-for="input-name"
                  >
                    <b-form-input
                      id="input-name"
                      ref="name"
                      v-model="state.form.name"
                      required
                      placeholder="Nome"
                      oninvalid="this.setCustomValidity('Por favor informe seu nome')"
                      oninput="setCustomValidity('')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col class="pl-md-0">
                  <b-form-group
                    id="input-group-phone"
                    label="Telefone:"
                    label-for="input-phone"
                  >
                    <b-form-input
                      id="input-phone"
                      ref="phone"
                      v-model="state.form.phone"
                      required
                      placeholder="Telefone"
                      oninvalid="this.setCustomValidity('Por favor informe seu telefone')"
                      oninput="setCustomValidity('')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group
                id="input-group-email"
                label="Email:"
                label-for="input-email"
              >
                <b-form-input
                  id="input-email"
                  ref="email"
                  v-model="state.form.email"
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
                  v-model="state.form.msg"
                  required
                  placeholder="Mensagem"
                  rows="3"
                  max-rows="6"
                  oninvalid="this.setCustomValidity('Por favor escreva uma mensagem')"
                  oninput="setCustomValidity('')"
                ></b-form-textarea>
              </b-form-group>

              <div class="d-flex justify-content-between">
                <button
                  type="submit"
                  :disabled="!isFormValid()"
                  class="volpe-btn"
                >
                  {{ state.sendingEmail ? "Enviando..." : "Enviar" }}
                </button>

                <ScrollTopButton class="d-md-none" />
              </div>

              <b-alert
                class="mt-5"
                v-model="state.resultDone"
                :variant="state.resultStatus"
                dismissible
              >
                <span v-html="state.resultMessage"></span>
              </b-alert>
            </form>
          </b-col>
        </b-row>

        <a href="#" id="mapa"></a>
      </b-container>
    </div>

    <div id="volpe-map" :style="`height: ${state.mapHeight}px`"></div>

    <AppFooter />
  </div>
</template>

<script>
import PageHero from "~/components/PageHero";
import ScrollTopButton from "~/components/ScrollTopButton";
import AppFooter from "~/components/AppFooter";

export default {
  components: { PageHero, ScrollTopButton, AppFooter },
  async asyncData() {
    const unitiesList = [
      {
        id: 1,
        name: "Unidade Osasco",
        address: "Rua São Bento, 555",
        city: "Osasco - SP",
        phone: "11 3607-4071"
      }
    ];

    return {
      unitiesList,
      pageTitle: "Contato",
      pageDescription:
        "Lorem ipsumnm dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore"
    };
  },
  data() {
    return {
      state: {
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
        showResponsiveImg: true,
        mapHeight: 300
      },
      unitiesList: [],
      pageTitle: "",
      pageDescription: ""
    };
  },
  /*
   ** Headers of the page
   */
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageDescription
        }
      ]
    };
  },
  computed: {
    responsiveImg() {
      return Object.assign(
        require("~/assets/img/contatos/caminhao.png?sizes[]=200&sizes[]=342&sizes[]=750"),
        {
          sizes: "(max-width: 320px) 200px, (max-width: 411px) 342px, 750px"
        }
      );
    }
  },
  mounted() {
    const windowSize = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (windowSize > 1024) this.state.mapHeight = 450;

    window.addEventListener("resize", () => {
      this.state.showResponsiveImg = false;

      setTimeout(() => {
        this.state.showResponsiveImg = true;
      }, 100);
    });

    document.querySelectorAll(".form-control").forEach(formControl => {
      formControl.addEventListener("blur", el => {
        el.target.classList.add("dirty");
      });

      const groupId = `#input-group-${formControl.id.split("-")[1]}`;
      formControl.addEventListener("keyup", ({ target: { value } }) => {
        const inputGroup = document.querySelector(groupId);

        if (value) inputGroup.classList.add("has-value");
        else inputGroup.classList.remove("has-value");
      });
    });

    const addr = `${this.$store.state.city}, ${this.$store.state.cep
      .replace("-", "")
      .replace(" ", "")}, ${this.$store.state.address}`;

    const embed = `<iframe width='100%' height='${this.state.mapHeight}' frameborder='0'
        scrolling='no' marginheight='0' marginwidth='0'
        src='https://maps.google.com/maps?&amp;q=
        ${addr}
        &amp;output=embed'></iframe>`;

    document.querySelector("#volpe-map").innerHTML = embed;
  },
  methods: {
    isFormValid() {
      if (this.state.sendingEmail) return false;
      if (!Object.keys(this.$refs).length) return false;

      for (const prop in this.$refs) {
        if (!this.$refs[prop].validity.valid) return false;
      }

      return true;
    },

    onSubmit(evt) {
      evt.preventDefault();

      this.state.sendingEmail = true;
      this.$nuxt.$loading.start();

      this.$http.post("/api/contact", { ...this.state.form }).then(res => {
        this.state.resultMessage =
          res.status === 200
            ? "<b>Mensagem enviada com sucesso!</b><br /><small>Logo entraremos em contato. Obrigado</small>"
            : `<b>Algo deu errado :(</b><small><br>Por favor, entre em contato conosco pelo telefone <br /><b>${this.$store.state.phone}</b></small><br><small>Ou tente novamente</small>`;

        this.state.resultStatus = res.status === 200 ? "success" : "danger";

        if (res.status === 200) {
          this.state.form.name = "";
          this.state.form.phone = "";
          this.state.form.email = "";
          this.state.form.msg = "";

          document.querySelectorAll(".form-control").forEach(formControl => {
            formControl.classList.remove("dirty");
            const groupId = `#input-group-${formControl.id.split("-")[1]}`;
            const inputGroup = document.querySelector(groupId);
            inputGroup.classList.remove("has-value");
          });
        }

        this.state.sendingEmail = false;
        this.state.resultDone = true;
        this.$nuxt.$loading.finish();
      });
    }
  }
};
</script>

<style lang="scss">
.contact-form-wrapper {
  form {
    .form-group {
      position: relative;

      label {
        position: absolute;
        color: $dark-title;
        top: 12px;
        left: 28px;
        transition: all 0.25;
      }

      textarea {
        padding-top: 40px !important;
      }

      &:focus-within {
        label {
          top: 18px;
          left: 21px;
          font-size: 12px;
        }

        input {
          &#input-name {
            padding-left: 65px;
          }

          &#input-phone {
            padding-left: 80px;
          }

          &#input-email {
            padding-left: 60px;
          }
        }
      }

      &.has-value {
        label {
          top: 18px;
          left: 21px;
          font-size: 12px;
        }

        input {
          &#input-name {
            padding-left: 65px;
          }

          &#input-phone {
            padding-left: 80px;
          }

          &#input-email {
            padding-left: 60px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.unity-row {
  &:nth-child(even) {
    margin-top: 45px;
    flex-direction: row-reverse;

    .col {
      &.unity-pin {
        .pin-icon {
          background-position-x: left;
        }
      }

      &:nth-child(2) {
        display: flex;
        justify-content: flex-end;

        & > .unity-box {
          width: 100%;
          text-align: right;
        }
      }
    }
  }

  .col {
    &.unity-pin {
      display: flex;
      align-items: center;

      .pin-icon {
        height: 62px;

        @media (min-width: 768px) {
          height: 117px;
        }

        width: 100%;
        background: url("~assets/img/contatos/pin.png") no-repeat right center;
        background-size: contain;
      }
    }

    & > .unity-box {
      background: $light-background;

      padding: 16px 24px;
      border-radius: 17px;

      @media (min-width: 480px) {
        max-width: 88%;
      }

      @media (min-width: 530px) {
        padding: 30px 40px;
      }

      @media (min-width: 768px) {
        border-radius: 27px;
        min-width: 65%;
        max-width: 75%;
      }

      @media (min-width: 1200px) {
        max-width: 65%;
      }

      h2 {
        font-size: 20px;

        @media (min-width: 411px) {
          font-size: 27px;
        }

        @media (min-width: 992px) {
          font-size: 34px;
        }
      }

      p {
        color: $light-paragraph;
        margin: 0;

        line-height: 20px;
        font-size: 15px;

        @media (min-width: 992px) {
          font-size: 18px;
          line-height: 27px;
        }

        &:nth-last-child(1) {
          margin-top: 10px;
          font-weight: bold;
        }
      }
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

.form-row {
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;

  .contact-logo-wrapper {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
    }

    div {
      width: 110px;
      height: 108px;

      @media (min-width: 992px) {
        width: 180px;
        height: 176px;
      }

      @media (min-width: 1200px) {
        width: 220px;
        height: 215px;
      }

      display: block;
      background: url("~assets/img/contatos/logo-vertical.png") no-repeat center;
      background-size: contain;
    }
  }

  .contact-form-wrapper {
    max-width: 800px;

    form {
      input,
      textarea {
        border-radius: 30px;
        padding: 24px;
        border: solid 2px;
        color: $dark-paragraph !important;

        @include hide-placeholder;
        @include input-background-gradient;

        &:focus {
          @include input-background-gradient;
          border-color: $dark-background;
          box-shadow: none;
        }

        &:placeholder-shown {
          border-color: $dark-background;
        }

        &.dirty {
          &:invalid {
            border-color: red;
          }

          &:valid {
            border-color: $dark-background;
          }
        }
      }

      textarea {
        overflow-y: hidden;
        &::-webkit-scrollbar {
          width: 0 !important;
        }

        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
      }

      // @media (min-width: 992px) {
      //   #input-group-name,
      //   #input-group-phone {
      //     float: left;
      //     width: 50%;
      //   }

      //   #input-group-name {
      //     padding-right: 15px;
      //   }

      //   #input-group-phone {
      //     padding-left: 15px;
      //   }
      // }
    }
  }
}
</style>
