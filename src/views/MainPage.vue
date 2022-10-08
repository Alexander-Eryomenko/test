<template>
  <div>
    <MobileMenu />
    <LanguageSelect />
    <AppHeader />
    <AppMain />
    <AppLink textLink="where" className="link-left" />
    <AppLink textLink="what" className="link-right"/>
    <AppLink textLink="who" className="link-bottom"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppMain from "@/components/AppMain";
import LanguageSelect from "@/components/LanguageSelect";
import AppLink from "@/components/AppLink";
import MobileMenu from "@/components/MobileMenu";

export default {
  name: "MainPage",
  components: {
    AppHeader,
    AppMain,
    LanguageSelect,
    AppLink,
    MobileMenu
  }
}
</script>

<style lang="scss">


</style>
