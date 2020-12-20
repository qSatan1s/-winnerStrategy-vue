<template>
  <div class="mentor-group">
    <div class="mentor-group-top">
      <h2 class="cl_white">{{ $t("menu.mentors") }}</h2>
      <Button
        class="desktop"
        color="white"
        bgColor="background"
        text="showMentors"
      />
    </div>
    <div class="mentor-group-items">
      <mentor-item
        v-for="(mentor, index) in mentors.slice(0, 3)"
        :key="index"
        :mentor="mentor"
      />
    </div>
    <Button
      class="adaptive"
      color="white"
      bgColor="background"
      text="showMentors"
    />
  </div>
</template>

<script>
import Button from "../../SingleComponents/Button";
import MentorItem from "./MentorItem";
import mentors from "./mentors";

export default {
  name: "MentorGroup",
  components: {
    Button,
    MentorItem
  },
  computed: {
    mentors() {
      return mentors;
    }
  }
};
</script>

<style lang="scss" scoped>
.mentor-group {
  display: flex;
  flex-flow: column wrap;
}

.mentor-group-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 48px;
    @include mq-between($SmPhoneWidth, $DesktopWidth) {
      font-size: 34px;
    }
  }

  .btn {
    padding: 0 1rem;
  }
}

.mentor-group-items {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  margin-top: 2rem;
}

.adaptive {
  display: none;
  align-self: center;
  padding: 0 1rem;
}

@include mq-between($SmPhoneWidth, $TableWidth) {
  .mentor-group-items {
    justify-content: center;
    flex-flow: row wrap;
  }
}

@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .adaptive {
    display: block;
  }
  .desktop {
    display: none;
  }
}

@include mq-between($PhoneWidth, $TableWidth) {
  .mentor-group-items {
    justify-content: space-between;
  }
  .adaptive {
    display: none;
  }
  .desktop {
    display: block;
  }
}
</style>
