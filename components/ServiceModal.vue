<template>
  <div>
    <div class="service-outside-content">
      <h1>{{ serviceContent.title }}</h1>
      <p v-html="serviceContent.content"></p>
      <!-- <img
        :src="require(`@/assets/img/servicos/list/${serviceContent.icon}`)"
      /> -->
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
                <img
                  :src="
                    require(`@/assets/img/servicos/list/${serviceContent.icon}-w.svg`)
                  "
                  :alt="serviceContent.title"
                />
              </div>

              <div
                class="service-photo-loading --img-1"
                :style="{
                  height: `${viewportWidth / 2}px`
                }"
              ></div>

              <div
                class="service-photo"
                :style="{
                  backgroundImage: `url(${require('@/assets/img/servicos/list/' +
                    serviceContent.img1)})`,
                  minHeight: `${viewportWidth / 2}px`
                }"
              ></div>
            </div>

            <div class="row-service-photos --line2">
              <div
                class="service-photo-loading --img-2"
                :style="{
                  height: `${viewportWidth / 2}px`
                }"
              ></div>

              <div
                class="service-photo"
                :style="{
                  backgroundImage: `url(${require('@/assets/img/servicos/list/' +
                    serviceContent.img2)})`,
                  minHeight: `${viewportWidth / 2}px`
                }"
              ></div>
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
      modalActive: false,
      viewportWidth: 0
    };
  },
  async fetch() {
    const getService = async () =>
      new Promise((res, rej) => {
        setTimeout(() => {
          res(
            this.$store.state.servicesList.filter(
              x => x.id === this.serviceId
            )[0]
          );
        }, 500);
      });

    const serviceContent = await getService();

    this.serviceContent.title = serviceContent.title;
    this.serviceContent.content = serviceContent.content;
    this.serviceContent.icon = serviceContent.icon;
    this.serviceContent.img1 = serviceContent.img1;
    this.serviceContent.img2 = serviceContent.img2;
  },
  mounted() {
    this.modalActive = true;

    const windowSize = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    this.viewportWidth = windowSize;

    if (windowSize >= 1200) {
      this.modalSize = "xl";
    } else {
      this.modalSize = "md";
    }
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const windowSize = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );

        this.viewportWidth = windowSize;

        if (windowSize >= 1200) {
          this.modalSize = "xl";
        } else {
          this.modalSize = "md";
        }
      }, 300);
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
      width: 100%;

      .service-photo-loading {
        width: 100% !important;
        position: absolute;
        z-index: 0;
        background-image: url("~assets/img/loading.svg");
        background-repeat: no-repeat;

        @media (min-width: 600px) {
          height: 258px !important;
        }

        @media (min-width: 1200px) {
          height: 284px !important;
        }

        &.--img-1 {
          background-position: 75% center;
        }

        &.--img-2 {
          background-position: center center;
        }
      }

      .service-photo {
        background-size: cover;
        position: relative;
        z-index: 1;

        @media (min-width: 600px) {
          min-height: 258px !important;
        }

        @media (min-width: 1200px) {
          min-height: 284px !important;
        }
      }

      &.--line1 {
        display: flex;
        div {
          width: 50%;

          &.service-icon {
            border: solid 3px $dark-title;
            background: $dark-title;
            display: flex;
            align-content: center;
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

@media (max-width: 600px) {
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

  .modal-dialog {
    max-width: 100vw;
    margin: 0;
  }

  .modal-content {
    height: 100vh;
    width: auto;
    margin-left: -15px;
  }
}
</style>
