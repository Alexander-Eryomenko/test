<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppMain from "@/components/AppMain";
import LanguageSelect from "@/components/LanguageSelect";
import AppLink from "@/components/AppLink";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    LanguageSelect,
    AppLink
  }
}
</script>

<style lang="scss">
@keyframes router  {
  0% {
    background-color: red;
  }
  100% {
    background-color: transparent;
  }
}

</style>
