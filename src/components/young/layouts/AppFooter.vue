<template>
  <footer class="pt-4">
    <div class="app_footer container">
      <div class="app_footer__main">
        <div class="about">
          <logo />
          <h5 class="about__head mt-2">{{ $t("footer.aboutHead") }}</h5>
          <p class="about__text">
            {{ $t("footer.aboutText") }}
          </p>
        </div>
        <div class="menu">
          <div class="menu__link" v-for="(link, index) in menu" :key="index">
            <router-link :to="link.to">{{
              $t(`menu.${link.name}`)
            }}</router-link>
          </div>
        </div>
        <div class="contacts">
          <div class="contacts__social mb-2">
            <p class="contacts__social__head">{{ $t("footer.socialHead") }}:</p>
            <div class="contacts__social__links">
              <a href="#" class="link">
                <telegram />
              </a>
              <a href="#" class="link">
                <mail-ru />
              </a>
              <a href="#" class="link">
                <twitter />
              </a>
              <a href="#" class="link">
                <facebook />
              </a>
              <a href="#" class="link">
                <instagram />
              </a>
              <a href="#" class="link">
                <vk />
              </a>
            </div>
          </div>
          <form class="contacts__subscription mb-3" @submit.prevent>
            <div class="contacts__subscription__img">
              <mail-subs />
            </div>
            <!-- <img
              
              src="@/assets/images/young/social/mail-subs.svg"
              alt="subscription-mail"
            /> -->
            <input
              class="contacts__subscription__input pl-3"
              type="email"
              name="email"
              :placeholder="$t('footer.placeholder')"
            />
            <button class="contacts__subscription__button">
              {{ $t("footer.subscribe") }}
            </button>
          </form>
          <address class="contacts__address">
            <a class="contacts__address__item mb-2" href="tel:+7495777777">
              <span class="phone">
                <phone />
              </span>
              <span class="text">+7 495 777-777</span>
            </a>
            <a
              class="contacts__address__item mb-2"
              href="mailto:100days@mail.ru"
            >
              <span class="img">
                <mail />
              </span>
              <span class="text">100days@mail.ru</span>
            </a>
            <a class="contacts__address__item" href="#">
              <question />
              <!-- <img
                class="img"
                src="@/assets/images/young/social/question.svg"
                alt="question"
              /> -->
              <span class="text" v-html="$t('footer.question')"></span>
            </a>
            <a class="contacts__address__item" href="#">
              <!-- ссылку на карту гугл или яндекс -->
              <location />
              <!-- <img
                class="img"
                src="@/assets/images/young/social/location.svg"
                alt="location"
              /> -->
              <span class="text" v-html="$t('footer.location')"></span>
            </a>
          </address>
        </div>
      </div>
      <div class="app_footer__projects mt-2">
        <h5 class="app_footer__projects__head">{{ $t("footer.projects") }}:</h5>
        <div class="app_footer__projects__list">
          <a href="#">
            <div class="img">
              <logo />
            </div>
          </a>
          <a href="#">
            <div class="img">
              <logo />
            </div>
          </a>
          <a href="#">
            <div class="img">
              <logo />
            </div>
          </a>
          <a href="#">
            <div class="img">
              <logo />
            </div>
          </a>
        </div>
      </div>
      <div class="app_footer__copyright_policy pt-3 pb-2">
        <p class="app_footer__copyright_policy__copyright mr-1">
          <b>&copy;</b> 2020 {{ $t("footer.copyright") }}
        </p>
        <!-- ссылка либо модальное окно -->
        <a
          href="#"
          class="app_footer__copyright_policy__policy"
          v-html="$t('footer.policy')"
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["menu"],
  components: {
    logo: () => import("@/assets/images/young/logo.svg"),
    telegram: () => import("@/assets/images/young/social/telegram.svg"),
    mailRu: () => import("@/assets/images/young/social/mail-ru.svg"),
    twitter: () => import("@/assets/images/young/social/twitter.svg"),
    facebook: () => import("@/assets/images/young/social/facebook.svg"),
    instagram: () => import("@/assets/images/young/social/instagram.svg"),
    vk: () => import("@/assets/images/young/social/vk.svg"),
    mailSubs: () => import("@/assets/images/young/social/mail-subs.svg"),
    phone: () => import("@/assets/images/young/social/phone.svg"),
    question: () => import("@/assets/images/young/social/question.svg"),
    location: () => import("@/assets/images/young/social/location.svg"),
    mail: () => import("@/assets/images/young/social/mail.svg")
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  &::before {
    @include pseudo();
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $gradient-blue;
    border-top: 2px solid $blue-border;
    z-index: -1;
  }
  .app_footer {
    font-size: 18px;
    &__main {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 100%;
      color: $white;
      a {
        color: $white;
      }
      .about {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &__logo {
          font-weight: bold;
          font-size: 14px;
        }
        &__text {
          font-size: 14px;
        }
      }
      .menu {
        width: 190px;
        height: 355px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__link {
          width: 100%;
          line-height: 1.5em;
          font-weight: bold;
          font-size: 18px;
        }
      }
      .contacts {
        width: 640px;
        &__social {
          position: relative;
          max-width: 90%;
          display: flex;
          flex-wrap: wrap;
          &__head {
            font-size: 18px;
            line-height: 1.5em;
            margin-right: 2rem;
            // margin-bottom: 0.5rem;
          }
          &__links {
            position: absolute;
            height: 100%;
            top: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 285px;
          }
        }
        &__subscription {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          max-width: 530px;
          height: 60px;
          &__img {
            position: absolute;
            width: 26px;
            left: 15px;
            top: 50%;
            transform: translate(0px, -50%);
            z-index: 1;
          }
          &__input {
            width: 100%;
            height: 100%;
            z-index: 0;
            background: $white;
            font-size: 18px;
            line-height: 3.3em;
            color: $grey;
            border-radius: 30px;
            padding-right: 225px;
            &::placeholder {
              color: $grey;
            }
          }
          &__button {
            position: absolute;
            top: 0;
            right: -1%;
            width: 215px;
            height: 100%;
            border-radius: 30px;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            color: $white;
            background: $bg-orange;
            cursor: pointer;
            font-family: $f-nunito;
          }
        }
        &__address {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-flow: column wrap;
          max-height: 220px;
          &__item {
            display: flex;
            align-items: start;
            .img {
              margin-right: 0.5rem;
            }
            .text {
              font-size: 20px;
              line-height: 1.3em;
            }
          }
        }
      }
    }
    &__projects {
      width: 100%;
      display: flex;
      flex-direction: column;
      &__head {
        color: $white;
        font-weight: 600;
        font-size: 18px;
        line-height: 60px;
      }
      &__list {
        display: flex;
        flex-wrap: wrap;
        .img {
          margin-right: 2rem;
        }
      }
    }
    &__copyright_policy {
      width: 100%;
      font-weight: 600;
      line-height: 1.3em;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      justify-content: center;
      &__copyright {
        color: $white;
        font-size: 14px;
      }
      &__policy {
        display: flex;
        align-items: center;
        color: $white;
        font-size: 14px;
      }
    }
  }
}

@include mq($DesktopWidth, max) {
  footer {
    .app_footer {
      &__main {
        .about {
          width: 260px;
          &__text {
            max-width: 90%;
          }
        }
        .menu {
          width: 200px;
        }
        .contacts {
          width: auto;
          &__social {
            max-width: 100%;
            &__head {
              margin-bottom: 0.5rem;
            }
            &__links {
              position: initial;
              height: initial;
              width: 100%;
            }
          }
          &__address {
            max-height: initial;
            &__item:last-child {
              margin-top: 2rem;
            }
          }
        }
      }
      &__projects {
        &__list {
          justify-content: space-around;
          .img {
            margin-right: 0;
          }
        }
      }
    }
  }
}

@include mq($SmDesktopWidth, max) {
  footer {
    .app_footer {
      &__main {
        .contacts {
          &__subscription {
            &__input {
              padding-right: 160px;
            }
            &__button {
              width: 152px;
            }
          }
        }
      }
    }
  }
}

@include mq($TableWidth, max) {
  footer {
    .app_footer {
      &__main {
        flex-wrap: wrap;
        justify-content: center;
        .about,
        .menu {
          margin-bottom: 3rem;
        }
        .about {
          margin-right: 2rem;
        }
        .menu {
          margin-left: 2rem;
          margin-right: 0;
        }
        .contacts {
          &__social {
            &__head {
              width: 100%;
              margin-right: 0;
            }
            &__links {
              width: 320px;
            }
          }
          &__subscription {
            max-width: initial;
            &__input {
              padding-right: 175px;
            }
            &__button {
              width: 173px;
            }
          }
        }
      }
      &__projects {
        &__list {
          justify-content: space-between;
          align-items: center;
          .img {
            margin-right: 0;
          }
        }
      }
      &__copyright_policy {
        flex-wrap: wrap;
        &__copyright,
        &__policy {
          width: 100%;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        &__copyright {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}

@include mq($PhoneWidth, max) {
  footer {
    .app_footer {
      &__main {
        justify-content: space-around;
        .about,
        .menu {
          margin-right: 0;
          margin-left: 0;
          width: 100%;
          align-items: center;
          text-align: center;
        }
        .contacts {
          &__social {
            justify-content: center;
            &__head {
              width: initial;
            }
            &__links {
              width: 100%;
            }
          }
          &__subscription {
            max-width: initial;
            height: 55px;
            &__input {
              padding-right: 135px;
              font-size: 14px;
            }
            &__button {
              width: 127px;
              font-size: 18px;
            }
          }
          &__address {
            &__item {
              align-items: center;
            }
          }
        }
      }
      &__projects {
        &__list {
          justify-content: center;
        }
      }
    }
  }
}
</style>
