<template>
  <div class="case-item" v-if="image" :style="backgroundStyle">
    <div class="case-item-text cl_white">
      <h4>{{ title }}</h4>
      <router-link class="link" to="#">
        <h3>Смотреть</h3>
        <arrow />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
  components: {
    arrow: () => import("@/assets/images/young/ui/arrow.svg")
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.case-item:hover {
  box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.37);
  cursor: pointer;
}
.case-item {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1rem;

  height: 260px;
  min-width: 260px;

  border-radius: 10px;

  @include mq-between($SmPhoneWidth, $PhoneWidth) {
    &:last-child {
      display: none;
    }
  }

  @include mq-between($PhoneWidth, $TableWidth) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
    min-width: 220px;
    max-width: 48%;
  }

  @include mq-between($TableWidth, $SmDesktopWidth) {
    max-width: 48%;
  }
  @include mq-between($SmDesktopWidth, $DesktopWidth) {
    max-width: 50%;
  }
  @include mq($DesktopWidth, min) {
    max-width: 270px;
  }

  &-text {
    display: flex;
    flex-flow: column nowrap;
    height: inherit;
    justify-content: flex-end;
    padding: 1rem;
    background-color: rgba($color: $case-background-image, $alpha: 0.5);

    h4 {
      font-size: 20px;
      font-weight: 800;
      line-height: 27px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 100%;
    }

    .link {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      h3 {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
