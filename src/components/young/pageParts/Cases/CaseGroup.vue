<template>
  <div class="case-group pb-1">
    <div class="case-group-top">
      <h2 class="cl_white">{{ $t("menu.cases") }}</h2>
      <Button text="showCases" color="white" bgColor="background" />
    </div>
    <div class="case-group-items mt-2">
      <div class="item-left">
        <div class="item-left-img">
          <!-- dinamic img -->
          <img :src="firstCase.image" alt />
        </div>
        <div class="item-left-about cl_white" v-if="firstCase">
          <h5>{{ firstCase.country }}</h5>
          <h4>{{ firstCase.title }}</h4>
          <p>{{ firstCase.briefInformation }}</p>
          <router-link to="#" class="about-link">
            <h3>Смотреть</h3>
            <arrow />
          </router-link>
        </div>
      </div>
      <div class="item-right">
        <case-item
          v-for="(item, index) in cases.slice(1, 5)"
          :key="index"
          :title="item.title"
          :image="item.image"
        />
      </div>
    </div>
    <Button
      class="adaptive"
      text="showCases"
      color="white"
      bgColor="background"
    />
  </div>
</template>

<script>
import Button from "../../SingleComponents/Button";
import CaseItem from "./CaseItem";
import cases from "./cases";

export default {
  components: {
    Button,
    CaseItem,
    arrow: () => import("@/assets/images/young/ui/arrow.svg")
  },
  computed: {
    firstCase() {
      return this.cases[0];
    },
    cases() {
      return cases;
    }
  }
};
</script>

<style lang="scss" scoped>
.case-group {
  display: flex;
  flex-flow: column nowrap;

  &-top {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 48px;
      @include mq-between($SmPhoneWidth, $DesktopWidth) {
        font-size: 34px;
      }
    }

    .btn {
      padding: 0 1rem;
    }
  }

  &-items {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    .item-left:hover {
      box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.37);
    }

    .item-left {
      display: flex;
      flex: 0 0 auto;
      flex-flow: column nowrap;
      border-radius: 10px;

      max-width: 100%;
      @include mq-between($SmPhoneWidth, $PhoneWidth) {
        max-width: 455px;
      }
      @include mq-between($SmPhoneWidth, $DesktopWidth) {
        padding-bottom: 1rem;
      }

      justify-content: center;

      &-img {
        img {
          width: 100%;
          object-fit: cover;

          border-top-left-radius: 10px;
          border-top-right-radius: 10px;

          @include mq-between($SmPhoneWidth, $PhoneWidth) {
            height: 319px;
          }
        }
      }

      &-about {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        height: inherit;
        @include mq-between($PhoneWidth, $TableWidth) {
          & > * {
            padding-top: 0.75rem;
          }
        }

        background: $case-background-about;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        padding: 1rem;

        h5 {
          font-size: 16px;
          font-weight: bold;
          padding-left: 2.5rem;
          @include bg(
            // dynamic img
              url("/images/young/cases/japan.svg"),
            auto,
            no-repeat,
            0% center
          );
        }

        p {
          width: 100%;
          font-size: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .about-link {
          display: flex;
          align-items: center;
          h3 {
            font-size: 22px;
            padding-right: 0.5rem;
          }
        }

        @include mq-between($SmPhoneWidth, $PhoneWidth) {
          h4 {
            margin: 0.5rem 0;
          }
          .about-link {
            margin-top: 0.5rem;
            justify-content: flex-end;
            h3 {
              font-size: 18px;
            }
          }
        }
      }
    }

    .item-right {
      display: flex;
      flex-flow: row wrap;
      @include mq-between($SmPhoneWidth, $PhoneWidth) {
        justify-content: center;
      }
      @include mq-between($PhoneWidth, $TableWidth) {
        justify-content: space-between;
      }
      @include mq-between($TableWidth, $SmDesktopWidth) {
        justify-content: flex-end;
      }
      @include mq($SmDesktopWidth, min) {
        justify-content: space-between;
        margin-left: 1rem;
      }
    }
  }

  .btn.adaptive {
    display: none;
    padding: 0 3.5rem;
    height: 40px;
  }
  @include mq($PhoneWidth + 1, max) {
    .btn {
      display: none;
    }
    .btn.adaptive {
      display: block;
      align-self: center;
    }
  }
  @include mq-between($PhoneWidth, $TableWidth) {
    .item-right {
      justify-content: space-between;
    }
    .btn {
      display: block;
    }
    .btn.adaptive {
      display: none;
    }
  }
}

@include mq($TableWidth, min) {
  .case-group {
    &-items {
      flex-flow: row nowrap;
      align-items: flex-start;
      justify-content: space-between;
    }

    .case-item {
      height: 211px;
      max-width: 238px;
      margin-bottom: 0.5rem;
    }

    .item-left {
      max-width: 400px;
      height: 444px;
      margin-right: 0.5rem;
    }

    .case-item:nth-last-child(-n + 2) {
      display: none;
    }
    @include mq-between($SmDesktopWidth, $DesktopWidth) {
      .case-item {
        max-width: 540px;
        height: 260px;
      }
      .item-left {
        max-width: 601px;
        height: 544px;
      }
    }

    @include mq($DesktopWidth, min) {
      .item-left {
        max-width: 601px;
        height: 536px;
        margin: 0;
      }

      .case-item {
        height: 260px;
        margin-bottom: 1rem;
      }
      .case-item:nth-last-child(-n + 2) {
        display: flex;
      }
    }
  }
}
</style>
