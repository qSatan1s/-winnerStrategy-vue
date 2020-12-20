<template>
  <header class="container">
    <top-nav
      :currentWidth="currentWidth"
      @openMenu="isMenuOpen = !isMenuOpen"
    />
    <transition name="slide">
      <div class="app-header" v-if="isMenuOpen || currentWidth >= 992">
        <router-link to="#" class="app-header-logo">
          <img src="@/assets/images/old/logo.png" alt />
        </router-link>
        <nav class="app-header-navs">
          <router-link
            class="app-header-nav"
            v-for="(link, index) in menu"
            :to="link.to"
            :key="index"
          >
            <span>
              <component :is="link.img"></component>
            </span>
            <p class="cl_white">{{ $t(`menu.${link.name}`) }}</p>
          </router-link>
        </nav>
        <div v-if="isLogin" class="app-header-profile">
          <router-link
            to="/old/account"
            class="cl_yellow-white-sait profile-link"
          >
            <span class="profile-img">
              <!--dynamic img-->
              <img src="/images/old/mentors/profile.jpg" alt />
            </span>
            <a class="cl_yellow-white-sait">{{ $t("header.profile") }}</a>
          </router-link>
        </div>
        <div v-else class="app-header-profile">
          <router-link to="#" class="cl_yellow-white-sait">
            {{ $t("header.login") }}
          </router-link>
          <router-link to="#" class="cl_yellow-white-sait">
            {{ $t("header.register") }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import TopNav from "./TopNav";

export default {
  data() {
    return {
      isLogin: true,
      isMenuOpen: false,
      currentWidth: 0
    };
  },
  components: {
    TopNav,
    mainPage: () => import("@/assets/images/old/menu-icons/mainPage.svg"),
    competenceCenter: () =>
      import("@/assets/images/old/menu-icons/competenceCenter.svg"),
    rating: () => import("@/assets/images/old/menu-icons/rating.svg"),
    cases: () => import("@/assets/images/old/menu-icons/cases.svg"),
    schools: () => import("@/assets/images/old/menu-icons/schools.svg"),
    mentors: () => import("@/assets/images/old/menu-icons/mentors.svg"),
    groups: () => import("@/assets/images/old/menu-icons/groups.svg"),
    chatRoom: () => import("@/assets/images/old/menu-icons/chatRoom.svg"),
    profile: () => import("@/assets/images/old/icon-profile.svg")
  },
  props: ["menu"],
  methods: {
    onResize() {
      this.currentWidth = window.innerWidth;
      this.currentWidth >= 992 ? (this.isMenuOpen = false) : "";
    }
  },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
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
  max-height: 500px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.app-header {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  font-size: $fontOldMainSize;

  &-navs {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    flex: 0.6 4 auto;

    .app-header-nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      p {
        margin-left: 0.4rem;
        font-size: 14px;
      }
    }
  }

  &-profile {
    display: flex;
    align-items: center;
    .profile-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        width: 24px;
        height: 24px;
        margin-right: 0.4rem;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
          z-index: 0;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgb(255, 255, 255) 25%,
            rgb(246, 240, 101)
          );
        }
        img {
          width: 20px;
          height: 20px;
          object-fit: cover;
          border-radius: 50%;
          z-index: 1;
        }
      }
    }
    a + a {
      margin-left: 0.5rem;
    }
  }
}

@include mq-between($SmPhoneWidth, $SmDesktopWidth) {
  .app-header {
    flex-flow: column;
    align-items: flex-start;
    position: absolute;
    display: flex;

    padding-top: 5rem;
    margin-top: -0.2rem;

    z-index: 1;
    width: 100%;

    -webkit-box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.75);

    border-radius: 5px;

    @include mq-between($SmPhoneWidth, $PhoneWidth) {
      left: 0;
    }
    @include mq-between($PhoneWidth, $SmPhoneWidth) {
      left: unset;
      margin-left: -2rem;
    }

    background-color: $orange-2;

    &-logo {
      display: none;
    }

    &-navs {
      display: flex;
      margin-left: 1rem;
      flex-flow: column;
      flex: 0;
      order: 1;

      .app-header-nav {
        justify-content: flex-start;
        padding-bottom: 1.5rem;

        img {
          padding-right: 0.5rem;
        }
      }
    }

    &-profile {
      display: flex;

      margin-left: 1rem;
      padding-bottom: 1rem;
    }
  }
}

@include mq-between($SmPhoneWidth, $PhoneWidth - 100) {
  .app-header {
    width: 93%;
    // box-shadow: none;
  }
}

@include mq-between($PhoneWidth - 100, $SmDesktopWidth) {
  .app-header {
    width: 50%;

    // box-shadow: none;
  }
}
</style>
