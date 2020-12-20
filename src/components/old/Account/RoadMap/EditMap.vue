<template>
  <div class="edit_map-content">
    <div class="add-goal cl_purple-1">
      <add class="add" />
      <h6>Добавить цель</h6>
    </div>
    <div class="list" id="goals">
      <div
        v-for="(item, index) in goals"
        :key="`goal_${index}`"
        class="list-item"
      >
        <div class="list-item-block">
          <div class="title" @click="getData('goal', index)">
            <h6>Цель №{{ index + 1 }} - {{ item.goal }}</h6>
          </div>
          <options
            class="options"
            :class="{ open: item.id == menuId }"
            @click="openMenu(item.id)"
          />
          <transition name="slide">
            <div class="options-menu" v-if="menuId == item.id">
              <div
                v-for="(item, index) in menu"
                :key="index"
                class="options-item"
              >
                <component :is="item.icon"></component>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </transition>
        </div>

        <transition name="slide">
          <div v-if="goalIndex == index" class="list" id="tasks">
            <div class="add-goal cl_purple-1">
              <add class="add" />
              <h6>Добавить задачу</h6>
            </div>
            <div
              v-for="(item, index) in goals[goalIndex].tasks"
              :key="`task_${index}`"
              class="list-item"
            >
              <div class="list-item-block">
                <div class="title" @click="getData('task', index)">
                  <h6>Задача №{{ index + 1 }} - {{ item.task }}</h6>
                </div>
                <options class="options" @click="openMenu(item.id)" />
                <transition name="slide">
                  <div class="options-menu" v-if="menuId == item.id">
                    <div
                      v-for="(item, index) in menu"
                      :key="index"
                      class="options-item"
                    >
                      <component :is="item.icon"></component>
                      <p>{{ item.name }}</p>
                    </div>
                  </div>
                </transition>
              </div>

              <transition name="slide">
                <div v-if="taskIndex == index" class="list" id="missions">
                  <div class="add-goal cl_purple-1">
                    <add class="add" />
                    <h6>Добавить задание</h6>
                  </div>
                  <div
                    v-for="(item, index) in goals[goalIndex].tasks[taskIndex]
                      .missions"
                    :key="`mission_${index}`"
                    class="list-item"
                  >
                    <div class="list-item-block">
                      <div class="title">
                        <h6>Задание №{{ index + 1 }} - {{ item.mission }}</h6>
                      </div>
                      <options class="options" @click="openMenu(item.id)" />
                      <transition name="slide">
                        <div class="options-menu" v-if="menuId == item.id">
                          <div
                            v-for="(item, index) in menu"
                            :key="index"
                            class="options-item"
                          >
                            <component :is="item.icon"></component>
                            <p>{{ item.name }}</p>
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["road_map", "task", "goal"],
  data: () => ({
    menuId: -1,
    menu: [
      { icon: "edit", name: "Редактировать" },
      { icon: "trash", name: "Удалить" },
      { icon: "graph", name: "Построить график" }
    ],

    goalIndex: -1,
    taskIndex: -1
  }),
  components: {
    add: () => import("@/assets/images/old/account/plus-circle.svg"),
    edit: () => import("@/assets/images/old/account/settings.svg"),
    trash: () => import("@/assets/images/old/account/trash.svg"),
    options: () => import("@/assets/images/old/account/options-2-fill.svg"),
    graph: () => import("@/assets/images/old/account/bar-chart-2.svg")
  },
  computed: {
    goals() {
      return this.road_map;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.goalIndex = this.goal;
      this.taskIndex = this.task;
    });
  },
  methods: {
    getData(option, index) {
      this[`${option}Index`] == index
        ? (this[`${option}Index`] = -1)
        : (this[`${option}Index`] = index);
      option == "goal" ? (this.taskIndex = -1) : "";
    },
    openMenu(id) {
      this.menuId == id ? (this.menuId = -1) : (this.menuId = id);
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in;
}

.slide-enter-to,
.slide-leave {
  max-height: 250px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.edit_map-content {
  padding: 0.5rem 0 0 0.25rem;
  h6 {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.add-goal {
  display: flex;
  align-items: center;
  width: fit-content;

  margin-left: 2rem;
  cursor: pointer;
  .add {
    margin-right: 0.25rem;

    path {
      fill: $purple-1 !important;
    }
  }
  &:hover {
    h6 {
      text-decoration: underline;
    }
  }
}
.list {
  margin-top: 1rem;
}
.list-item {
  border-radius: 5px;
  &-block {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;

    background-color: $white;
    color: $purple-1;

    height: 32px;
    border-radius: 5px;
    padding: 0 0.5rem;

    &:hover {
      box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.16);
    }

    .title {
      display: flex;
      height: 100%;
      align-items: center;
      overflow: hidden;
      flex: 1;
    }
  }

  .options {
    cursor: pointer;
    path {
      fill: $purple-12 !important;
    }
    &.open {
      z-index: 2;

      path {
        fill: $orange-2 !important;
      }
    }
  }

  & + & {
    margin-top: 0.5rem;
  }
}

#tasks {
  margin: 1rem 0 1rem 0.75rem;
  .add-goal {
    margin-bottom: 1rem;
  }
}
#missions {
  margin: 1rem 0 1rem 1.25rem;
}
.options-menu {
  position: absolute;
  right: 0;
  top: 0;
  background: $white;
  z-index: 1;
  width: 189px;
  padding: 3rem 0 2rem 1.5rem;
  border-radius: 5px;
  .options-item {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      p {
        color: $purple-1;
        text-decoration: underline;
      }
      svg path {
        fill: $purple-1 !important;
      }
    }
  }
  .options-item + .options-item {
    margin-top: 1rem;
  }
  svg {
    margin-right: 1rem;
    path {
      fill: $white-purple-1 !important;
    }
  }
}
@include mq($DesktopWidth, max) {
  #tasks {
    margin: 1rem 0 1rem 0.5rem;
  }
  #missions {
    margin: 1rem 0 1rem 0.75rem;
  }
}
@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .add-goal {
    margin: 0;
  }
  .list {
    margin-top: 0.5rem;
    &-item {
      border-radius: 61px;
    }
  }
  .edit_map-content h6 {
    font-size: 12px;
  }
  #tasks,
  #missions {
    margin-top: 0.5rem;
    margin-left: 0.25rem;
    .add-goal {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
