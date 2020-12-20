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
        <div class="name">
          <span class="first-name">{{ item.name.firstName }}</span>
          <span class="last-name">{{ item.name.lastName }}</span>
        </div>
        <div class="value">100 568 588 очков</div>
      </div>
      <div class="item__number">20</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "SchoolItem",
  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  background-color: #a29fd1;
  &:nth-child(2n) {
    background-color: #928fcd;
  }
  &:hover,
  .active,
  &--active {
    background-color: #928fcd;
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
      padding: 3px;
      border-radius: 50%;
      background-color: white;
      img {
        border-radius: 50%;
      }
    }
  }
  &__content {
    text-align: left;
    .name {
      color: #1a123d;
      font-size: 12px;
      line-height: 1.33em;
      margin-bottom: 4px;
      max-width: 146px;
      display: flex;
      flex-flow: column;
    }
    .value {
      font-size: 12px;
      line-height: 1em;
      color: white;
    }
  }
  &__wrap {
    padding: 7px 15px;
    display: flex;
  }
  &__number {
    font-size: 36px;
    line-height: 1em;
    margin-left: auto;
    color: white;
    display: flex;
    align-items: center;
  }
}
</style>
