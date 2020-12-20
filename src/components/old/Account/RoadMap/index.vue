<template>
  <div class="account-road_map">
    <div class="account-banner cl_purple-1 bg_white-purple-1">
      <globe class="globe" />
      <h5>Дорожная карта</h5>
      <exit class="exit" @click="$router.push('/old/account/about')" />
    </div>
    <div class="account-footer bg_white-purple-2">
      <div class="wrapper">
        <component
          :road_map="road_map"
          :goal="goal"
          :task="task"
          @addGoal="changeComponent"
          :is="currentComponent"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import road_map from "./road_map";
import RoadMap from "./RoadMap";
import EditMap from "./EditMap";
export default {
  components: {
    globe: () => import("@/assets/images/old/account/globe-2.svg"),
    exit: () => import("@/assets/images/old/account/exit.svg"),
    EditMap
  },
  data: () => ({
    currentComponent: RoadMap,
    goal: -1,
    task: -1
  }),
  methods: {
    changeComponent(data) {
      this.currentComponent = EditMap;
      if (data) {
        this.goal = data.goalIndex;
        data.taskIndex !== undefined ? (this.task = data.taskIndex) : "";
      }
    }
  },
  computed: {
    road_map() {
      return road_map;
    }
  }
};
</script>

<style lang="scss" scoped>
.account-road_map {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: inherit;
  border-radius: 5px;
}
.account-banner {
  display: flex;
  align-items: center;

  width: inherit;
  height: 32px;

  padding: 0 0.5rem 0 1rem;
  border-radius: 5px 5px 0 0;
  h5 {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    margin-left: 0.5rem;
  }
  .globe path {
    fill: $purple-1 !important;
  }
  .exit {
    margin-left: auto;
    cursor: pointer;
    &:hover {
      path {
        fill: $white-purple-2;
      }
    }
  }
}
.account-footer {
  display: flex;
  width: 100%;
  height: 461px;

  padding-right: 0.25rem;
}
.wrapper {
  overflow-y: scroll;
  width: inherit;
  padding: 0.5rem 0.5rem 0 0.75rem;
  &::-webkit-scrollbar {
    padding: 0.5rem 0;
    width: 0.5rem;
    background-color: $white-purple-1;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 21px;
    background-color: $purple-1;
  }
}
@include mq($SmDesktopWidth, max) {
  .wrapper {
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
}
</style>
