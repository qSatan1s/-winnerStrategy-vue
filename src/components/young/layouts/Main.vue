<template>
  <main>
    <div class="gener-layer"></div>
    <app-header v-if="menu.length > 0" :menu="menu" />
    <div class="mt-4"></div>
    <div class="container">
      <slot></slot>
    </div>
    <div class="mt-4"></div>
    <app-footer v-if="menu.length > 0" :menu="menu" />
  </main>
</template>

<script>
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export default {
  data: () => ({
    menu: []
  }),
  components: {
    AppFooter,
    AppHeader
  },
  mounted() {
    //lolik пока что так после будем получать через $store
    if (this.menu.length > 0) return;
    this.menu.push(
      { name: "competenceCenter", to: "#", img: "competenceCenter" },
      { name: "rating", to: "#", img: "rating" },
      { name: "cases", to: "#", img: "cases" },
      { name: "schools", to: "#", img: "schools" },
      { name: "mentors", to: "#", img: "mentors" },
      { name: "groups", to: "#", img: "groups" },
      { name: "chatRoom", to: "#", img: "chatRoom" }
    );
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/fonts/nunito/stylesheet.css";
main {
  font-family: $f-nunito;
  .gener-layer {
    background: $background;
  }
}
</style>
