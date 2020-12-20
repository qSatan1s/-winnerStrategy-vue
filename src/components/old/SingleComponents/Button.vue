<template>
  <button class="btn" type="button" :class="`bg_${bgColor} cl_${color}`">
    {{ $t(`buttons.${text}`) }}
  </button>
</template>

<script>
export default {
  props: ["bgColor", "color", "text"]
};
</script>

<style lang="scss" scoped>
.btn {
  width: inherit;
  height: 36px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.14em;
}

.btn:hover {
  background-color: $white;
  color: $orange-2;
  box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.5),
    0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
