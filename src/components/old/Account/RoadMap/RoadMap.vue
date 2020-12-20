<template>
  <div class="component-content">
    <div class="mission-block bg_white cl_purple-1">
      <edit class="edit" />
      <span class="mission-name">
        <p><strong>Миссия №1</strong> - Придумай название миссии</p>
      </span>
      <exit class="exit" />
    </div>
    <div class="content-block">
      <div class="road-map">
        <div class="list" id="goals">
          <div class="list-title">
            <h3 class="cl_purple-1 mb-1">Цели</h3>
            <add class="add" @click="$emit('addGoal')" />
          </div>

          <div v-if="goals" class="list-items">
            <div
              v-for="(item, index) in goals"
              :key="`goal_${index}`"
              class="list-item bg_orange-3 cl_white"
              :class="{ active: currentGoalIndex == index }"
            >
              <div class="item-title" @click="getTasks(index)">
                <star class="star" />
                <h5>{{ item.goal }}</h5>
              </div>
              <div class="item-actions">
                <edit class="edit" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="tasks.length > 0" class="list" id="tasks">
          <div class="list-title mb-1">
            <h3 class="cl_purple-1">Задачи</h3>
            <add
              class="add"
              @click="$emit('addGoal', { goalIndex: currentGoalIndex })"
            />
          </div>

          <transition-group tag="div" name="slide" class="list-items">
            <div
              v-for="(item, index) in tasks"
              :key="`task_${index}`"
              class="list-item bg_blue cl_white"
              :class="{ active: currentTaskIndex == index }"
            >
              <div class="item-title" @click="getMissions(index)">
                <height class="height" />
                <h5>{{ item.task }}</h5>
              </div>
              <div class="item-actions">
                <edit class="edit" />
              </div>
            </div>
          </transition-group>
        </div>

        <div v-if="missions.length > 0" class="list" id="missions">
          <div class="list-title mb-1">
            <h3 class="cl_purple-1">Миссии</h3>
            <add
              class="add"
              @click="
                $emit('addGoal', {
                  goalIndex: currentGoalIndex,
                  taskIndex: currentTaskIndex
                })
              "
            />
          </div>

          <transition-group name="slide" class="list-items" tag="div">
            <div
              v-for="(item, index) in missions"
              :key="`mission_${index}`"
              class="list-item bg_golden-yellow cl_blue"
            >
              <div class="item-title">
                <info class="info" />
                <h5>{{ item.mission }}</h5>
              </div>
              <div class="item-actions">
                <edit class="edit" />
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <div class="tools cl_orange-2 bg_white">
        <p>Инструменты</p>
        <img src="@/assets/images/old/account/tools.png" alt="tools image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["road_map"],
  data: () => ({
    tasks: [],
    missions: [],
    currentGoalIndex: -1,
    currentTaskIndex: -1
  }),
  components: {
    exit: () => import("@/assets/images/old/account/exit.svg"),
    edit: () => import("@/assets/images/old/account/edit.svg"),
    star: () => import("@/assets/images/old/account/star.svg"),
    height: () => import("@/assets/images/old/account/height.svg"),
    info: () => import("@/assets/images/old/account/alert-circle.svg"),
    add: () => import("@/assets/images/old/account/plus-circle.svg")
  },
  computed: {
    goals() {
      return this.road_map;
    }
  },
  methods: {
    getTasks(index) {
      this.missions = [];
      this.currentGoalIndex = index;
      this.currentTaskIndex = -1;
      this.tasks = this.goals[index].tasks;
    },
    getMissions(index) {
      this.currentTaskIndex = index;
      this.missions = this.tasks[index].missions;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-to,
.slide-leave {
  max-height: 461px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.mission-block {
  display: flex;
  align-items: center;
  height: 32px;

  padding: 0 0.25rem 0 0.25rem;
  border-radius: 5px;
  .mission-name {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    cursor: pointer;
    p {
      font-size: 14px;
    }
    p:hover {
      text-decoration: underline;
    }
  }
  .exit {
    margin-left: auto;
    cursor: pointer;
    path {
      fill: $white-purple-2;
    }
    &:hover {
      path {
        fill: $purple-1;
      }
    }
  }
}
.content-block {
  display: flex;
  flex-flow: row wrap;

  margin-top: 1rem;
}

.road-map {
  display: flex;
  flex-flow: row wrap;
}

.list {
  display: flex;
  flex-flow: column nowrap;
  position: relative;

  width: 200px;

  &-title {
    display: inherit;
    flex-flow: row nowrap;
    .add {
      cursor: pointer;
      margin-left: auto;
      path {
        fill: $purple-1 !important;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    position: relative;

    border-radius: 5px;
    height: 32px;

    margin-bottom: 0.5rem;
    padding: 0.25rem;
    cursor: pointer;

    .item-title,
    .item-actions {
      display: flex;
      align-items: center;
    }
    .item-title {
      flex: 1;
      overflow: hidden;
    }

    h5 {
      font-size: 14px;
      font-weight: normal;
      line-height: 16px;
      margin-left: 0.25rem;
      letter-spacing: 0.05em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.active {
      background-color: $white;
      color: $orange-2;
      box-shadow: inset 3px 3px 4px rgba(94, 84, 191, 0.52);

      svg path {
        fill: $orange-2 !important;
      }
    }

    &:hover {
      box-shadow: inset 3px 3px 4px rgba(94, 84, 191, 0.52);
    }
  }
  .star,
  .height,
  .edit {
    path {
      fill: $white !important;
    }
  }
  &#missions .edit {
    path {
      fill: $purple-1 !important;
    }
  }
}
.list + .list {
  margin-left: 1rem;
}

.tools {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  margin-left: auto;

  cursor: pointer;

  width: 152px;
  height: 152px;

  p {
    padding-bottom: 0.75rem;
  }
  &:hover {
    p {
      text-decoration: underline;
    }
  }
}

@include mq($SmDesktopWidth, max) {
  .content-block {
    flex-flow: column-reverse nowrap;
  }
  .tools {
    margin: 0;
    margin-bottom: 1rem;
  }
  .list + .list {
    margin: 0;
    margin-left: 0.6rem;
  }
}
@include mq-between($TableWidth, $SmDesktopWidth) {
  .list {
    width: 190px;
  }
}
@include mq($TableWidth, max) {
  .list + .list {
    margin: 0;
    margin-top: 1rem;
  }
  .road-map {
    flex-flow: column nowrap;
  }
}
@include mq($PhoneWidth, max) {
  .content-block {
    align-items: center;
  }

  .mission-block {
    border-radius: 61px;
    justify-content: space-between;
    .mission-name {
      padding-left: 0.25rem;
      flex: 1;
      margin: 0;
      p {
        font-size: 10px;
      }
    }
    .exit {
      margin: 0;
    }
  }
  .tools {
    width: 100px;
    height: 100px;
    p {
      font-size: 10px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
}
@include mq-between(450px, $PhoneWidth) {
  .road-map {
    width: 100%;
    align-items: center;
  }
  .list {
    width: 80%;
  }
  .tools {
    width: 152px;
    height: 152px;
    p {
      font-size: 14px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
