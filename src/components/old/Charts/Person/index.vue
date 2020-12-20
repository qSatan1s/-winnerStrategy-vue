<template>
  <div>
    <h2 class="chart-title">{{ $t("blockName.studentsRating") }}</h2>
    <div class="chart-wraper">
      <div class="chart-wraper-current chart-wraper-current--phone">
        <current></current>
      </div>
      <div class="chart-wraper-main">
        <div class="show-for-phone-only">
          <div class="chart__search">
            <search></search>
          </div>
        </div>
        <div class="chart" ref="amchart_semi_pie_chart"></div>
        <div class="chart__list">
          <div class="show-for-desktop">
            <div class="chart__search">
              <search></search>
            </div>
          </div>
          <div class="chart__list-wraper hide-for-phone-only">
            <div class="chart__banner">Лучшие из лучших</div>
            <div class="list-items">
              <item
                v-for="(item, index) in this.personData"
                :key="index"
                :item="item"
                @updateChart="updateChart()"
              ></item>
            </div>
          </div>
          <div class="show-only-tablet">
            <div class="mt-1 ">
              <buttons-list></buttons-list>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-wraper-list-tablet">
        <div class="chart__list">
          <div class="chart__search">
            <search></search>
          </div>
          <div class="chart__list-wraper">
            <div class="chart__banner">Лучшие из лучших</div>
            <div class="list-items">
              <item
                v-for="(item, index) in this.personData"
                :key="index"
                :item="item"
                @updateChart="updateChart()"
              ></item>
            </div>
          </div>
          <div class="hide-for-phone-only">
            <buttons-list></buttons-list>
          </div>
        </div>
      </div>
      <div class="chart-wraper-current">
        <current></current>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./ui/search";
import ButtonsList from "./ui/buttons-list";

import Current from "./Current";
import Item from "./Item";

import PersonData from "./PersonData";
import Chart from "../Chart_class";
import chartData from "../chartData";

export default {
  name: "Person",
  components: {
    Current,
    Search,
    Item,
    ButtonsList
  },
  mounted() {
    this.chart = new Chart(this.$refs.amchart_semi_pie_chart, chartData.data);
    this.chart.start();
  },
  methods: {
    setDefaultData() {
      this.chart.setDefaultData();
    },
    updateChart() {
      this.chart.setDefaultData();
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  computed: {
    personData: function() {
      return PersonData;
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
.chart-wraper {
  display: flex;
  .chart-wraper-main {
    width: 80%;
    padding: 15px;
    display: flex;
    border-radius: 5px;
    background-color: #5752a0;
  }
  .chart-wraper-current {
    &--phone {
      display: none;
    }
    padding-left: 24px;
    width: 20%;
  }
}
.chart {
  &__search {
    margin-bottom: 16px;
  }
  &__list-wraper {
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
  }
  &__list {
    width: 100%;
    max-width: 276px;
    // margin-left: 7px;
    margin-left: auto;
    .list-items {
      max-height: 194px;
      overflow-y: scroll;
      /* width */
      &::-webkit-scrollbar {
        width: 8px;
        transition: all 0.3s ease-in-out;
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background-color: rgba(255, 204, 162, 0.5);
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background-color: $orange--dark;
        border-radius: 5px;
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background-color: $orange;
      }
    }
  }
  &__banner {
    @include br(5px, 5px, 0px, 0px);
    text-transform: uppercase;
    background-color: #ff8721;
    padding: 7px 15px;
    text-align: center;
    color: white;
    font-size: 14px;
    line-height: 1em;
    font-weight: bold;
  }
}
@include mq($SmDesktopWidth + 1, min) {
  .chart-wraper-list-tablet {
    display: none;
  }
}
@include mq($SmDesktopWidth, max) {
  .chart-wraper {
    background-color: $violet;
    flex-flow: wrap;
    .chart-wraper-current {
      padding-left: 0;
      margin-right: 15px;
      margin-left: auto;
      width: 23.5%;
      min-width: 176px;
      padding-bottom: 15px;
      .current-people {
        background-color: white;
      }
    }
    .chart-wraper-main {
      width: 100%;
      .chart {
        width: 100%;
        &__search {
          margin-bottom: 16px;
        }
        &__list {
          display: none;
        }
      }
    }
    .chart-wraper-list-tablet {
      .chart {
        &__list {
          margin-left: 15px;
          padding-bottom: 15px;
          .buttons-list {
            margin-top: 18px;
          }
        }
      }
    }
  }
}
@include mq($PhoneWidth, max) {
  .chart {
    &__search {
      display: flex;
      justify-content: flex-start;
    }
  }
  .chart-wraper {
    .chart-wraper-main {
      flex-flow: column;
      .chart__list-wraper {
        background-color: transparent;
      }
      .chart__list {
        display: block;
        width: 100%;
        max-width: 100%;
        margin-left: 0;
      }
    }
    .chart-wraper-current {
      display: none;
      &--phone {
        background-color: $violet;
        display: block;
        width: 100%;
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
    .chart-wraper-list-tablet {
      padding: 0;
      width: 100%;
      .chart {
        &__search {
          display: none;
        }
        &__list {
          margin-left: 0;
          max-width: 100%;
        }
      }
    }
  }
}
// Chart
.chart {
  margin-left: -15px;
  margin-right: 15px;
  width: 620px;
  height: 295px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 1px;
    width: 15px;
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
@include mq($SmDesktopWidth, max) {
  .chart {
    width: calc(100% + 25px) !important;
    margin-left: -19px;

    // margin-left: 0;
    margin-right: 0;
    // width: 100%;
  }
}
</style>
