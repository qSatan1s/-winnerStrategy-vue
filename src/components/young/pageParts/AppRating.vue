<template>
  <div class="app_rating">
    <div class="header mb-1">
      <h2 class="header__head cl_white">{{ $t("menu.rating") }}</h2>
      <router-link to="#" class="header__btn _button-home-young">
        {{ $t(`buttons.showRating`) }}
      </router-link>
    </div>
    <div class="main">
      <div class="main__your mr-2">
        <h3 class="main__your__head">Твой рейтинг</h3>
        <div class="main__your__rating">
          <p class="fullname">{{ profile.fullname }}</p>
          <div class="rating">
            <img
              class="rating__img"
              src="@/assets/images/young/rating_cup.png"
              alt="cup"
            />
            <div class="rating__more">
              <p class="rating__more__points">{{ profile.points }} очков</p>
              <p class="rating__more__position">{{ profile.position }} место</p>
              <p class="rating__more__text">Так держать!</p>
            </div>
          </div>
          <router-link to="#" class="btn_personal_account _button-home-young"
            >Личный кабинет</router-link
          >
          <!-- на btn_shape будет method -->
          <button class="btn_shape _button-home-young">
            <shape class="icon-shape" />
            Поделиться
          </button>
        </div>
      </div>
      <div class="main__rating_others">
        <h3 class="main__rating_others__head">Рейтинг других учеников</h3>
        <div class="main__rating_others__list">
          <div
            class="item"
            v-for="(item, index) in ratings"
            @click="openProfile(item.id)"
            :key="index"
          >
            <!-- При клике на item открывать профиль человека. -->
            <div class="item__position">
              <span :class="'item__icon item__icon--' + index">
                <star />
              </span>
              <p class="position">{{ index + 1 }} место</p>
            </div>
            <div class="item__profile">
              <div class="item__profile__name_avatar">
                <!-- dinamic img -->
                <img
                  class="avatar"
                  src="/images/young/rating/rating_avatar.jpg"
                  alt="avatar profile"
                />
                <p class="name">
                  {{ item.name.firstName + " " + item.name.lastName }}
                </p>
              </div>
              <div class="item__profile__points">
                <span class="img">
                  <star-points />
                </span>
                <p class="points">{{ item.rating.point }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="#" class="main__btn__adaptive _button-home-young"
        >Показать полный рейтинг</router-link
      >
    </div>
  </div>
</template>

<script>
import ratings from "./rating";

export default {
  //ratings получать сразу отсортированным по очкам пользователей от большего к меньшему
  methods: {
    // fillSvg(index) {
    //   let fill = "transparent";
    //   if (index == 0) {
    //     fill = "#FFD100";
    //   } else if (index == 1) {
    //     fill = "#FF9900";
    //   } else if (index == 2) {
    //     fill = "#DEE7EE";
    //   }
    //   return fill;
    // },
    openProfile(id) {
      console.log(id);
    }
  },
  components: {
    shape: () => import("@/assets/images/young/social/shape.svg"),
    star: () => import("@/assets/images/young/star.svg"),
    starPoints: () => import("@/assets/images/young/rating_star_points.svg")
  },
  computed: {
    profile() {
      return {
        id: 24322, //id в бд, чтобы открывать страницу пользователя
        position: 105, //будет ли позиция записыватся в бд?
        points: 10000,
        name: "Артём Липенко",
        fullname: "Липенко Артём Александрович",
        avatar: ""
      };
    },
    ratings() {
      return ratings;
    }
  }
};
</script>

<style lang="scss" scoped>
.app_rating {
  ._button-home-young {
    display: block;
    width: inherit;
    height: 45px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    cursor: pointer;
    font-size: $fontYoungMainSize;
    font-weight: bold;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__head {
      font-size: 48px;
    }
    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 263px;
      height: 45px;
      &:hover {
        color: $background;
        background-color: $white;
      }
    }
  }
  .main {
    display: flex;
    &__your {
      min-width: 290px;
      max-width: 290px;
      &__head {
        font-size: 20px;
        color: $white;
        font-weight: normal;
        margin-bottom: 0.5rem;
      }
      &__rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(180deg, #706cff -55.77%, #4e48f1 100%);
        border: 2px solid #4d48eb;
        box-shadow: 0px 7px 16px rgba(21, 16, 213, 0.4);
        border-radius: 10px;
        .fullname {
          margin: 2rem 0;
          font-weight: 800;
          font-size: 24px;
          line-height: 33px;
          color: $white;
          text-align: center;
        }
        .rating {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
          &__img {
            margin-right: 1rem;
          }
          &__more {
            &__points {
              font-size: 15px;
              line-height: 20px;
              color: #8f8cff;
            }
            &__position {
              font-weight: 800;
              font-size: 25px;
              line-height: 34px;
              color: $white;
            }
            &__text {
              font-weight: 600;
              font-size: 20px;
              line-height: 27px;
              color: $white;
            }
          }
        }
        .btn_personal_account,
        .btn_shape {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 45px;
          color: $white;
          margin-bottom: 1.5rem;
          &:hover {
            color: $background;
            background-color: $white;
          }
        }
        .btn_personal_account {
          background: #5a56ef;
        }
        .btn_shape {
          justify-content: space-between;
          background: transparent;
          padding: 0 1rem;
          margin-bottom: 2.5rem;
          &:hover .icon-shape path {
            fill: $background;
          }
        }
      }
    }
    &__rating_others {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;
      &__head {
        font-size: 20px;
        color: $white;
        font-weight: normal;
        margin-bottom: 0.5rem;
      }
      &__list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        .item {
          display: flex;
          height: 75px;
          border: 2px solid #4d48eb;
          border-radius: 10px;
          padding-left: 1rem;
          // margin-bottom: 0.5rem;
          background: #605cf8;
          cursor: pointer;
          &__icon {
            margin-right: 15px;
          }
          &__icon svg path {
            fill: transparent;
          }
          &__icon--0 svg path {
            fill: #ffd100;
          }
          &__icon--1 svg path {
            fill: #ff9900;
          }
          &__icon--2 svg path {
            fill: #dee7ee;
          }
          &:hover {
            border: 2px solid $white;
          }
          &:last-child {
            margin-bottom: 0;
          }
          &__position {
            position: relative;
            display: flex;
            align-items: center;
            margin-right: 3rem;
            max-width: 160px;
            width: 100%;
            .img {
              margin-right: 1rem;
              width: 36px;
            }
            .position {
              font-weight: bold;
              font-size: 25px;
              line-height: 34px;
              color: $white;
            }
          }
          &__profile {
            display: flex;
            &__name_avatar {
              display: flex;
              align-items: center;
              max-width: 340px;
              width: 340px;
              margin-right: 6rem;
              .avatar {
                max-width: 36px;
                max-height: 36px;
                margin-right: 0.5rem;
                border-radius: 50px;
              }
              .name {
                color: $white;
                font-weight: bold;
                font-size: 25px;
                line-height: 34px;
              }
            }
            &__points {
              position: relative;
              display: flex;
              align-items: center;
              .img {
                position: absolute;
                left: -15px;
              }
              .points {
                width: 140px;
                text-align: center;
                font-weight: 800;
                font-size: 20px;
                line-height: 27px;
                color: #333;
                background: #ffd100;
                border-radius: 40px;
              }
            }
          }
        }
      }
    }
    &__btn__adaptive {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 45px;
      display: none;
      &:hover {
        color: $background;
        background-color: $white;
      }
    }
  }
}
@include mq($DesktopWidth, max) {
  .app_rating {
    .main {
      &__rating_others {
        &__list {
          .item {
            &__position {
              margin-right: 1rem;
            }
            &__profile {
              &__name_avatar {
                max-width: 220px;
                width: 220px;
                margin-right: 4rem;
                .name {
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .app_rating {
    .main {
      &__your {
        max-width: initial;
      }
      &__rating_others {
        &__list {
          .item {
            height: 132px;
            display: none;
            margin-bottom: 0.5rem;
            &:nth-child(-n + 3) {
              display: flex;
            }
            &__position {
              width: 185px;
              .img {
                width: 29px;
              }
              .position {
                font-size: 18px;
                line-height: 25px;
              }
            }
            &__profile {
              width: 100%;
              justify-content: center;
              align-items: flex-start;
              flex-direction: column;
              &__name_avatar {
                margin: 0;
                margin-bottom: 1rem;
                max-width: 100%;
                width: 100%;
                font-size: 22px;
              }
              &__points {
                margin-left: 0.8rem;
                .img {
                  width: 30px;
                  left: -13px;
                }
                .points {
                  width: 100px;
                  font-size: 15px;
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@include mq($TableWidth, max) {
  .app_rating {
    .header {
      &__btn {
        display: none;
      }
    }
    .main {
      flex-direction: column;
      justify-content: center;
      &__your {
        margin-right: 0;
        margin-bottom: 2rem;
      }
      &__rating_others {
        margin-bottom: 1rem;
      }
      &__btn__adaptive {
        display: flex;
      }
    }
  }
}
@include mq($PhoneWidth, max) {
  .app_rating {
    .main {
      &__rating_others {
        &__list {
          .item {
            height: 166px;
            justify-content: center;
            flex-direction: column;
            padding-left: 2rem;
            &__position {
              margin-right: 0;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
@include mq($PhoneWidth, max) {
  .app_rating {
    .main {
      &__rating_others {
        &__list {
          .item {
            padding-left: 1rem;
          }
        }
      }
    }
  }
}
</style>
