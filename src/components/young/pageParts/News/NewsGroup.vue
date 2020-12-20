<template>
  <div class="news_group">
    <NewsBanner />
    <div class="bg_news"></div>
    <div class="wrap_slider">
      <div class="slider" ref="track">
        <news-item v-for="(item, index) in news" :key="index" :slide="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/plugins/Slider";
import NewsItem from "./NewsItem";
import NewsBanner from "./NewsBanner.vue";
import news from "./news";

export default {
  components: {
    NewsItem,
    NewsBanner
  },
  computed: {
    news() {
      return news;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Slider({
        track: this.$refs["track"],
        // buttons: this.$refs["buttons"],
        transition: "1s transform ease-in-out",
        showSlide: 4,
        margin: 16,
        overflow: 0,
        autoplay: 1,
        threshold: 0.3
      });

      this.slider.mediaFunc = width => {
        if (width >= 1200) {
          this.slider.transition = "1s transform ease-in-out";
          this.slider.showSlide = 4;
          this.slider.setMargin(16);
        } else {
          this.slider.transition = "0.5s transform ease-in-out";
          this.slider.setMargin(32);
          if (width < 576) this.slider.showSlide = 1;
          else if (width < 992) this.slider.showSlide = 2;
          else this.slider.showSlide = 3;
        }
      };
      this.slider.init();
    });
  }
};
</script>

<style lang="scss" scoped>
.wrap_slider {
  margin-top: 5rem;
}
.slider {
  display: flex;
  flex-flow: row nowrap;
  cursor: grab;
  &.grab {
    cursor: grabbing;
  }
}

.news_group {
  display: flex;
  position: relative;
  flex-flow: column nowrap;
}

.bg_news {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  @include bg(
    url("~@/assets/images/young/news_bg.png"),
    contain,
    no-repeat,
    right
  );
}

@include mq-between($PhoneWidth, $SmDesktopWidth) {
  .wrap_slider {
    margin-top: 2rem;
  }

  .bg_news {
    left: 15%;
  }
}

@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .wrap_slider {
    margin-top: 12.5rem;
  }
  .bg_news {
    width: 150%;
    background-position: center;
    top: 20%;
    left: -25%;
  }
}

@include mq($DesktopWidth, min) {
  .news_group {
    overflow: hidden;
  }
}
</style>
