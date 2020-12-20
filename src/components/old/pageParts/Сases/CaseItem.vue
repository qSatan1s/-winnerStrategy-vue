<template>
  <div class="case-item mb-1 cl_white">
    <div class="case-image">
      <!-- dinamic img -->
      <img :src="item.image" alt="" />
    </div>
    <div class="case-about bg_purple-1">
      <h6>{{ item.title }}</h6>
      <p>{{ item.briefInformation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.case-item {
  display: flex;
  justify-content: space-between;
  height: 80px;
  min-width: 100px;
  max-width: 334px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
}

.case-image {
  width: 99px;
  height: inherit;
  margin-right: 0.5rem;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12),
      0px 1px 2px rgba(0, 0, 0, 0.16);
  }
}

.case-about {
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 2px rgba(0, 0, 0, 0.16);
  // min-width: 100px;
  max-width: 220px;
  padding: 0.5rem;
  height: inherit;
  border-radius: 5px;
  p {
    margin-top: 0.25rem;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
@include mq-between($SmDesktopWidth, $DesktopWidth) {
  .case-item {
    min-width: 100%;
  }
  .case-about {
    max-width: 250px;
  }
}
</style>
