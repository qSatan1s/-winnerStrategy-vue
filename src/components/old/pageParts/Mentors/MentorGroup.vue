<template>
  <div class="mentor-group">
    <h2 class="cl_purple-1">{{ $t("blockName.mentors") }}</h2>
    <div class="mentor-group-items slider" ref="track">
      <mentor-item
        v-for="(item, index) in mentors.slice(0, 5)"
        :key="index"
        :mentor="item"
        class="slide"
      />
    </div>
    <Button class="mt-1" color="white" bgColor="orange-2" text="showAll" />
    <h6 v-if="!isLogin" class="cl_orange-2 mt-1">
      Запись к наставнику доступна после регистрации
    </h6>
  </div>
</template>

<script>
import Slider from "@/plugins/Slider";
import MentorItem from "./MentorItem";
import Button from "../../SingleComponents/Button";
import mentors from "./mentors";

export default {
  name: "MentorGroup",
  data: () => ({
    isLogin: false
  }),
  components: {
    MentorItem,
    Button
  },
  computed: {
    mentors() {
      return mentors;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Slider({
        track: this.$refs["track"],
        // buttons: this.$refs["buttons"],
        transition: "0.7s transform ease-in-out",
        overflow: 1,
        autoplay: 1
      });

      this.slider.mediaFunc = width => {
        if (width > 992) {
          this.slider.destroy(0);
        } else {
          if (width < 576) {
            this.slider.setMargin(32);
            this.slider.showSlide = 1;
          } else if (width < 768) {
            this.slider.showSlide = 2;
            this.slider.setMargin(32);
          } else {
            this.slider.showSlide = 2;
            this.slider.setMargin(22);
          }
          this.slider.init(0);
        }
      };
      this.slider.controlResize();

      // this.slider.destroy(); //удаление классов и событий
      // this.slider.showSlide = 4; //вот так меняем по сколько слайдов гортаем
      // this.slider.autoPlay(1); // вот так останавливаем автоплей true либо 1
    });
  }
};
</script>

<style lang="scss" scoped>
.mentor-group {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  text-align: center;
  // overflow: hidden;

  &-items {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    transition: all 1.5s ease;
  }

  &-controls {
    display: none;
    position: absolute;
  }
  h6 {
    font-weight: normal;
  }

  @include mq-between($SmPhoneWidth, $SmDesktopWidth) {
    &-items {
      flex-flow: row nowrap;
    }
  }
  @include mq-between($PhoneWidth, $TableWidth) {
    .mentor-item {
      flex: 1 0 calc(50% - 16px);
    }
  }
  @include mq($SmPhoneWidth + 1, max) {
    h2 {
      font-size: 18px;
    }
  }
}
</style>
