<template>
  <div class="mentor-item bg_orange-2">
    <div class="country">
      <!-- dynamic img -->
      <img
        :src="`/images/old/countries/${mentor.country.image}`"
        :alt="mentor.country.name"
      />
    </div>
    <!-- dynamic img -->
    <div class="preview" v-if="mentor.video" :style="backgroundStyle">
      <play class="play-video" />
    </div>
    <div class="mentor-about">
      <p class="cl_white">{{ mentor.aboutUser }}</p>
    </div>
    <div class="mentor-info">
      <div class="profile-img">
        <!-- dinamic img -->
        <img :src="mentor.image" alt="Фото профиля" />
      </div>
      <div class="profile-name">
        <h5 class="cl_white">{{ fullName }}</h5>
      </div>
      <div class="mentor-button desktop">
        <button class="bg_white cl_orange-2">{{ $t(`buttons.enroll`) }}</button>
      </div>
    </div>
    <div class="mentor-button tablet">
      <button type="button" class="bg_white cl_orange-2">
        {{ $t(`buttons.enroll`) }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentorItem",
  props: ["mentor"],
  computed: {
    fullName() {
      return this.mentor.name.firstName + " " + this.mentor.name.lastName;
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.mentor.video})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      };
    }
  },
  components: {
    play: () => import("@/assets/images/old/ui/play-video.svg")
  }
};
</script>

<style lang="scss" scoped>
.mentor-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  flex: 0.485;

  border-radius: 5px;
  margin-top: 1.5rem;
  padding: 1rem 0 0 1rem;

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 2px rgba(0, 0, 0, 0.16);

  position: relative;
  .country {
    position: absolute;
    top: 8px;
    right: 8px;
    img {
      width: 24px;
      height: 24px;
      @include mq($TableWidth, max) {
        width: 16px;
        height: 16px;
      }
    }
  }
}

.preview {
  border-radius: 5px;

  width: 210px;
  height: 160px;
  // dinamic img

  display: flex;
  justify-content: center;
  align-items: center;

  .play-video {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}

.mentor-about {
  text-align: left;
  margin-bottom: 0.75rem;

  p {
    width: 154px;

    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 11;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.mentor-info {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  .profile-img {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    &::before {
      z-index: 0;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgb(255, 255, 255) 25%,
        rgb(246, 240, 101)
      );
    }
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid transparent;
      z-index: 1;
    }
  }

  .profile-name {
    flex: 0.5;
    display: flex;
    justify-content: center;
    width: 50%;

    h5 {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      line-height: 16px;
    }
  }
}

.mentor-button {
  align-self: flex-end;
  display: inline-flex;

  button {
    width: 160px;
    height: 32px;
    border-bottom-right-radius: 5px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.5),
        0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}

.tablet {
  display: none;
}

@include mq-between($SmPhoneWidth, $DesktopWidth) {
  .mentor-item {
    flex-flow: column nowrap;
    user-select: none;
    padding: 0.5rem 0 0 0;

    align-items: center;

    @include mq-between($SmPhoneWidth, $PhoneWidth) {
      min-width: 100%;
    }

    @include mq-between($TableWidth, $SmDesktopWidth) {
      min-width: 209px;
    }
    @include mq-between($SmDesktopWidth, $DesktopWidth) {
      flex: 0.24;
    }
  }

  .mentor-info {
    order: 1;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 94%;
    @include mq-between($TableWidth, $SmDesktopWidth) {
      width: 197px;
    }

    .profile-name {
      flex: 0.1;
      display: block;
      margin-left: 0.5rem;

      h5 {
        font-size: 12px;
        text-align: left;
      }
    }

    .profile-img {
      width: 52px;
      height: 52px;
      @include mq-between($TableWidth, $DesktopWidth) {
        width: 34px;
        height: 34px;
      }
      img {
        width: 48px;
        height: 48px;
        border-width: 2px;
        @include mq-between($TableWidth, $DesktopWidth) {
          width: 34px;
          height: 34px;
        }
      }
    }

    .desktop {
      display: none;
    }
  }

  .mentor-button {
    width: 40%;
    button {
      width: 100%;
      height: 24px;
    }
  }

  .preview {
    order: 2;
    width: 94%;
    height: 172px;
    margin: 0.5rem 0;

    @include mq-between($TableWidth, $SmDesktopWidth) {
      width: 197px;
      height: 126px;
    }
  }

  .mentor-about {
    order: 3;
    width: 94%;
    p {
      width: auto;
      word-break: break-word;
      -webkit-line-clamp: 7;
    }
  }

  .tablet {
    display: flex;
    order: 4;
  }
}
</style>
