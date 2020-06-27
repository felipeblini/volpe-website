<template>
  <div>
    <div class="service-outside-content">
      <h1>{{ serviceContent.title }}</h1>
      <p v-html="serviceContent.content"></p>
      <img :src="serviceContent.img1" />
      <img :src="serviceContent.img2" />
    </div>

    <b-modal
      v-model="modalActive"
      ref="service-modal"
      hide-footer
      hide-header
      :size="modalSize"
      @hide="$emit('modal-closed')"
    >
      <a
        class="close-service-modal"
        href="#"
        @click.prevent="modalActive = false"
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
                <img class="service-photo" :src="serviceContent.img1" />
              </div>
            </div>

            <div class="row-service-photos --line2">
              <img class="service-photo" :src="serviceContent.img2" />
            </div>
          </b-col>
        </template>
      </b-row>
    </b-modal>
  </div>
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
      serviceContent: {},
      modalActive: false
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
    this.modalActive = true;
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
.service-outside-content {
  position: absolute;
  top: 0;
  width: 200px;

  img {
    width: 100%;
  }
}
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
  padding: 0;
  border: solid $dark-title;
  border-radius: 3px;

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
.modal-content {
  background: $dark-background;

  .modal-body {
    padding: 0;
  }
}

@media (max-width: 601px) {
  .close-service-modal {
    position: fixed !important;
    right: 20px !important;
    top: 20px !important;
  }

  .service-content-wrapper {
    padding: 0 15px !important;
    border-radius: 0 !important;
    border: none !important;
  }

  .modal {
    // background: $dark-background;
    // position: fixed;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // overflow: hidden;
    // padding: 0;
    // margin: 0;
    border: solid 4px red;
  }

  .modal-dialog {
    max-width: 100vw;
    margin: 0;
    // padding: 0;
    // margin: 0;
    // position: initial;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // padding: 0;
    // border: solid 4px teal;
  }

  .modal-content {
    height: 100vh;
    width: auto;
    margin-left: -15px;
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // border-radius: 0;
    // box-shadow: none;
    // padding: 0;
    // margin: 0;
    // border: solid 4px blue;
  }

  .modal-body {
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    // min-width: 100vw;
    // overflow: hidden;
    // margin: 0 !important;
    // padding: 0 !important;
    // border: solid 4px maroon;
  }
}
</style>
