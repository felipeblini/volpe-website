<template>
  <b-modal ref="service-modal" hide-footer hide-header :size="modalSize">
    <a
      class="close-service-modal"
      href="#"
      @click.prevent="$emit('popup-close')"
      >X</a
    >

    <b-row class="service-content-wrapper content-theme --dark">
      <p v-if="$fetchState.pending" class="w-100 p-5 text-center">
        <img src="~/assets/img/loading.svg" alt="" />
      </p>
      <template v-else>
        <b-col class="col-service-text p-0">
          <PerfectScrollbar class="service-text">
            <h2>{{ serviceContent.title }}</h2>
            <p v-html="serviceContent.content"></p>
          </PerfectScrollbar>
        </b-col>

        <b-col class="col-service-photos">
          <div class="row-service-photos --line1">
            <div class="service-icon">
              <img :src="serviceContent.icon" :alt="serviceContent.title" />
            </div>

            <div class="service-img-1">
              <img class="service-photo lazyload" :src="serviceContent.img1" />
            </div>
          </div>

          <div class="row-service-photos --line2">
            <img class="service-photo lazyload" :src="serviceContent.img2" />
          </div>
        </b-col>
      </template>
    </b-row>
  </b-modal>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";

export default {
  components: {
    PerfectScrollbar
  },
  props: {
    serviceId: { type: Number, default: 0 }
  },
  data() {
    return {
      modalSize: "xl",
      serviceContent: {}
    };
  },
  async fetch() {
    const serviceContent = await this.$axios.get(this.serviceId.toString());

    this.serviceContent.title = serviceContent.data.title.rendered;
    this.serviceContent.content = serviceContent.data.content.rendered;
    this.serviceContent.icon = serviceContent.data.acf.icone;
    this.serviceContent.img1 = serviceContent.data.acf.foto_quadrada;
    this.serviceContent.img2 = serviceContent.data.acf.foto_paisagem;
  },
  mounted() {
    this.$refs["service-modal"].show();

    const windowSize = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (windowSize >= 1200) {
      this.modalSize = "xl";
    } else {
      this.modalSize = "md";
    }

    window.addEventListener("resize", () => {
      const windowSize = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      if (windowSize >= 1200) {
        this.modalSize = "xl";
      } else {
        this.modalSize = "md";
      }
    });
  }
};
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>

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
          @media (min-width: 1200px) {
            height: 290px;
          }

          width: 100%;
          background: url("~assets/img/loading.svg") no-repeat center center;
          background-size: 30px;
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
      padding: 38px;

      @media (min-width: 1200px) {
        padding: 81px;
        max-height: 580px;
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
  .modal-dialog {
    max-width: 100vw;
    margin: 0;
  }
}
.modal-content {
  background: $dark-background;

  .modal-body {
    padding: 0;
  }
}
</style>
