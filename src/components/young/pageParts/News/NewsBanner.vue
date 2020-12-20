<template>
  <div class="news_banner cl_white">
    <div class="news_banner_header">
      <h1>Давай к нам учиться!</h1>
    </div>
    <div class="news_banner_about">
      <h3>Все просто, увлекательно и с твоими любимыми персонажами!</h3>
    </div>
    <Button text="showPodcasts" color="white" bgColor="background" />
  </div>
</template>

<script>
import Button from "@/components/young/SingleComponents/Button";
export default {
  name: "NewsBanner",
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.news_banner {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  width: 384px;

  &_header {
    margin-bottom: 2rem;
    h1 {
      font-size: 60px;
      font-weight: 900;
      line-height: 75px;
    }
  }

  &_about {
    margin-bottom: 2rem;
    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
    }
  }

  .btn {
    width: auto;
    padding: 0 1rem;
  }
}
@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .news_banner {
    &_header {
      width: 60%;
      margin-bottom: 1rem;
      h1 {
        font-size: 36px;
        line-height: 45px;
      }
    }
    &_about {
      width: 70%;
      margin-bottom: 1rem;
      h3 {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>
