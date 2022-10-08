<template>
  <header class="app-header">
    <div class="logo">
      <AppLogo />
    </div>
  </header>
</template>

<script>
import AppLogo from "@/components/HeaderLogo";

export default {
  name: "AppHeader",
  components: {
    AppLogo
  }
}
</script>

<style scoped>

</style>
