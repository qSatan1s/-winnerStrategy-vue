<template>
  <div class="app_slider">
    <div class="slides" ref="track">
      <div
        class="slides__slide slide"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <!-- dinamic img -->
        <!-- :style="{
          backgroundImage: `url(/images/old/slider/slide_${index}/bg.svg)`
        }" -->
        <h2 class="slide__header mt-1">{{ slide.title }}</h2>
        <div class="slide__description">
          <!-- dinamic img -->
          <!-- <img
            class="description__img"
            :src="`/images/old/slider/slide_${index}/img.svg`"
            :alt="slide.head"
          /> -->
          <p class="description__text" v-html="slide.information"></p>
        </div>
      </div>
    </div>
    <div class="dots" ref="dots">
      <div
        class="dots__dot dot"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index == 0 }"
        :title="`Слайд: ${index + 1}, ${slide.head}`"
      ></div>
    </div>
  </div>
</template>

<script>
import Slider from "@/plugins/Slider";
import slides from "./slides";

export default {
  data: () => ({
    slider: {}
  }),
  computed: {
    slides() {
      return slides;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Slider({
        track: this.$refs["track"],
        dots: this.$refs["dots"],
        autoplay: 1
      });
      this.slider.init();
    });
  }
};
</script>

<style scoped lang="scss">
.app_slider {
  position: relative;
  background: $white;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  overflow: hidden;
  .slides {
    display: flex;
    height: 420px;
    user-select: none;
    touch-action: pan-y;
    margin: 2rem 5rem;
    cursor: grab;
    &.grab {
      cursor: grabbing;
    }
    .slides__slide {
      min-width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      opacity: 0;
      transition: 0.5s opacity ease-in-out;
      &.active {
        opacity: 1;
      }
      &.active.cloned {
        opacity: 0;
      }
      .slide__header {
        font-family: $f-muller;
        color: $purple-1;
        text-align: center;
      }
      .slide__description {
        position: relative;
        display: flex;
        width: 500px;
        margin-left: auto;
        margin-top: 5rem;
        cursor: initial;
        // .description__img {
        //   position: absolute;
        //   top: -45px;
        //   left: -45px;
        //   pointer-events: none;
        // }
        .description__text {
          font-family: $f-muller;
          text-align: right;
          font-size: 18px;
          line-height: 23px;
          color: $orange-2;
        }
      }
    }
  }
  .dots {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 24px;
    display: flex;
    .dots__dot {
      width: 24px;
      height: 24px;
      margin-right: 24px;
      background: $orange-4;
      border-radius: 5px;
      cursor: pointer;
      &.active {
        border: 3px solid $orange-2;
      }
    }
  }
}

@include mq($TableWidth, max) {
  .app_slider {
    .slides {
      margin: 1rem;
      .slides__slide {
        .slide__header {
          font-size: 18px;
        }
        .slide__description {
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .description__text {
            width: 265px;
            height: 100%;
            font-size: 14px;
            display: flex;
            align-items: center;
            text-align: center;
            margin: 0;
          }
        }
      }
    }
    .dots {
      .dots__dot {
        width: 16px;
        height: 16px;
        margin-right: 16px;
      }
    }
  }
}
@include mq($PhoneWidth, max) {
  .app_slider {
    .slides {
      margin: 1rem;
      .slides__slide {
        .slide__header {
          font-size: 14px;
        }
        .slide__description {
          .description__text {
            font-size: 12px;
            text-align: center;
          }
        }
      }
    }
    .dots {
      .dots__dot {
        width: 16px;
        height: 16px;
        margin-right: 16px;
      }
    }
  }
}
</style>
