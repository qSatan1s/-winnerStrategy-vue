<template>
  <main>
    <div class="gener-layer">
      <div class="bg-header">
        <div class="bg-header__desktop">
          <headerBg />
        </div>
        <div class="bg-header__tablet">
          <headerBgTablet />
        </div>
        <div class="bg-header__mobile-big">
          <headerBg />
        </div>
        <div class="bg-header__mobile">
          <headerBgMobile />
        </div>
      </div>
    </div>
    <app-header v-if="menu.length > 0" :menu="menu" />
    <div class="container">
      <slot></slot>
    </div>
    <div class="mt-4"></div>
    <app-footer v-if="menu.length > 0" :menu="menu" />
  </main>
</template>

<script>
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  data: () => ({
    menu: []
  }),
  components: {
    AppHeader,
    AppFooter,
    headerBg: () => import("@/assets/images/old/bg-header.svg"),
    headerBgTablet: () => import("@/assets/images/old/bg-header-tablet.svg"),
    headerBgMobile: () => import("@/assets/images/old/bg-header-mobile.svg")
  },
  mounted() {
    if (this.menu.length > 0) return;

    this.menu.push(
      { name: "home", to: "/old/home", img: "mainPage" },
      { name: "competenceCenter", to: "#", img: "competenceCenter" },
      { name: "rating", to: "#", img: "rating" },
      { name: "cases", to: "#", img: "cases" },
      { name: "schools", to: "#", img: "schools" },
      { name: "mentors", to: "#", img: "mentors" },
      { name: "groups", to: "#", img: "groups" }
      // { name: "chatRoom", to: "#", img: "chatRoom" }
    );
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/fonts/muller/stylesheet.css";
main {
  font-family: $f-muller;
  .gener-layer {
    height: 100%;
    z-index: -999;
    .bg-header {
      position: absolute;
      width: 100%;
      min-height: 460px;
    }
    .bg-header {
      &__desktop {
        display: none;
        @include mq($TableWidth, min) {
          display: block;
        }
      }
      &__tablet {
        display: none;
        @include mq($PhoneWidth, min) {
          @include mq($TableWidth, max) {
            display: block;
          }
        }
      }
      &__mobile-big {
        display: none;
        @include mq($SmPhoneWidth, min) {
          @include mq($PhoneWidth, max) {
            display: block;
          }
        }
      }
      &__mobile {
        display: none;
        @include mq($SmPhoneWidth, max) {
          display: block;
        }
      }
    }
  }
  a:hover {
    text-shadow: -6px -6px 16px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
