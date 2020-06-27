<template>
  <div>
    <modal name="hello-world">
      hello, world!
    </modal>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$modal.show("hello-world");
  }
};
</script>

<style lang="scss" scoped>
</style>
