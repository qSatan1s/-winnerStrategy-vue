<template>
  <div class="topnav bg_gradient-blue" :class="{ showMenu: isMenuOpen }">
    <div class="nav container">
      <div class="nav-search">
        <div class="search-icon">
          <search />
        </div>
        <input
          class="cl_white bg_gradient-blue"
          type="search"
          :placeholder="$t('header.placeholder')"
          name="search"
        />
      </div>
      <div class="nav-contacts">
        <a class="nav-phone cl_white" href="tel:+7495777777">
          <h3>+7 495 777-777</h3>
        </a>
        <a class="nav-mail cl_white" href="mailto:100days@mail.ru">
          <h3>100days@mail.ru</h3>
        </a>
      </div>
      <div class="nav-locale cl_white">
        <div class="nav-locale-title" @click="openLang = !openLang">
          <h3>{{ lang }}</h3>
          <arrow class="arrow" />
        </div>
        <transition name="slide">
          <ul v-if="openLang" class="cl_white bg_gradient-blue">
            <li @click="changeLang('Русский')" class="lang-link">
              <h3>Русский</h3>
            </li>
            <li @click="changeLang('English')" class="lang-link">
              <h3>English</h3>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isMenuOpen"],
  data() {
    return {
      lang: "Русский",
      openLang: false
    };
  },
  components: {
    search: () => import("@/assets/images/young/ui/search.svg"),
    arrow: () => import("@/assets/images/young/ui/arrow-down.svg")
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    changeLang(lang) {
      this.openLang = false;
      this.lang = lang;
      lang == "Русский" ? this.setLocale("ru") : this.setLocale("en");
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}

.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.topnav {
  padding: 1.25rem 0;
  border: 2px solid $blue-border;
}
.nav {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: $fontYoungMainSize;
  white-space: nowrap;

  &-search {
    flex: 0.5 1 auto;
    input {
      padding: 0.2rem;
      // padding-left: 1.5rem;
      padding-left: 2rem;
      border-radius: 70px;
      &::placeholder {
        color: $white;
        font-size: 16px;
      }
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
    position: relative;
    .search-icon {
      z-index: 1;
      cursor: pointer;
      position: absolute;
      transform: translateY(calc(-50% - 2px));
      top: 50%;
      left: 9px;
    }
  }

  &-locale {
    position: relative;

    &-title {
      display: flex;
      cursor: pointer;
      z-index: 2;
    }
    ul {
      border: 2px solid #4d48eb;
      position: absolute;
      width: 148px;

      border-radius: 10px;
      left: -17.5%;
      padding-left: 1rem;
      padding-bottom: 1rem;

      li {
        margin-top: 1.5rem;
        cursor: pointer;
      }
    }
  }

  &-contacts {
    display: flex;
    font-weight: 600;
    a + a {
      margin-left: 4rem;
    }
  }
}

@include mq($SmDesktopWidth, max) {
  .topnav {
    padding: 0;
    max-height: 0;
    border: none;
    overflow: hidden;
  }

  .nav-contacts,
  .nav-locale {
    top: 0;
    opacity: 0;
  }
  .topnav.showMenu {
    display: flex;
    .nav-contacts,
    .nav-locale {
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 1;
      align-items: center;
      z-index: 2;
      width: 100%;
      transition: all 0.5s ease;
    }
    .nav-search {
      display: none;
    }

    .nav-contacts {
      flex-flow: column nowrap;
      align-items: center;
      top: 6.75%;
      padding: 1.5rem 0;
      border: 2px solid $blue-border;
      background-color: $case-background-image;

      .nav-mail {
        margin: 0;
      }
    }
    .nav-locale {
      justify-content: center;
      top: 8%;
      width: 100%;
      border: 2px solid $blue-border;
      background: $case-background-image;
      padding: 1.5rem;
      height: 79px;
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
  }
}
@include mq-between($PhoneWidth, $TableWidth) {
  .topnav.showMenu {
    .nav-contacts {
      top: 8%;
    }
    .nav-locale {
      top: 9.5%;
    }
  }
}
@include mq-between($TableWidth, $SmDesktopWidth) {
  .topnav.showMenu {
    .nav-contacts {
      top: 10.5%;
    }
    .nav-locale {
      top: 12.5%;
    }
  }
}
</style>
