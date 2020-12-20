<template>
  <div class="account-rating">
    <div class="account-banner">
      <img
        src="@/assets/images/old/account/bar-chart-2.svg"
        alt=""
        class="image"
      />
      <div class="name">Личный рейтинг</div>
    </div>
    <div class="account-footer">
      <div class="account-current__search">
        <div class="wrap">
          <div class="search-icon">
            <search />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Поиск рэйтинга по имени..."
          />
        </div>
      </div>
      <div class="account-current__chart">
        <div class="chart" ref="amchart_semi_pie_chart"></div>
      </div>
      <div class="account-current__people">
        <current></current>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/old/Charts/Chart_class";
import chartData from "@/components/old/Charts/chartData";

import Current from "./Current";

export default {
  name: "accountRating",
  data() {
    return {
      chart: "",
      chartData: chartData
    };
  },
  components: {
    Current,
    search: () => import("@/assets/images/old/account/search.svg")
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
    this.chart = new Chart(
      this.$refs.amchart_semi_pie_chart,
      chartData.data,
      "#5752a0",
      "#b5b0ff",
      "#b5b0ff"
    );
    this.chart.start();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  width: 660.82px;
  height: 276.71px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    background-color: $white-purple-2;
  }
  &::before {
    width: 70px;
    height: 8px;
    left: 0px;
    bottom: 3px;
    z-index: 1;
  }
  &::after {
    height: 11px;
    width: 38px;
    left: 0px;
    bottom: 10px;
  }
}
.account-current {
  &__search {
    position: absolute;
    .wrap {
      position: relative;
    }
    .search-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translate(0, -50%);
    }
    input {
      background: #ffffff;
      border-radius: 5px;
      font-size: 14px;
      line-height: 14px;
      padding: 0 35px 0 16px;
      min-width: 276px;
      height: 24px;
      font-family: $f-muller;
      &::placeholder {
        font-size: 14px;
        line-height: 14px;
        color: $purple-1;
      }
    }
  }
  &__chart {
    padding-top: 37px;
  }
  &__people {
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }
}
.account {
  &-rating {
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: $white-purple-2;
  }
  &-banner {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    background-color: $white-purple-1;
    .image {
      margin-right: 6px;
    }
    .name {
      font-size: 14px;
      // line-height: 1em;
      letter-spacing: 0.05em;
    }
  }
  &-footer {
    position: relative;
    padding: 16px 16px 16px 8px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}
@include mq($DesktopWidth, max) {
  .chart {
    height: 276.71px;
    width: 100%;
    &::after {
      width: 34px;
    }
  }
  .account-current {
    &__chart {
      margin-top: 24px;
      width: calc(100% - 195px);
    }
    &__people {
      width: 175px;
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .chart {
    width: 100%;
    height: 276.71px;
  }
  .account-current {
    &__search {
      position: unset;
      order: 2;
      margin-top: 17px;
      padding-left: 16px;
    }
    &__chart {
      width: 100%;
      padding-top: 0;
      order: 3;
    }
    &__people {
      width: 100%;
      order: 1;
      border-radius: 0;
    }
  }
  .account {
    &-footer {
      padding: 0;
    }
  }
}
@include mq(720px, max) {
  .account {
    &-rating {
      border-radius: 0 0 5px 0;
    }
  }
}
@include mq($PhoneWidth, max) {
  .account-current {
    &__chart {
      margin-top: 16px;
    }
    &__search {
      margin-top: 9px;
      padding-left: 8px;
      input {
        font-size: 12px;
        line-height: 12px;
        padding: 0 16px;
        min-width: 225px;
        &::placeholder {
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }
}
@include mq(460px, max) {
  .chart {
    &::after {
      width: 31px;
    }
  }
}
</style>
