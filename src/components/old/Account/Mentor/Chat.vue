<template>
  <div class="chart-block">
    <div class="chart-item chart-item--left">
      <div class="chart-item__check-item chart-item__check-item--checked">
        <div class="mic-outline">
          <checkmark></checkmark>
        </div>
      </div>
      Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...
    </div>
    <div class="chart-item chart-item--left">
      <div class="chart-item__check-item chart-item__check-item--checked">
        <div class="mic-outline">
          <checkmark></checkmark>
        </div>
      </div>
      Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...
    </div>
    <div class="chart-item chart-item--left">
      <div class="chart-item__check-item chart-item__check-item--checked">
        <div class="mic-outline">
          <checkmark></checkmark>
        </div>
      </div>
      Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...
    </div>
    <div class="chart-item chart-item--right">
      <div class="chart-item__check-item chart-item__check-item--checked">
        <div class="mic-outline">
          <checkmark></checkmark>
        </div>
      </div>
      Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...Сообщение...
    </div>
  </div>
</template>

<script>
export default {
  components: {
    checkmark: () => import("@/assets/images/old/account/checkmark-circle.svg")
  }
};
</script>

<style lang="scss" scoped>
.chart-block {
  height: 100%;
  padding: 10px 12px;
  display: flex;
  flex-flow: column;
  // max-height: 308px;
  z-index: 1;
  position: relative;
  overflow: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    transition: all 0.3s ease-in-out;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background-color: $white-purple-1;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: $purple-1;
    border-radius: 5px;
  }
  /* Handle on hover */
  // &::-webkit-scrollbar-thumb:hover {
  //   background-color: $orange;
  // }
  .chart-item {
    font-size: 14px;
    line-height: 1em;
    $purple-2: #423e80;
    max-width: 368px;
    min-height: 84px;
    // overflow: hidden;
    overflow-wrap: break-word;
    // white-space: pre-wrap;
    // font-family: $f-muller;
    border-radius: 5px;
    p:last-child {
      margin-bottom: 0;
    }
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    &--left,
    &--right {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        border-width: 0 8px 16px 8px;
        bottom: 0;
        display: block;
        width: 16px;
        height: 16px;
        z-index: 2;
        border-style: solid;
        border-radius: 3px;
      }
    }
    &--left {
      padding: 8px 8px 12px 12px;
      background-color: $white-purple-1;
      z-index: 1;
      margin-right: auto;
      &::after {
        left: -7px;
        border-color: transparent transparent $white-purple-1 transparent;
      }
    }
    &--right {
      padding: 8px 12px 12px 8px;
      background-color: $orange-4;
      z-index: 1;
      margin-left: auto;
      &::after {
        right: -7px;
        border-color: transparent transparent $orange-4 transparent;
      }
    }
    &__check-item {
      position: absolute;
      top: 0;
    }
    &--right > .chart-item__check-item {
      left: -28px;
    }
    &--left > .chart-item__check-item {
      right: -28px;
    }
  }
}
@include mq($TableWidth, max) {
  .chart-block {
    .chart-item {
      font-size: 12px;
      max-width: 220px;
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .chart-block {
    // max-height: 290px;
  }
}
// @include mq(720px, max) {
// }
// @include mq($PhoneWidth, max) {
// }
</style>
