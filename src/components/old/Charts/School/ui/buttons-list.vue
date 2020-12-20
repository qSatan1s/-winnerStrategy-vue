<template>
  <div class="buttons-list">
    <button class="button button--active">Показать 20 лучших</button>
    <button class="button">Показать меня</button>
  </div>
</template>

<script>
export default {
  name: "SchoolFiltersButtons"
};
</script>

<style lang="scss" scoped>
.button {
  font-size: 12px;
  line-height: 1em;
  border-radius: 5px;
  margin-right: 32px;
  min-width: 132px;
  padding: 8px 22px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &--active {
    background-color: #ffcca2;
  }
}
@include mq($SmDesktopWidth, max) {
  .button {
    padding-right: 15px;
    padding-left: 15px;
  }
}
@include mq($PhoneWidth, max) {
  .buttons-list {
    display: flex;
    justify-content: space-between;
    .button {
      padding: 5px 15px;
      margin-right: 0;
      min-width: 114px;
    }
  }
}
</style>
