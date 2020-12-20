<template>
  <div>
    <h1>Нейтральный дизайн</h1>
    <router-link to="/old/home">
      На страницу old
    </router-link>
    |
    <router-link to="/old/account">
      На страницу old account
    </router-link>
    |
    <router-link to="/young/home">
      На страницу young
    </router-link>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style lang="scss" scoped>
a {
  color: blue;
  font-size: 20px;
}
</style>
