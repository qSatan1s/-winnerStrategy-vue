<template>
  <div class="buttons-list">
    <button class="button button--active">Показать 20 лучших</button>
    <button class="button">Показать меня</button>
  </div>
</template>

<script>
export default {
  name: "PersonButtonsList"
};
</script>

<style lang="scss" scoped>
.buttons-list {
  // margin-top: 8px;
  display: flex;
  justify-content: space-between;
  .button {
    padding: 7px;
    width: auto;
    max-width: 131px;
    min-width: 131px;
    border-radius: 5px;
    font-size: 12px;
    line-height: 1em;
    color: $violet;
    cursor: pointer;
    &--active {
      background-color: $orange;
      color: white;
    }
  }
}
@include mq($PhoneWidth, max) {
  .buttons-list {
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    .button {
      min-width: 0;
    }
  }
}
</style>
