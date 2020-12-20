<template>
  <div class="filters-list">
    <div class="select">
      <vue-select
        :options="options_1"
        :placeholder="placeholder_1"
      ></vue-select>
    </div>
    <div class="select">
      <vue-select
        :options="options_2"
        :placeholder="placeholder_2"
      ></vue-select>
    </div>
    <div class="select">
      <vue-select
        :options="options_3"
        :placeholder="placeholder_3"
      ></vue-select>
    </div>
  </div>
</template>

<script>
import vueSelect from "./vue-select";
export default {
  name: "SchoolFiltersList",
  components: {
    vueSelect
  },
  data() {
    return {
      placeholder_1: "Выбор страны",
      options_1: ["Россия", "Белоруссия", "Казахстан"],
      placeholder_2: "Выбор города",
      options_2: ["Москва", "Питер"],
      placeholder_3: "Выбор округа",
      options_3: ["Москва", "Питер"]
    };
  }
};
</script>

<style lang="scss" scoped>
.filters-list {
  display: flex;
}
.select {
  cursor: pointer;
  // padding: 2px 4px;
  margin-right: 24px;
  min-width: 212px;
  // background-color: #a29fd1;
  // border-radius: 5px;
  color: #5752a0;
  &:last-child {
    margin-right: 0;
  }
}
@include mq($DesktopWidth, max) {
  .filters-list {
    order: 2;
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 293px;
    margin-left: auto;
    .select {
      min-width: 293px;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .filters-list {
    padding-right: 16px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    .select {
      margin-bottom: 16px;
      min-width: 293px;
      margin-right: 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
@include mq-between(705px, $TableWidth) {
  .filters-list {
    margin: 5px;
  }
  .filters-list .select {
    min-width: 242px;
  }
}
@include mq(705px, max) {
  .filters-list {
    order: 1;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 24px;
    align-items: flex-start;
    max-width: 100%;
  }
}
@include mq($PhoneWidth, max) {
  .filters-list {
    padding-right: 0;
    padding-left: 0;
    .select {
      width: 100%;
      min-width: 0;
    }
  }
}
</style>
