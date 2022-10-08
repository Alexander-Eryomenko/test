<template>
  <div @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler" class="language-icon">
    <div class="elem-language" :class="showLanguage">
      <div>UK</div>
      <div>EN</div>
    </div>
    <img class="language-icon__img" src="../assets/icons/languageIcon.png" alt="languageIcon">
  </div>
</template>

<script>

export default {
  name: "LanguageSelect",
  data() {
    return {
      showLanguage: ''
    }
  },
  methods: {
    mouseMoveHandler() {
      this.showLanguage = 'show-language'
    },
    mouseLeaveHandler() {
      this.showLanguage = ''
    }
  }
}
</script>

<style scoped>

</style>
