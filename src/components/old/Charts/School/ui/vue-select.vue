<template>
  <v-select
    class="style-chooser"
    :placeholder="placeholder"
    :options="options"
    v-model="vData"
  >
  </v-select>
</template>

<script>
export default {
  name: "VueSelect",
  props: ["options", "placeholder"],
  data() {
    return {
      vData: ""
    };
  }
};
</script>

<style lang="scss">
.style-chooser {
  position: relative;
  .vs__dropdown-toggle {
    border-radius: 5px;
    max-height: 24px;
    overflow: hidden;
  }
  &.vs--searching {
    .vs__selected {
      opacity: 0 !important;
    }
  }
  .vs__dropdown-option {
    text-align: left;
    text-transform: none;
    width: 100%;
    padding: 0 4px;
    &:hover {
      background-color: #a29ff1;
    }
  }
  .vs__selected {
    position: absolute;
    left: 5px;
    top: 0;
    width: 100%;
    text-align: left;
    padding: 2px 0px;
  }
  .vs__actions {
    position: absolute;
    right: 5px;
    top: 1.5px;
    svg {
      padding-top: 0;
      fill: #5752a0;
    }
  }
  &.vs--open {
    .vs__selected {
      opacity: 0.7;
    }
    .vs__dropdown-menu {
      z-index: 1;
    }
  }
  .vs__dropdown-menu {
    position: absolute;
    width: 100%;
  }
  .vs__selected-options {
    input {
      width: 100%;
      background-color: #a29fd1;
      border-radius: 5px;
      padding: 2px 4px;
      color: #5752a0;
      &::placeholder {
        text-transform: none;
      }
    }
  }
  .vs__clear,
  .vs__search::placeholder,
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    background: #a29fd1;
    border: none;
    color: #5752a0;
    text-transform: none;
  }
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
// End Vue select
</style>
