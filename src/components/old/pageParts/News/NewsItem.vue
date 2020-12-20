<template>
  <router-link
    :to="slide.to"
    class="news_item"
    :style="{
      backgroundImage: `url(/images/old/news/${this.slide.image}.png)`
    }"
  >
    <div class="news_item_title cl_white bg_orange-2">
      <h6>{{ slide.title }}</h6>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsItem",
  props: ["slide"]
};
</script>

<style lang="scss" scoped>
.news_item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 2px rgba(0, 0, 0, 0.16);

  border-radius: 5px;

  width: 280px;
  height: 200px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    .news_item_title {
      background-color: $white;
      color: $orange-2;
    }
  }

  &_title {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h6 {
      font-size: 14px;
      font-weight: normal;
      line-height: 16px;
    }
  }
}

@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .news_item {
    min-width: 100%;

    &_title {
      background-color: $purple-1;
      h6 {
        font-size: 12px;
      }
    }
  }
}

@include mq-between($PhoneWidth, $TableWidth) {
  .news_item {
    min-width: 48.5%;

    justify-items: center;
  }
}

@include mq-between($TableWidth, $SmDesktopWidth) {
  .news_item {
    min-width: 31.8%;
    height: 165px;
  }
}

@include mq-between($SmDesktopWidth, $DesktopWidth) {
  .news_item {
    flex: 0.24;
    height: 165px;
  }
}
</style>
