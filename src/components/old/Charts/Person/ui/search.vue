<template>
  <div class="input-seach">
    <div class="icon">
      <search />
    </div>
    <input type="text" placeholder="Поиск рейтинга по имени..." />
  </div>
</template>

<script>
export default {
  name: "PersonSecrch",
  components: {
    search: () => import("@/assets/images/old/account/search.svg")
  }
};
</script>

<style lang="scss" scoped>
.input-seach {
  position: relative;
  .icon {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  input {
    position: relative;
    width: 100%;
    min-height: 24px;
    max-width: 276px;
    background: #ffffff;
    border-radius: 5px;
    color: #5752a0;
    font-size: 14px;
    line-height: 1em;
    padding: 5px 30px 5px 16px;
    &::placeholder {
      color: #5752a0;
    }
  }
}
@include mq($PhoneWidth, max) {
  .input-seach {
    width: 100%;
    max-width: 256px;
    input {
      width: 100%;
      font-size: 12px;
      line-height: 1em;
    }
  }
}
</style>
