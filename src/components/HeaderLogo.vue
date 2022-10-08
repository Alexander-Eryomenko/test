<template>
  <div class="logo">
    <div :class="['logo__main-text', {'logo__main-text_animation': startAnimation}]">
      <span>m</span>
      <span>o</span>
      <span>z</span>
      <span>g</span>
      <span>i</span>
    </div>
    <div class="logo__sub-text">event</div>
  </div>
</template>

<script>
export default {
  name: "AppLogo",
  data() {
    return {
      startAnimation: false
    }
  },
  mounted() {
    this.startAnimation = true
  }
}
</script>

<style scoped>

</style>
