<template>
  <div class="item" @click="$emit('updateChart')">
    <div class="item__wrap">
      <div class="item__avatar">
        <div class="img-wrap">
          <img
            src="https://scontent.fiev20-1.fna.fbcdn.net/v/t1.0-1/c33.0.200.200a/p200x200/18582344_104663976786030_3200553558879240970_n.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=1aHf_G819l8AX8HLLBW&_nc_ht=scontent.fiev20-1.fna&oh=bf3d87e13b005275af7dc8ebd35d1f70&oe=5EEFC07F"
            alt=""
          />
        </div>
      </div>
      <div class="item__content">
        <div class="name">Артём Грачёвски</div>
        <div class="value">1056858 очков</div>
      </div>
      <div class="item__number">1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonItem"
};
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  &:hover,
  .active,
  &--active {
    background-color: $orange--light;
  }
  &__avatar {
    margin-right: 8px;
    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      overflow: hidden;
      img {
        border-radius: 50%;
        z-index: 1;
      }
      position: relative;
      padding: 3px;
      border-radius: 50%;
      &::before {
        z-index: 1;
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
  }
  &__content {
    text-align: left;
    .name {
      color: #ff8721;
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 4px;
      max-width: 77px;
    }
    .value {
      font-size: 12px;
      line-height: 1em;
      color: $violet;
    }
  }
  &__wrap {
    padding: 5px 15px;
    display: flex;
  }
  &__number {
    font-size: 36px;
    line-height: 1em;
    margin-left: auto;
    color: $orange;
    display: flex;
    align-items: center;
  }
}
</style>
