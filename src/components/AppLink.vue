<template>
  <div>
    <router-link to="/second" :class="className">
      {{ textLink }}?
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppLink",
  props: {
    textLink: {
      type: String,
      default: 'who',
      required: true
    },
    className: {
      type: String,
      default: 'link-bottom',
      required: true
    }
  }
}
</script>

<style scoped>

</style>
