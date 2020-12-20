<template>
  <div>
    <h2 class="chart-title">{{ $t("blockName.schoolsRating") }}</h2>
    <div class="chart-wraper">
      <div class="chart-wraper-main">
        <div class="chart__buttons">
          <div class="chart__filters hide-for-smdesktop show-for-phone">
            <fileters-list></fileters-list>
          </div>
          <div class="default-btns hide-for-smdesktop">
            <buttons-list></buttons-list>
          </div>
        </div>
        <div class="chart" ref="amchart_semi_pie_chart"></div>
        <div class="hide-for-desktop show-for-smdesktop buttons-list-smdesktop">
          <buttons-list></buttons-list>
        </div>
        <div class="chart__list">
          <div class="hide-for-desktop show-for-smdesktop fliters-list-tablet">
            <fileters-list></fileters-list>
          </div>
          <div class="chart__list-wraper">
            <div class="chart__banner">Школы</div>
            <div class="list-items">
              <item
                v-for="(item, index) in this.schoolData"
                :key="index"
                :item="item"
                @updateChart="updateChart()"
              ></item>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-wraper-list-tablet">
        <div class="chart__list">
          <div class="chart__list-wraper">
            <div class="chart__banner">Школы</div>
            <div class="list-items">
              <item
                v-on:updateChart="updateChart"
                v-for="(item, index) in this.schoolData"
                :key="index"
                :item="item"
                @updateChart="updateChart()"
              ></item>
            </div>
          </div>
          <div class="default-btns show-for-smdesktop">
            <buttons-list></buttons-list>
          </div>
        </div>
        <div class="tablet-fliters-list">
          <fileters-list></fileters-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiletersList from "./ui/filters-list";
import ButtonsList from "./ui/buttons-list";
import schoolData from "./SchoolData";

import Item from "./Item";

import Chart from "../Chart_class";
import chartData from "../chartData";

export default {
  name: "School",
  components: {
    FiletersList,
    ButtonsList,
    Item
  },
  data() {
    return {
      chart: "",
      chartData: chartData,
      isActive: false
    };
  },
  methods: {
    setDefaultData() {
      this.chart.setDefaultData();
    },
    updateChart() {
      this.chart.setDefaultData();
    }
  },
  mounted() {
    this.chart = new Chart(this.$refs.amchart_semi_pie_chart, chartData.data);
    this.chart.start();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  computed: {
    schoolData: function() {
      return schoolData;
    }
  }
};
</script>

<style lang="scss" scoped>
.chart-title {
  margin-bottom: 24px;
  color: #5752a0;
  font-weight: bold;
  text-align: center;
  @include mq($SmPhoneWidth + 1, max) {
    font-size: 18px;
  }
}
.chart {
  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }
  &__list {
    width: 100%;
    max-width: 319px;
    margin-left: 7px;
    .list-items {
      max-height: 328px;
      overflow-y: scroll;
      /* width */
      &::-webkit-scrollbar {
        width: 8px;
        transition: all 0.3s ease-in-out;
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background-color: rgba(197, 193, 255, 0.5);
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background-color: #44377d;
        border-radius: 5px;
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background-color: $orange;
      }
    }
  }
  &__list-wraper {
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
  }
  &__banner {
    @include br(5px, 5px, 0px, 0px);
    text-transform: uppercase;
    background-color: #ffcca2;
    padding: 7px 15px;
    text-align: center;
    color: #5752a0;
    font-size: 14px;
    line-height: 1em;
    font-weight: bold;
  }
}
.chart-wraper {
  display: flex;
  margin-bottom: 30px;
  .chart-wraper-main {
    width: 100%;
    padding: 15px 15px 24px;
    display: flex;
    border-radius: 5px;
    background-color: #5752a0;
    flex-flow: wrap;
  }
  .chart__buttons {
    width: 100%;
  }
}
@include mq($DesktopWidth, max) {
  .buttons-list-smdesktop {
    padding-left: 7px;
    width: calc(50% + 2px);
    margin-bottom: 16px;
    .buttons-list {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  .chart__buttons {
    margin-bottom: 0;
  }
  .chart {
    &__list {
      display: flex;
      flex-flow: row;
      max-width: 100%;
    }
    &__list-wraper {
      width: 50%;
      order: -1;
    }
  }
  .fliters-list-tablet {
    width: 50%;
  }
}
@include mq($SmDesktopWidth, max) {
  .buttons-list-smdesktop {
    margin-bottom: 0;
    display: none;
  }
  .chart {
    &__list-wraper {
      width: 100%;
      max-width: 319px;
    }
    &__list {
      flex-flow: column wrap;
    }
  }
}
@include mq($SmDesktopWidth, min) {
  .chart-wraper-list-tablet {
    display: none;
  }
}
@include mq($SmDesktopWidth, max) {
  .tablet-fliters-list {
    margin-top: 44px;
  }
  .chart__list .item__content .name {
    font-size: 12px;
  }
  .chart-wraper {
    background-color: $violet;
    flex-flow: wrap;
    .chart-wraper-main {
      overflow: hidden;
      width: 100%;
      .chart {
        &__list {
          display: none;
        }
      }
    }
    .chart-wraper-list-tablet {
      width: 100%;
      display: flex;
      flex-flow: row;
      .chart {
        &__list {
          margin-left: 15px;
          padding-bottom: 15px;
          .default-btns.show-for-smdesktop {
            margin-bottom: 16px;
            .buttons-list {
              width: 100%;
              max-width: 319px;
              display: flex;
              justify-content: space-between;
            }
          }
        }
        &__list-wraper {
          order: 2;
        }
      }
    }
  }
}
@include mq($TableWidth, max) {
  .tablet-fliters-list {
    margin-top: 44px;
    width: 50%;
  }
  .chart-wraper {
    .chart-wraper-list-tablet {
      flex-flow: row wrap;
    }
  }
  .chart__list {
    width: calc(50% - 15px);
  }
}
@include mq(705px, max) {
  .tablet-fliters-list {
    margin-top: 0;
  }
  .chart__list {
    width: 100%;
    order: 2;
    margin-right: 15px;
    .default-btns.show-for-smdesktop {
      .buttons-list {
        width: 100%;
        max-width: 100% !important;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .chart__list-wraper {
    max-width: 100%;
  }
}
@include mq($PhoneWidth, max) {
  .chart-wraper .chart-wraper-list-tablet .chart__list {
    margin-left: 0;
    margin-right: 0;
  }
  .chart__list-wraper {
    order: 1;
  }
  .tablet-fliters-list {
    display: none;
  }
  .chart-wraper {
    .chart-wraper-main {
      padding: 15px 8px;
    }
  }
  .chart__buttons {
    .default-btns {
      display: none;
    }
  }
  .chart__filters {
    width: 100%;
    &.show-for-phone {
      display: block;
    }
  }
  .default-btns {
    padding: 0 8px;
    margin-bottom: 16px;
    width: 100%;
  }
}
// Chart
.chart {
  margin-left: -15px;
  margin-right: 15px;
  width: 811.31px;
  height: 356px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 1px;
    width: 20px;
    height: 22px;
    z-index: 1;
    background-color: #5752a0;
    @include mq($PhoneWidth, max) {
      width: 5px;
    }
    @include mq(370, max) {
      display: none;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 4px;
    bottom: 1px;
    width: 60px;
    height: 10px;
    z-index: 1;
    background-color: #5752a0;
  }
}
@include mq($DesktopWidth, max) {
  .chart {
    width: calc(100% + 25px) !important;
    margin-left: -19px;

    // margin-left: 0;
    margin-right: 0;
    // width: 100%;
  }
}
@include mq($SmDesktopWidth, max) {
  .chart {
    width: 100%;
  }
}
</style>
