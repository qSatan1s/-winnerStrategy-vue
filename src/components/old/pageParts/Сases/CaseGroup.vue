<template>
  <div
    class="case-group mt-1"
    :class="{ small: showItems == 3, large: showItems == 6 }"
  >
    <h4 class="cl_purple-1">{{ $t(`blockName.${title}`) }}</h4>
    <div class="case-group-items mt-1 mb-1">
      <case-item
        v-for="(item, index) in cases.slice(0, showItems)"
        :key="index"
        :item="item"
      />
    </div>
    <Button text="showAll" bgColor="purple-1" color="white" />
  </div>
</template>

<script>
import CaseItem from "./CaseItem";
import Button from "../../SingleComponents/Button";

export default {
  props: ["title", "cases", "showItems"],
  components: {
    CaseItem,
    Button
  }
};
</script>

<style lang="scss" scoped>
.case-group {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;

  max-width: 365px;
  text-align: center;

  &-items {
    display: flex;
    flex-flow: row wrap;
    height: 270px;
    justify-content: space-around;
  }
}

@include mq($SmPhoneWidth + 1, min) {
  h4 {
    font-size: 36px;
  }
}

@include mq-between($SmPhoneWidth, $TableWidth) {
  .case-group {
    justify-content: center;
  }
  .case-group.large .case-item:nth-last-child(-n + 3) {
    display: none;
  }
}

@include mq-between($PhoneWidth, $DesktopWidth) {
  .case-group.large .case-item:nth-last-child(-n + 3) {
    display: none;
  }

  .case-group {
    width: 46%;
    justify-content: flex-end;
    &-items {
      justify-content: space-between;
    }
    .btn {
      width: inherit;
    }

    @include mq($TableWidth, $SmDesktopWidth) {
      width: 325px;

      .btn {
        width: fit-content;
      }
    }

    @include mq($SmDesktopWidth, min) {
      width: 50%;
    }
  }

  .case-group.large {
    .case-group-items {
      justify-content: flex-end;
    }

    .btn {
      align-self: flex-end;
    }
  }
}

@include mq($DesktopWidth, min) {
  .case-group.large {
    max-width: 746px;
  }
}
</style>
