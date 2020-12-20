<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
  overflow: hidden;
}
</style>
