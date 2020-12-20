<template>
  <div class="mentor-item">
    <div class="mentor-item-preview">
      <!-- dinamic img -->
      <video :poster="mentor.video"></video>
      <div class="play-preview">
        <play-preview />
      </div>
    </div>
    <div class="mentor-item-info bg_white">
      <div class="mentor-country cl_background">
        <!-- dinamic img -->
        <img :src="mentor.country.image" alt />
        <h4>{{ mentor.country.name }}</h4>
      </div>
      <div class="mentor-profile">
        <div class="profile-image">
          <!-- dinamic img -->
          <img :src="mentor.image" alt />
        </div>
        <div class="profile-name cl_background">
          <h3>{{ fullName }}</h3>
        </div>
      </div>
      <div class="mentor-about cl_background">
        <h5>{{ mentor.aboutUser }}</h5>
      </div>
      <div class="mentor-subscribe">
        <Button color="background" bgColor="white" text="enroll" />
        <a href="#" class="cl_background">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../SingleComponents/Button";
export default {
  name: "MentorItem",
  props: ["mentor"],
  components: {
    Button,
    playPreview: () => import("@/assets/images/young/ui/play-preview.svg")
  },

  computed: {
    fullName() {
      return (
        this.mentor.name.firstName +
        " " +
        this.mentor.name.lastName +
        " " +
        this.mentor.name.middleName
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.mentor-item {
  display: flex;
  flex-flow: column wrap;

  flex: 0.32;

  max-width: 455px;
  margin-bottom: 1.3125rem;

  border-radius: 10px;
}

.mentor-item-preview {
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;

  width: inherit;
  height: 197px;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }

  .play-preview {
    display: flex;
    position: absolute;

    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba($color: $case-background-image, $alpha: 0.5);

    svg {
      cursor: pointer;
    }
  }
}
.mentor-item-info {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;

  width: inherit;

  padding: 1.3rem 1rem 2rem 1rem;
  height: 318px;

  border-radius: 0 0 10px 10px;
}

.mentor-country {
  display: flex;
  flex-flow: row wrap;
  img {
    margin-right: 0.3rem;
  }
}

.mentor-profile {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.profile-image {
  margin-right: 0.7rem;
  img {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 50%;
  }
}

.profile-name {
  flex: 0.9;
}

.mentor-about {
  h5 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.mentor-subscribe {
  display: flex;
  align-items: center;
  .btn:hover {
    background-color: $background;
    color: $white;
  }
  .btn {
    border-radius: 15px;
    border-color: $background;
    font-size: 18px;
    padding: 0.5rem 1rem;
    margin-right: 6rem;
  }

  a {
    text-decoration: underline;
    font-size: 18px;
  }
}

@include mq($SmDesktopWidth, max) {
  .mentor-item:last-child {
    display: none;
  }
}

@include mq-between($SmPhoneWidth, $PhoneWidth) {
  .mentor-item {
    flex: 1 1 auto;

    .mentor-item-info {
      padding: 1.3rem 0.5rem 2rem 0.5rem;
    }
    a {
      font-size: 15px;
    }
  }
}

@include mq-between($PhoneWidth, $SmDesktopWidth) {
  .mentor-item {
    flex: 0.48;
  }
}

@include mq-between($SmPhoneWidth, $DesktopWidth) {
  .mentor-item-info {
    padding-bottom: 1rem;
  }
  @include mq($TableWidth, max) {
    .mentor-subscribe {
      flex-flow: column;
      .btn {
        margin: 0;
        width: 60%;
      }
      a {
        margin-top: 1rem;
      }
    }
  }
  @include mq-between($TableWidth, $DesktopWidth) {
    .mentor-subscribe {
      .btn {
        margin-right: 3rem;
      }
    }
  }
}
</style>
