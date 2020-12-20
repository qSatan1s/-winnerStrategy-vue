<template>
  <main-layout-young>
    <app-slider />
    <div class="mt-4"></div>
    <app-news />
    <div class="mt-4"></div>
    <app-rating />
    <div class="mt-4"></div>
    <case-group />
    <div class="mt-4"></div>
    <mentor-group />
    <div class="mt-4"></div>
    <app-school-rating />
  </main-layout-young>
</template>

<script>
import AppSlider from "@/components/young/pageParts/AppSlider";
import AppRating from "@/components/young/pageParts/AppRating";
import CaseGroup from "@/components/young/pageParts/Cases/CaseGroup";
import MentorGroup from "@/components/young/pageParts/Mentors/MentorGroup";
import AppNews from "@/components/young/pageParts/News/NewsGroup";
import AppSchoolRating from "@/components/young/pageParts/AppSchoolRating";

export default {
  components: {
    AppSlider,
    AppRating,
    CaseGroup,
    MentorGroup,
    AppNews,
    AppSchoolRating
  }
};
</script>
<style lang="scss" scoped></style>
