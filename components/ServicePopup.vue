<template>
  <b-modal v-model="show" size="xl">
    <b-row class="service-content-wrapper content-theme --dark">
      <b-col class="col-service-photos">
        <div class="row-service-photos --line1">
          <div class="service-icon">icon</div>
          <div class="service-img-1">img1</div>
        </div>

        <div class="row-service-photos --line2">
          <div class="service-img-2">img2</div>
        </div>
      </b-col>

      <b-col class="col-service-text p-0">
        <div class="service-text">
          <h2>Demolição</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.service-content-wrapper {
  flex-direction: row-reverse;

  .col-service-photos {
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 454px;
    border: solid;

    .row-service-photos {
      &.--line1,
      &.--line2 {
        border: solid;
        width: 100%;
        height: 50%;
      }

      &.--line1 {
        display: flex;

        div {
          border: solid 2px red;
          width: 50%;

          &.service-icon {
            background-color: $dark-title;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

  // .col-service-photo {
  //   &.--line1 {
  //     max-width: 214px;
  //     height: 214px;

  //     .service-icon {
  //       background-color: $dark-title;
  //       width: 100%;
  //     }

  //     .service-img-1 {
  //       background: #ccc;
  //       width: 100%;
  //     }
  //   }
  // }

  .col-service-text {
    max-width: 380px;
  }

  .service-text {
    padding: 38px;
  }
}
</style>

<style lang="scss">
.modal-content {
  background: $dark-background;

  .modal-header {
    display: none;
  }
  .modal-body {
    padding: 0;
  }

  .modal-footer {
    display: none;
  }
}
</style>
