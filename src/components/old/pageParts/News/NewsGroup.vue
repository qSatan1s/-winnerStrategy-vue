<template>
  <div class="news_group">
    <div class="news_group_items" ref="track">
      <news-item
        class="slide"
        v-for="(item, index) in news.slice(0, 5)"
        :key="index"
        :slide="item"
      />
    </div>
    <div class="news_group_btn">
      <Button bgColor="orange-2" color="white" text="showAll" />
    </div>
  </div>
</template>

<script>
import Slider from "@/plugins/Slider";
import Button from "@/components/old/SingleComponents/Button";
import NewsItem from "./NewsItem";
import news from "./news";

export default {
  name: "NewsGroup",
  computed: {
    news() {
      return news;
    }
  },
  components: {
    Button,
    NewsItem
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Slider({
        track: this.$refs["track"],
        // buttons: this.$refs["buttons"],
        transition: "0.7s transform ease-in-out",
        margin: 16, //между слайдами задаем в px
        overflow: 1,
        autoplay: 1
      });

      this.slider.mediaFunc = width => {
        if (width > 992) {
          this.slider.destroy(0);
        } else {
          if (width < 576) this.slider.showSlide = 1;
          else this.slider.showSlide = 2;
          this.slider.init(0);
        }
      };
      this.slider.controlResize();
    });
  }
};
</script>
<style lang="scss" scoped>
.news_group {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  &_items {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: all 1.5s ease;
  }

  &_btn {
    margin-top: 1.5rem;
    @include mq-between($TableWidth, $SmDesktopWidth) {
      margin-top: 1rem;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
