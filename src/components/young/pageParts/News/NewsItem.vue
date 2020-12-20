<template>
  <div class="slide" v-if="slide.image" :style="backgroundStyle">
    <div class="slide_text cl_white">
      <h3 class="title">{{ slide.title }}</h3>
      <router-link to="#" class="slide_bottom">
        <h3>Смотреть</h3>
        <arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slide"],
  components: {
    arrow: () => import("@/assets/images/young/ui/arrow.svg")
    // Button,
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.slide.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.slide {
  min-width: 280px;
  height: 280px;

  border-radius: 10px;

  &_text {
    width: inherit;
    height: inherit;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;

    border-radius: inherit;

    background: $news-text-background;

    .title {
      padding: 0 1rem;
      width: 80%;
      margin-bottom: 0.5rem;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &_bottom {
    display: flex;
    align-items: center;

    padding: 0 1rem;
    border-radius: 0 0 10px 10px;
    background: $button-slider-bg;
    height: 59px;

    h3 {
      margin-right: 0.5rem;
      font-size: 22px;
      font-weight: 800;
    }
  }
}

@include mq-between($PhoneWidth, $TableWidth) {
  .slide {
    min-width: 263px;
    height: 263px;
  }
}

@include mq($PhoneWidth, max) {
  .slide {
    min-width: 200px;
    height: 183px;

    &_text {
      .title {
        padding: 0 0.5rem;
        font-size: 15px;
        width: 80%;

        margin: 0;
      }
    }

    &_bottom {
      padding: 0 0.5rem;
      height: 38px;

      h3 {
        font-size: 18px;
      }
    }
  }
}
</style>
