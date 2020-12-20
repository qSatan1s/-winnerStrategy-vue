<template>
  <header>
    <top-nav :isMenuOpen="isMenuOpen" />
    <div
      class="app-header container pt-1 pb-2"
      :class="{ showMenu: isMenuOpen }"
    >
      <div class="app-header-logo">
        <a href="#/young/home">
          <logo />
        </a>
      </div>
      <div
        @click="openMenu"
        v-click-outside="hide"
        class="app-header-menu cl_white"
      >
        <h3>{{ $t(`header.${menuButton}Menu`) }}</h3>
      </div>
      <transition name="slide">
        <nav
          class="app-header-navs"
          v-if="isMenuOpen || windowWidth >= 992"
          :class="{ showMenu: isMenuOpen }"
        >
          <router-link
            class="app-header-nav cl_white"
            v-for="(link, index) in menu"
            :to="link.to"
            :key="index"
            >{{ $t(`menu.${link.name}`) }}</router-link
          >
        </nav>
      </transition>
      <div v-if="isLogin" class="app-header-profile">
        <router-link to="#" class="cl_white">
          <!-- dinamic img -->
          <img src="/images/young/icon-profile.svg" alt />
          <a>{{ $t("header.profile") }}</a>
        </router-link>
      </div>
      <div v-else class="app-header-profile">
        <router-link to="#" class="cl_white">
          {{ $t("header.login") }}
        </router-link>
        <router-link to="#" class="cl_white">
          {{ $t("header.register") }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import TopNav from "./TopNav";
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      isLogin: true,
      isMenuOpen: false,
      menuButton: "open",
      windowWidth: 0
    };
  },
  props: ["menu"],
  components: {
    TopNav,
    logo: () => import("@/assets/images/young/logo.svg")
  },
  methods: {
    hide() {
      this.isMenuOpen = false;
      this.menuButton = "open";
    },
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.menuButton = "close";
      } else {
        this.menuButton = "open";
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth >= 992 ? this.hide() : "";
    }
  },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.popupItem = this.$el;
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-out;
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.slide-enter-to,
.slide-leave {
  max-height: 426px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  white-space: nowrap;

  &-logo {
    flex: 0 1 auto;
  }

  &-navs {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    flex: 0.7 4 auto;
    background: $gradient-blue;
    border-radius: 70px;
    border: 2px solid $blue-border;
    padding: 1rem 0;

    .app-header-nav {
      opacity: 1;
      font-weight: bold;
    }

    .app-header-nav:hover {
      opacity: 0.5;
    }
  }

  &-profile {
    flex: 0 2 auto;
    font-weight: 600;
    img {
      margin-right: 0.5rem;
    }
    a + a {
      margin-left: 0.5rem;
    }
  }
}

.adaptive,
.app-header-menu {
  display: none;
}

@include mq-between($SmPhoneWidth, $SmDesktopWidth) {
  header {
    background: $case-background-image;
  }
  .app-header {
    justify-content: space-between;

    &-navs {
      position: absolute;
      width: 100%;
    }
  }
  .app-header-menu {
    display: flex;
    border-radius: 70px;
    padding: 0.75rem 3rem;
    z-index: 2;
    cursor: pointer;
    justify-content: center;
    @include mq($SmPhoneWidth + 53, max) {
      padding: 1rem 1.3rem;
    }

    border: 3px solid $blue-border;
    background: $case-background-image;
  }

  .app-header-navs {
    top: 0;
    opacity: 0;
    transition: all 0.5s ease;

    position: absolute;
    display: none;

    width: 100%;
    left: 0;
    z-index: 1;

    border-radius: 0;
    border-top: none;

    flex-flow: column nowrap;
    align-items: center;

    .app-header-nav {
      margin-bottom: 2rem;
      font-size: 18px;
    }
  }
  .app-header-profile {
    display: none;
  }

  .showMenu {
    background: $case-background-image;
    top: 1.5%;
    display: flex;
    opacity: 1;
    @include mq-between($PhoneWidth, $TableWidth) {
      top: 1.75%;
    }
    @include mq-between($TableWidth, $SmDesktopWidth) {
      top: 2.25%;
    }
  }
}
</style>
