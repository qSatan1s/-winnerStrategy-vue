<template>
  <div class="app_slider">
    <div class="slides" ref="track">
      <!-- dinamic img -->
      <div
        class="slide"
        ref="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{
          backgroundImage: `url(/images/young/slider/slide_${index}.png)`
        }"
      >
        <div class="slide__button">
          <!-- перевести -->
          <router-link class="button" to="#"><span>Перейти</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/plugins/Slider";
import slides from "./slider";

export default {
  computed: {
    slides() {
      return slides;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Slider({
        track: this.$refs["track"],
        // slides: this.slidess,
        margin: 50,
        overflow: 0,
        infinity: 1,
        autoplay: 1,
        transition: "1s transform ease-in-out"
      });
      this.slider.init();
    });
  }
};
</script>

<style scoped lang="scss">
.app_slider {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1026px;
  margin: 0 auto;
  height: 400px;
  .slides {
    display: flex;
    width: 100%;
    height: 100%;
    cursor: grab;
    &.grab {
      cursor: grabbing;
    }
    .slide {
      position: relative;
      min-width: 100%;
      border-radius: 15px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      // margin-left: 50px;
      // &:first-child {
      //   margin-left: 0;
      // }
      &::before {
        @include pseudo();
        width: 100%;
        height: 100%;
        background: $gradient-slider;
        z-index: 1;
        border-radius: 15px;
      }
      &__button {
        position: absolute;
        cursor: pointer;
        width: 134px;
        height: 57px;
        bottom: 53px;
        right: 97px;
        z-index: 2;
        border: 5px solid $button-slider-border;
        border-radius: 20px;
        .button {
          width: 100%;
          height: 100%;
          font-weight: 800;
          font-size: 20px;
          color: $white;
          background: $button-slider-bg;
          box-shadow: 0px 4px 10px rgba(175, 95, 27, 0.3);
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
@include mq($DesktopWidth, max) {
  .app_slider {
    .slides {
      .slide {
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
