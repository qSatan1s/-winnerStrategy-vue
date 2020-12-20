<template>
  <main-layout-old>
    <app-slider />
    <div class="mt-4"></div>
    <app-news />
    <div class="mt-4"></div>
    <person />
    <div class="mt-4"></div>
    <div class="case-groups mt-1 mb-1">
      <case-group :cases="topCases" title="topCases" :showItems="3" />
      <case-group :cases="cases" title="lastCases" :showItems="6" />
    </div>
    <div class="mt-4"></div>
    <mentor-group />
    <div class="mt-4"></div>
    <school />
  </main-layout-old>
</template>

<script>
import AppSlider from "@/components/old/pageParts/AppSlider";
import AppNews from "@/components/old/pageParts/News/NewsGroup";
import Person from "@/components/old/Charts/Person/";
import School from "@/components/old/Charts/School/";
import CaseGroup from "@/components/old/pageParts/Сases/CaseGroup";
import MentorGroup from "@/components/old/pageParts/Mentors/MentorGroup";
// variable
import cases from "@/components/old/pageParts/Сases/cases.js";

export default {
  components: {
    AppSlider,
    Person,
    School,
    CaseGroup,
    MentorGroup,
    AppNews
  },
  computed: {
    cases() {
      return cases.cases;
    },
    topCases() {
      return cases.topCases;
    }
  }
};
</script>
<style lang="scss" scoped>
.case-groups {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

@include mq($SmPhoneWidth, min) {
  .case-groups {
    justify-content: center;
  }
}

@include mq($PhoneWidth, min) {
  .case-groups {
    justify-content: space-between;
  }
}
</style>
