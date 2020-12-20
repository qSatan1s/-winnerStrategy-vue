<template>
  <div class="contanier">
    <div class="account-wrap">
      <div class="account-banner">
        <!-- <gl class="logo" /> -->
        <div class="name">Личный кабинет ученика</div>
      </div>
      <div class="account-footer">
        <div 
          class="account-sidebar"
          @mouseover="isHovering = true" 
          @mouseout="isHovering = false" 
          :class="{'account-sidebar--active': isHovering}"
        >
          <div class="account__avatar">
            <div class="image-wrap">
              <img
                class="image"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo"
                alt=""
              />
            </div>
          </div>
          <!-- <div class="account__name">
            <div class="name">Артём Грачёвский</div>
          </div> -->
          <div class="account__navigation">
            <ul class="list-items">
              <li class="item" v-for="(item, index) in navigation" :key="index">
                <router-link class="item__link" :to="item.link">
                  <div class="item__image">
                    <component :is="item.image"></component>
                  </div>
                  <span class="item__name">{{ item.name }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="account-content">
          <!-- <mentor></mentor> -->
          <component :is="currentPage"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "./navigation";

export default {
  name: "Account",
  data() {
    return {
      currentPage: "about",
      navigation: navigation,
      isHovering: false
    };
  },
  components: {
    edit: () => import("@/assets/images/old/account/edit-2.svg"),
    person: () => import("@/assets/images/old/account/person-done.svg"),
    globe: () => import("@/assets/images/old/account/globe-2.svg"),
    book: () => import("@/assets/images/old/account/book-open.svg"),
    bar: () => import("@/assets/images/old/account/bar-chart-2.svg"),
    award: () => import("@/assets/images/old/account/award.svg"),
    mentor: () => import("./Mentor"),
    about: () => import("./About"),
    rating: () => import("./Rating"),
    road_map: () => import("./RoadMap")
  },
  watch: {
    $route(to) {
      this.currentPage = to.params.page;
    }
  },
  computed: {
    page() {
      return this.$route.params.page;
    }
  }
};
</script>

<style lang="scss" scoped>
.account {
  &-wrap {
    background-color: $purple-1;
  }
  &-banner {
    padding: 14px;
    background-color: $purple-2;
    color: white;
    .name {
      text-align: center;
      font-size: 24px;
      line-height: 1.16em;
    }
  }
  &-footer {
    padding: 24px;
    display: flex;
    justify-content: space-between;
  }
  &-content {
    width: 1047px;
    // background-color: #d5d2ff;
    border-radius: 5px;
  }
  &-sidebar {
    border-radius: 5px;
    min-height: 493px;
    color: white;
    padding: 16px 8px 0;
    display: flex;
    flex-flow: column;
    // width: get-percent(208, 1120);
    // max-width: 208px;
    width: 48px;
    background-color: $purple-2;
    overflow: hidden;
  }
  &__avatar {
    display: flex;
    justify-content: center;
    .image-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      background: linear-gradient(
        0deg,
        rgba(88, 83, 160, 1) 0%,
        rgba(159, 227, 229, 1) 100%
      );
    }
    .image {
      width: 26px;
      height: 26px;
      border-radius: 50%;
    }
  }
  // &__name {
  //   margin-top: 19px;
  //   display: flex;
  //   justify-content: center;
  //   .name {
  //     max-width: 112px;
  //     text-align: center;
  //     font-size: 18px;
  //     line-height: 1em;
  //   }
  // }
  &__navigation {
    margin-top: 15px;
    position: relative;
    height: 100%;
    .list-items {
      transition: all 0.2s ease-in-out;
      padding-top: 17px;
      top: 0;
      left: 4px;
      position: absolute;
      background-color: #423E80;
      height: 100%;
      // margin-left: 4px;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 14.8px;
        max-height: 24px;
        &:last-child {
          margin-bottom: 0;
        }
        &__link {
          transition: all 0.0s ease-in-out;
          
          color: white;
          display: flex;
          align-items: center;
          &:hover {
            color: $orange-2;
            .item__image svg path {
              fill: $orange-2 !important;
            }
          }
        }
        &__image {
          svg {            
            width: 24px;
            height: 24px;
            path {
              transition: all 0.2s ease-in-out;
            }
          }
        }
        &__name {
          transition: all 0.2s ease-in-out;
          margin-left: 6px;
          opacity: 0;
          font-size: 14px;
          line-height: 1em;
        }
      }
    }
  }
  &-sidebar--active {
    overflow: visible;
    .account__navigation  {
      .list-items {
        min-width: 204px;
        z-index: 3;
        .item {
          &__name {
            opacity: 1;
          }
        }
      }
    }
  }
}
@include mq($DesktopWidth, max) {
  .account {
    &-content {
      width: get-percent(686, 922);
    }
    // &-sidebar {
    //     width: get-percent(208, 1120);
    // }
  }
}
@include mq($SmDesktopWidth, max) {
  .account {
    &-banner {
      .name {
        font-size: 18px;
        line-height: 1.28em;
      }
    }
    &-content {
      width: get-percent(456, 702);
    }
    // &-sidebar {
    //     width: get-percent(208, 1120);
    // }
  }
}
@include mq($TableWidth, max) {
  .account {
    &-content {
      width: get-percent(450, 702);
    }
    // &-sidebar {
    //     width: get-percent(208, 1120);
    // }
  }
}
@include mq($DesktopWidth, max) {
  .account {
    &-banner {
      width: calc(100% - 48px);
      margin-left: auto;
    }
    &-wrap {
      border-radius: 5px;
      overflow: hidden;
    }
    &-content {
      width: calc(100% - 48px);
    }
    &-footer {
      padding: 0;
    }
    &-sidebar {
      width: 48px;
      border-radius: 0px;
      min-height: 453px;
    }
    &__navigation {
      margin-top: 32px;
      .list-items {
        .item {
          // justify-content: center;
          // &__name {
          //   display: none;
          // }
          &__image {
            margin: 0;
          }
        }
      }
    }
    &__avatar {
      .image-wrap {
        width: 32px;
        height: 32px;
      }
      .image {
        width: 26px;
        height: 26px;
      }
    }
    &__name {
      display: none;
    }
    &-sidebar {
      margin-top: -51px;
    }
  }
}
@include mq($PhoneWidth, max) {
  .account-sidebar {
    min-height: 440px;
  }
}
@include mq(323px, max) {
  .account-sidebar {
    margin-top: -74px;
    min-height: 42px;
  }
}
</style>
