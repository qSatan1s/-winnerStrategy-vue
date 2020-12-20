<template>
  <div class="account-about">
    <ul class="list-items">
      <li class="item" v-for="(item, index) in aboutNavigation" :key="index">
        <router-link class="item__link" :to="item.link">
          <span class="item__image">
            <component :is="item.image"></component>
          </span>
          <span class="item__title">{{ item.title }}</span>
          <span class="item__name">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import aboutNavigation from "./about-navigation";

export default {
  name: "accountAbout",
  components: {
    edit: () => import("@/assets/images/old/account/edit-2.svg"),
    person: () => import("@/assets/images/old/account/person-done.svg"),
    globe: () => import("@/assets/images/old/account/globe-2.svg"),
    book: () => import("@/assets/images/old/account/book-open.svg"),
    bar: () => import("@/assets/images/old/account/bar-chart-2.svg"),
    award: () => import("@/assets/images/old/account/award.svg")
  },
  data() {
    return {
      aboutNavigation: aboutNavigation
    };
  }
};
</script>

<style lang="scss" scoped>
.account-about {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 76px;
}
.list-items {
  .item {
    margin-bottom: 21.9px;
    &__link {
      color: white;
      font-size: 14px;
      line-height: 1.19em;
    }
    &__image {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
    &__title {
      color: $orange-2;
      font-weight: bold;
    }
    &__name {
    }
  }
}
@include mq($DesktopWidth, max) {
  .account-about {
    margin-left: 0;
  }
}
@include mq($SmDesktopWidth, max) {
  .account-about {
    justify-content: flex-start;
  }
}
@include mq-between(720px, $TableWidth) {
  .account-about {
    padding: 8px;
  }
}
@include mq(720px, max) {
  .account-about {
    padding: 8px;
  }
}
@include mq($PhoneWidth, max) {
  .list-items {
    .item {
      margin-bottom: 16px;
      &__link {
        font-size: 14px;
        line-height: 1em;
        letter-spacing: 0.05em;
      }
      &__image {
        width: 20px;
        height: 20px;
        margin-right: 2px;
      }
    }
  }
}
@include mq($SmPhoneWidth, max) {
  .list-items {
    .item {
      margin-bottom: 16px;
      &__link {
        font-size: 10px;
        line-height: 1.4em;
        letter-spacing: 0.05em;
      }
      &__image {
        width: 16px;
        height: 16px;
        margin-right: 2px;
      }
    }
  }
}
</style>
