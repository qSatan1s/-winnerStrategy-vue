<template>
  <div class="school_rating">
    <div class="school_rating_top">
      <h2 class="cl_white">{{ $t("menu.schools") }}</h2>
      <Button
        class="desktop"
        color="white"
        bgColor="background"
        text="showSchools"
      />
    </div>
    <div class="school_rating_main cl_white mt-1">
      <div class="list_block">
        <div class="list_block_countries">
          <div class="list_title" @click="openList('Country')">
            <h3>По городам/странам</h3>
            <arrow class="country_arrow" :class="{ up: openCountry }" />
          </div>
          <transition name="slide">
            <ul v-if="openCountry" class="list_content">
              <li
                class="list_content_item"
                v-for="(item, index) in countries"
                :key="index"
                @click="filterBy('Country', item.country, index)"
              >
                <listCircleActive
                  class="list_circle"
                  v-if="currentCountryIndex == index"
                />
                <listCircle class="list_circle" v-else />
                <div class="country">
                  <img
                    class="country_img"
                    :src="`/images/young/school_rating/${item.img}.png`"
                    alt=""
                  />
                  <h4>{{ item.country }}</h4>
                </div>
              </li>
            </ul>
          </transition>
        </div>
        <div class="list_block_school mt-1">
          <div class="list_title" @click="openList('School')">
            <h3>По названию школы</h3>
            <arrow class="school_arrow" :class="{ up: openSchool }" />
          </div>
          <transition name="slide">
            <ul v-if="openSchool" class="list_content">
              <li
                class="list_content_item"
                v-for="(item, index) in schools"
                :key="index"
                @click="filterBy('School', item.schoolName, index)"
              >
                <listCircleActive
                  class="list_circle"
                  v-if="currentSchoolIndex == index"
                />
                <listCircle class="list_circle" v-else />
                <h4>{{ item.schoolName }}</h4>
              </li>
            </ul>
          </transition>
        </div>
      </div>
      <div class="rating_block">
        <div
          class="rating_block_item"
          v-for="(item, index) of sortedArray"
          :key="index"
        >
          <div class="school_place">
            <img
              v-if="index == 0 && windowWidth < 992"
              src="@/assets/images/young/golden-star.png"
              alt=""
            />
            <img
              v-else-if="index == 1 && windowWidth < 992"
              src="@/assets/images/young/platinum-star.png"
              alt=""
            />
            <img
              v-else-if="index == 2 && windowWidth < 992"
              src="@/assets/images/young/bronze-star.png"
              alt=""
            />
            <h3>{{ index + 1 }} место</h3>
          </div>
          <!-- dynamic img -->
          <div class="school">
            <img
              :src="`/images/young/school_rating/${item.image}.png`"
              class="school_country_img"
              alt=""
            />
            <h3 class="school_name">{{ item.schoolName }}</h3>
          </div>

          <div class="school_points">
            <span class="star">
              <star />
            </span>
            <h4>{{ item.points }}</h4>
          </div>
        </div>
      </div>
    </div>
    <Button
      class="adaptive"
      color="white"
      bgColor="background"
      text="showSchools"
    />
  </div>
</template>

<script>
import Button from "../SingleComponents/Button";
import schoolRatings from "./school_rating";
export default {
  name: "AppSchoolRating",
  components: {
    Button,
    arrow: () => import("@/assets/images/young/ui/arrow-down.svg"),
    listCircle: () => import("@/assets/images/young/ui/list-circle.svg"),
    listCircleActive: () =>
      import("@/assets/images/young/ui/list-circle-active.svg"),
    star: () => import("@/assets/images/young/rating_star_points.svg")
  },

  data: () => ({
    openCountry: false,
    openSchool: false,

    filterCountry: "",
    filterSchool: "",

    windowWidth: 0,

    currentSchoolIndex: -1,
    currentCountryIndex: -1,

    countries: [
      { country: "Россия", img: "russia" },
      { country: "Казахстан", img: "kazahstan" },
      { country: "Украина", img: "ukrain" },
      { country: "Беларусь", img: "belarus" },
      { country: "Япония", img: "japan" }
    ],
    schools: [
      { schoolName: "Школа №2352 средней гимназии" },
      { schoolName: "Kyoto Art Univesity" },
      { schoolName: "Школа №2351 средней гимназии" },
      { schoolName: "Школа №2356 средней гимназии" }
    ]
  }),
  computed: {
    filteredList() {
      if (this.filterCountry && this.filterSchool) {
        return this.schoolRatings.filter(item => {
          return (
            item.country == this.filterCountry &&
            item.schoolName == this.filterSchool
          );
        });
      } else if (this.filterCountry) {
        return this.schoolRatings.filter(item => {
          return item.country == this.filterCountry;
        });
      } else if (this.filterSchool) {
        return this.schoolRatings.filter(item => {
          return item.schoolName == this.filterSchool;
        });
      } else {
        return this.schoolRatings;
      }
    },
    sortedArray() {
      const sortBy = (a, b) => {
        return a.points < b.points ? 1 : -1;
      };

      return [...this.filteredList].sort(sortBy);
    },
    schoolRatings() {
      return schoolRatings;
    }
  },
  methods: {
    openList(list) {
      list == "Country"
        ? (this.openCountry = !this.openCountry)
        : (this.openSchool = !this.openSchool);
    },
    filterBy(list, option, index) {
      if (this[`current${list}Index`] == index) {
        this[`current${list}Index`] = -1;
        this[`filter${list}`] = "";
      } else {
        this[`current${list}Index`] = index;
        this[`filter${list}`] = option;
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 250px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.school_rating {
  &_top {
    display: flex;
    justify-content: space-between;
  }
  &_main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}

.btn {
  padding: 0 1rem;
}

.adaptive {
  display: none;
}

.list_block {
  display: flex;
  flex-flow: column nowrap;
  flex: 0.29;

  .list_title {
    display: flex;
    align-items: center;

    user-select: none;

    cursor: pointer;
    h3 {
      margin-right: 1rem;
    }
  }

  .list_content {
    transition: all 0.5s ease;
    &_item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      cursor: pointer;

      user-select: none;

      margin-top: 1rem;

      .country_img {
        margin-right: 0.5rem;
        width: 29px;
      }

      .country {
        display: flex;
        width: min-content;
      }

      h4 {
        width: 225px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  .list_circle {
    margin-right: 0.7rem;
    z-index: 1;
  }

  .up {
    transform: rotate(180deg);
  }
}

.rating_block {
  flex: 1;
  &_item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: $case-background-image;

    padding: 1rem 2.5rem;
    border-radius: 10px;
    border: 2px solid $blue-border;

    height: 75px;

    h3 {
      font-size: 24px;
    }
  }
  &_item:hover {
    border-color: $white;
    cursor: pointer;
  }
  .rating_block_item + .rating_block_item {
    margin-top: 1rem;
  }
  .school_place {
    display: flex;
    img {
      height: 24px;
      margin-right: 0.5rem;
    }
  }
  .school {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_country_img {
      width: 45px;
    }
    &_name {
      margin-left: 2rem;
      width: 385px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .school_points {
    display: flex;
    align-items: center;
    position: relative;
    h4 {
      background: $starColor;
      color: black;
      border-radius: 40px;
      padding: 0.1rem 2.5rem;
      text-align: center;
      min-width: 138px;
      max-width: 148px;

      overflow: hidden;
      text-overflow: ellipsis;
    }
    .star {
      position: absolute;
      z-index: 1;
      left: -20px;
    }
  }
}

@include mq-between($SmDesktopWidth, $DesktopWidth) {
  .rating_block_item {
    padding: 1rem 2rem;

    .school_name {
      width: 254px;
    }
  }

  .list_block {
    flex: 0.37;
  }
}

@include mq($SmDesktopWidth, max) {
  .rating_block_item:nth-last-child(-n + 2) {
    display: none;
  }

  .rating_block_item:nth-child(-n + 3) {
    display: flex;
  }

  .rating_block_item {
    flex-flow: column nowrap;
    align-items: flex-start;

    .school_name {
      width: 100%;
      margin-left: 1rem;
      -webkit-line-clamp: 1;
    }

    .school_points {
      h4 {
        margin-left: 0.8rem;
      }
      .star {
        left: 0;
      }
    }
  }
}

@include mq-between($TableWidth, $SmDesktopWidth) {
  .rating_block_item {
    height: 153px;
  }

  .list_block {
    flex: 0.64;
  }
}

@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .btn {
    display: none;
  }

  .adaptive {
    display: block;
    margin: 1.5rem auto;
    padding: 0 2rem;
  }

  .rating_block_item {
    padding: 1rem 0.5rem;
  }
}

@include mq-between($SmPhoneWidth, $TableWidth) {
  .school_rating_main {
    flex-flow: column nowrap;
  }

  .rating_block_item {
    margin-top: 1.5rem;
    height: 168px;

    .school_name {
      font-size: 20px;
      -webkit-line-clamp: 2;
    }
  }

  .list_block {
    flex: 0.8;
  }
}
</style>
