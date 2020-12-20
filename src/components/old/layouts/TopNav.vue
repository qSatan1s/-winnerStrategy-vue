<template>
  <div class="nav pt-1">
    <div class="nav-phone">
      <div class="apps">
        <apps @click="openMenu" class="apps_img" />
        <img src="@/assets/images/old/logo.png" class="logo_img" alt="logo" />
      </div>

      <a class="nav-link cl_white" href="tel:+7495777777">
        <phone />
        <img class="phone" src="@/assets/images/old/social/phone.svg" alt />
        <span class="cl_white">+7 495 777-777</span>
      </a>
      <span class="exit">
        <exit />
      </span>
    </div>
    <div class="nav-mail">
      <a class="nav-link cl_white" href="mailto:100days@mail.ru">
        <mail />
        <span>100days@mail.ru</span>
      </a>
    </div>
    <transition name="slide">
      <div class="nav-search" v-if="isMenuOpen || currentWidth >= 992">
        <div class="wrap">
          <input
            class="cl_orange-2 bg_orange-4"
            type="search"
            :placeholder="$t('header.placeholder')"
            name="search"
          />
          <div class="icon">
            <search />
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide">
      <div class="nav-locale cl_white" v-if="isMenuOpen || currentWidth >= 992">
        <div class="nav-locale-title" @click="openLang = !openLang">
          <h5>{{ lang }}</h5>
          <arrow class="arrow" />
        </div>
        <transition name="slide">
          <ul v-if="openLang" class="cl_white bg_orange-2">
            <li @click="changeLang('Русский')" class="lang-link">
              <h5>Русский</h5>
            </li>
            <li @click="changeLang('English')" class="lang-link">
              <h5>English</h5>
            </li>
          </ul>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "Русский",
      isMenuOpen: false,
      openLang: false
    };
  },
  props: ["currentWidth"],
  components: {
    exit: () => import("@/assets/images/old/ui/exit.svg"),
    apps: () => import("@/assets/images/old/ui/apps.svg"),
    phone: () => import("@/assets/images/old/social/phone.svg"),
    mail: () => import("@/assets/images/old/social/mail.svg"),
    arrow: () => import("@/assets/images/old/ui/arrow-down.svg"),
    search: () => import("@/assets/images/old/ui/search.svg")
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.$emit("openMenu");
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    changeLang(lang) {
      this.openLang = false;
      this.lang = lang;
      this.lang == "Русский" ? this.setLocale("ru") : this.setLocale("en");
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  -moz-transition-duration: 0.24s;
  -webkit-transition-duration: 0.24s;
  -o-transition-duration: 0.24s;
  transition-duration: 0.24s;
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
  opacity: 1;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  opacity: 0;
}
.nav {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  white-space: nowrap;
  font-size: $fontOldMainSize;

  &-phone {
    flex: 1 1 auto;
    flex-wrap: wrap;

    .apps {
      display: none;
    }

    .exit {
      display: none;
    }
  }

  &-mail {
    flex: 1 1 auto;
  }

  &-search {
    flex: 10 0 auto;
    position: relative;
    .wrap {
      position: relative;
      width: 45%;
    }
    .icon {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      width: 100%;
      padding: 0.2rem;
      border-radius: 5px;

      &::placeholder {
        color: $orange-2;
      }
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
  }
  &-locale {
    position: relative;
    h5 {
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      z-index: 2;

      h5 {
        margin-right: 0.5rem;
      }
    }
    ul {
      border: 2px solid $orange-4;
      position: absolute;
      width: 100px;

      border-radius: 10px;
      left: -25%;
      padding-left: 1rem;
      padding-bottom: 1rem;
      z-index: 2;

      li {
        margin-top: 1rem;
        cursor: pointer;
      }
    }
  }
  .logo_img {
    width: 83px;
    height: 40px;
  }
}

@include mq-between($SmPhoneWidth, $SmDesktopWidth) {
  .nav {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .nav-phone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .apps,
    .exit {
      display: flex;
    }

    .apps {
      align-items: center;
      flex: 1;
      svg {
        cursor: pointer;
      }
      img {
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }

    .exit {
      flex: 0;
      cursor: pointer;
    }

    .nav-link {
      flex: 0.1;
      span {
        display: none;
      }
    }
  }
  .nav-mail {
    display: none;
  }

  .nav-locale,
  .nav-search {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 1rem;
  }
  .nav-locale {
    top: 60px;
    z-index: 5;
    display: flex;
    height: 34px;
    ul {
      position: relative;
      left: 0;
      width: auto;
      padding: 0.5rem 1rem;
      display: flex;
      margin-left: 1rem;
      li {
        margin: 0;
        padding: 0 1rem;
        border-left: 1px solid $white;
      }
      li:first-child {
        border: none;
        padding-left: 0;
      }
      li:last-child {
        padding-right: 0;
      }
    }
  }
  .nav-search {
    .wrap {
      width: 100%;
    }
    top: 100px;
    z-index: 5;
  }
}
@include mq($PhoneWidth, max) {
  .nav-locale,
  .nav-search {
    margin: 0;
  }
}
</style>
