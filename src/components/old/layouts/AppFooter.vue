<template>
  <footer>
    <div class="footer-bg">
      <footer-bg />
    </div>
    <div class="app_footer container mb-1">
      <div class="app_footer__main ">
        <div class="about">
          <div>
            <img
              class="footer-logo"
              src="@/assets/images/old/logo.png"
              alt=""
            />
          </div>
          <h5 class="about__head">{{ $t("footer.aboutHead") }}</h5>
          <p class="about__text">{{ $t("footer.aboutText") }}</p>
          <div class="about__policy">
            <!-- ссылка либо модальное окно -->
            <a href="#" v-html="$t('footer.policy')"></a>
          </div>
        </div>
        <div class="menu">
          <div class="menu__link" v-for="(link, index) in menu" :key="index">
            <router-link :to="link.to">{{
              $t(`menu.${link.name}`)
            }}</router-link>
          </div>
        </div>
        <div class="contacts">
          <div class="contacts__social mb-1">
            <p class="contacts__social__head">{{ $t("footer.socialHead") }}</p>
            <div class="contacts__social__links">
              <a href="#" class="link">
                <telegram />
              </a>
              <a href="#" class="link">
                <zen />
              </a>
              <a href="#" class="link">
                <youtube />
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
          <form class="contacts__subscription mb-1" @submit.prevent>
            <div class="contacts__subscription__img">
              <mail-to-subs />
            </div>
            <input
              class="contacts__subscription__input"
              type="email"
              name="email"
              :placeholder="$t('footer.placeholder')"
            />
            <button class="contacts__subscription__button">
              {{ $t("footer.subscribe") }}
            </button>
          </form>
          <div class="contacts__address">
            <address class="address">
              <a class="address__item mb-1" href="tel:+7495777777">
                <div class="img">
                  <phone />
                </div>
                <span class="text">+7 495 777-777</span>
              </a>
              <a class="address__item mb-1" href="mailto:100days@mail.ru">
                <div class="img">
                  <mail />
                </div>
                <span class="text">100days@mail.ru</span>
              </a>
              <a
                class="address__item location"
                target="_blank"
                href="https://www.google.com/maps/place/%D0%90%D0%B4%D1%80%D1%88%D0%BF%D0%B0%D1%85,+%D0%A7%D0%B5%D1%85%D0%B8%D1%8F/@50.624301,16.0766222,1673m/data=!3m1!1e3!4m13!1m7!3m6!1s0x470b939c0970798b:0x400af0f66164090!2z0J_RgNCw0LPQsCwg0KfQtdGF0LjRjw!3b1!8m2!3d50.0755381!4d14.4378005!3m4!1s0x470e5f6c50cf8015:0x400af0f6614b370!8m2!3d50.6242869!4d16.0833997"
              >
                <!-- ссылку на карту гугл или яндекс -->
                <div class="img">
                  <location />
                </div>
                <span class="text" v-html="$t('footer.location')"></span>
              </a>
            </address>
            <div class="contacts__address__question">
              <a href="#">
                <div class="question">
                  <question />
                </div>
                <span class="text" v-html="$t('footer.question')"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright__text">
        <b>&copy;</b>
        2020 {{ $t("footer.copyright") }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["menu"],
  components: {
    telegram: () => import("@/assets/images/old/social/telegram.svg"),
    zen: () => import("@/assets/images/old/social/zen.svg"),
    instagram: () => import("@/assets/images/old/social/instagram.svg"),
    youtube: () => import("@/assets/images/old/social/youtube.svg"),
    facebook: () => import("@/assets/images/old/social/facebook.svg"),
    vk: () => import("@/assets/images/old/social/vk.svg"),
    mailToSubs: () => import("@/assets/images/old/social/mail-to-subs.svg"),
    phone: () => import("@/assets/images/old/social/phone.svg"),
    mail: () => import("@/assets/images/old/social/mail.svg"),
    location: () => import("@/assets/images/old/social/location.svg"),
    question: () => import("@/assets/images/old/social/question.svg"),
    footerBg: () => import("@/assets/images/old/bg-footer.svg")
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  .footer-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -999;
  }
  .app_footer {
    padding-top: 115px;
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
        justify-content: space-between;
        &__head {
          font-size: 16px;
        }
        &__text {
          font-size: 14px;
        }
        &__policy {
          font-size: 14px;
          line-height: 1.3em;
        }
      }
      .menu {
        width: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__link {
          width: 100%;
          font-size: 14px;
        }
      }
      .contacts {
        width: 600px;
        &__social {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &__head {
            font-size: 18px;
          }
          &__links {
            display: flex;
            justify-content: space-between;
            width: 230px;
            .link {
            }
          }
        }
        &__subscription {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 50px;
          &__img {
            position: absolute;
            width: 22px;
            left: 10px;
            top: 50%;
            transform: translate(0px, -50%);
            z-index: 1;
          }
          &__input {
            width: 60%;
            height: 100%;
            z-index: 0;
            background: $orange-4;
            padding-left: 45px;
            font-size: 18px;
            display: flex;
            align-items: center;
            letter-spacing: 0.05em;
            color: $white;
            &::placeholder {
              color: $white;
            }
          }
          &__button {
            width: 40%;
            height: 100%;
            color: $orange-2;
            font-family: $f-muller;
            font-weight: bold;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            cursor: pointer;
          }
        }
        &__address {
          display: flex;
          justify-content: space-between;
          .address {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-flow: column;
            max-height: 180px;
            &__item {
              display: flex;
              .img {
                // margin-right: 1rem;
              }
              .text {
                font-size: 14px;
                display: flex;
                align-items: center;
                letter-spacing: 0.05em;
              }
              &.location {
                line-height: 1.3em;
              }
            }
          }
          &__question {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            a {
              display: flex;
              .img {
              }
              .text {
                font-size: 14px;
                line-height: 1.3em;
                display: flex;
                align-items: center;
                letter-spacing: 0.05em;
              }
            }
          }
        }
      }
    }
  }
  .copyright {
    background: $purple-1;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__text {
      display: flex;
      color: $white;
      font-size: 14px;
      letter-spacing: 0.05em;
      b {
        margin-right: 0.5rem;
      }
    }
  }
}

@include mq($SmDesktopWidth, max) {
  footer {
    .bg {
      height: 102%;
    }
    .app_footer {
      margin-bottom: 3rem;
      &__main {
        justify-content: center;
        align-items: center;
        .menu,
        .about {
          display: none;
        }
        .contacts {
          display: flex;
          flex-direction: column;
          width: 300px;
          &__social {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &__head {
              font-size: 14px;
              margin-bottom: 1rem;
            }
          }
          &__subscription {
            height: 24px;
            order: 1;
            margin: 0;
            &__img {
            }
            &__input {
              font-size: 12px;
            }
            &__button {
              font-size: 14px;
            }
          }
          &__address {
            .address {
              display: none;
            }
            &__question {
              width: 100%;
              justify-content: center;
              align-items: center;
              margin-bottom: 1rem;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
