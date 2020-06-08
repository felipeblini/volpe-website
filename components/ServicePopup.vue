<template>
  <b-modal v-model="show" :size="modalSize">
    <a
      class="close-service-modal"
      href="#"
      @click.prevent="$emit('popup-close')"
      >X</a
    >

    <b-row class="service-content-wrapper content-theme --dark">
      <b-col class="col-service-text p-0">
        <div class="service-text">
          <h2>{{ service.title }}</h2>
          <p v-html="service.desc"></p>
        </div>
      </b-col>

      <b-col class="col-service-photos">
        <div class="row-service-photos --line1">
          <div class="service-icon">
            <img :src="service.icon" :alt="service.title" />
          </div>

          <div class="service-img-1">
            <img class="service-photo" v-lazy="service.img1" />
          </div>
        </div>

        <div class="row-service-photos --line2">
          <img class="service-photo" v-lazy="service.img2" />
        </div>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    service: Object
  },
  data() {
    return {
      modalSize: "lg"
    };
  },
  mounted() {
    const windowSize = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (windowSize >= 1800) {
      this.modalSize = "xl";
    } else if (windowSize >= 1200) {
      this.modalSize = "lg";
    } else {
      this.modalSize = "md";
    }

    window.addEventListener("resize", () => {
      const windowSize = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      if (windowSize >= 1800) {
        this.modalSize = "xl";
      } else if (windowSize >= 1200) {
        this.modalSize = "lg";
      } else {
        this.modalSize = "md";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.close-service-modal {
  width: 34px;
  height: 34px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 9;
  text-indent: -9999px;
  overflow: hidden;
  background: url("~assets/img/servicos/popup-close.png") no-repeat center
    center;
  background-size: contain;
}
.service-content-wrapper {
  flex-direction: column-reverse;

  @media (max-width: 600px) {
    height: 100vh;
  }

  @media (min-width: 601px) {
    border: solid $dark-title;
    border-radius: 3px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  .col-service-photos {
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (min-width: 1200px) {
      width: 630px;
    }

    .row-service-photos {
      &.--line1,
      &.--line2 {
        width: 100%;

        img.service-photo {
          width: 100%;
        }
      }

      &.--line1 {
        display: flex;

        div {
          width: 50%;

          &.service-icon {
            background-color: $dark-title;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 50%;
              max-width: 186px;
            }
          }
        }
      }
    }
  }

  .col-service-text {
    .service-text {
      @media (max-width: 600px) {
      }

      padding: 38px;

      @media (min-width: 1200px) {
        padding: 71px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}
</style>

<style lang="scss">
@media (max-width: 600px) {
  .modal {
    padding-left: 0 !important;
    margin-top: -1px;
  }

  .modal-dialog {
    width: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    margin: 0 !important;
  }

  .modal-content {
    height: 100vh;
  }
}
.modal-content {
  background: $dark-background;

  .modal-header {
    display: none !important;
  }
  .modal-body {
    padding: 0;
  }

  .modal-footer {
    display: none !important;
  }
}
</style>
