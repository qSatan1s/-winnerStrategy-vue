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
  height: 45px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  cursor: pointer;
  font-size: $fontYoungMainSize;
  font-weight: bold;
}
.btn:hover {
  color: $background;
  background-color: $white;
}
</style>
