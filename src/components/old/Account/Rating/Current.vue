<template>
  <div>
    <div class="current-people hide-for-smtablet">
      <div class="current-people__title">ЛИЧНЫЙ РEЙТИНГ</div>
      <div class="current-people__avatar">
        <img :src="ruFlag" alt="" />
        <img
          src="https://scontent.fiev20-1.fna.fbcdn.net/v/t1.0-1/c33.0.200.200a/p200x200/18582344_104663976786030_3200553558879240970_n.jpg?_nc_cat=110&amp;_nc_sid=7206a8&amp;_nc_ohc=1aHf_G819l8AX8HLLBW&amp;_nc_ht=scontent.fiev20-1.fna&amp;oh=bf3d87e13b005275af7dc8ebd35d1f70&amp;oe=5EEFC07F"
          alt=""
        />
      </div>
      <div class="current-people__name">Артём Грачёвский</div>
      <div class="current-people__count">1056858 очков</div>
      <div class="current-people__position-count">1089</div>
      <div class="current-people__position-name">место</div>
    </div>
    <div class="current-people show-for-smtablet">
      <div class="current-people__avatar-name">
        <div class="current-people__avatar">
          <img
            src="https://scontent.fiev20-1.fna.fbcdn.net/v/t1.0-1/c33.0.200.200a/p200x200/18582344_104663976786030_3200553558879240970_n.jpg?_nc_cat=110&amp;_nc_sid=7206a8&amp;_nc_ohc=1aHf_G819l8AX8HLLBW&amp;_nc_ht=scontent.fiev20-1.fna&amp;oh=bf3d87e13b005275af7dc8ebd35d1f70&amp;oe=5EEFC07F"
            alt=""
          />
          <!-- <img src="@/assets/images/old/countries/ru.png" alt="" /> -->
        </div>
        <div class="current-people__name">Артём Грачёвский</div>
      </div>
      <div class="current-people__position">
        <div class="current-people__position-icon">
          <rating />
        </div>
        <div class="current-people__position-count">1089</div>
        <div class="current-people__position-name">место</div>
      </div>
      <div class="current-people__count-wrap">
        <div class="current-people__count-icon">
          <star />
        </div>
        <div class="current-people__count">1056858 очков</div>
      </div>
    </div>
  </div>
</template>

<script>
// import ruFlag from "@/assets/images/old/countries/ru.png";

export default {
  name: "PersonCurrent",
  components: {
    rating: () => import("@/assets/images/old/account/rating-pin.svg"),
    star: () => import("@/assets/images/old/account/star-1.svg")
  },
  // data(){
  //   return {
  //     ruFlag: ruFlag
  //   }
  // }
  computed: {
    // ruFlag() {
    //   return ruFlag;
    // }
    // ruFlag: () => import("@/assets/images/old/countries/ru.png")
  }
};
</script>

<style lang="scss" scoped>
.show-for-smtablet.current-people {
  display: none;
  padding: 0;
}
.current-people {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  overflow: hidden;
  &__title {
    color: $violet;
    font-size: 14px;
    font-weight: bold;
    line-height: 1em;
    text-transform: uppercase;
  }
  &__avatar {
    margin-top: 16px;
    width: 112px;
    height: 112px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: relative;
    img {
      position: relative;
      border-radius: 50%;
    }
    &::before {
      z-index: 0;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(255, 135, 33, 1) 0%,
        rgba(247, 233, 105, 1) 100%
      );
    }
  }
  &__name {
    max-width: 100px;
    margin-top: 14px;
    color: $orange;
    font-size: 18px;
    line-height: 1.28em;
    text-align: center;
  }
  &__count {
    margin-top: 3px;
    color: $violet;
    font-size: 12px;
    line-height: 1em;
  }
  &__position-count {
    margin-top: 11px;
    font-size: 36px;
    line-height: 1em;
    color: $orange;
  }
  &__position-name {
    font-size: 12px;
    line-height: 1em;
    color: $orange;
  }
}
@include mq($SmDesktopWidth, max) {
  .current-people {
    padding: 4px 8px;
    background-color: white;
    flex-flow: row;
    justify-content: space-between;
    &__avatar,
    &__title,
    &__name,
    &__count,
    &__position-count,
    &__position-name {
      margin-top: 0;
    }
    &__avatar {
      width: 24px;
      height: 24px;
      padding: 1px;
      img {
        width: 22px;
        height: 22px;
        object-fit: cover;
      }
    }
    &__title {
      display: none;
    }
    &__name {
      margin-left: 6px;
      max-width: 100%;
      font-size: 12px;
      line-height: 1.33em;
    }
    &__position-name,
    &__position-count {
      font-size: 12px;
      line-height: 1em;
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .show-for-smtablet.current-people {
    display: flex;
  }
  .hide-for-smtablet {
    display: none;
  }
  .show-for-smtablet.current-people {
    border-radius: 0;
    padding: 4px 24px 4px 8px;
    &__avatar-name {
      display: flex;
      align-items: center;
    }
  }
  .current-people {
    &__count-wrap,
    &__position,
    &__avatar-name {
      display: flex;
      align-items: center;
    }
    &__position-icon,
    &__count-icon {
      margin-right: 8px;
    }
    &__position-name {
      margin-left: 2px;
    }
  }
}
@include mq(480px, max) {
  .show-for-smtablet.current-people {
    padding: 4px 10px 4px 4px;
  }
  .current-people {
    &__avatar-name {
      display: none;
    }
  }
}
</style>
