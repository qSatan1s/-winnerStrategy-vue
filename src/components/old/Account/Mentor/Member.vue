<template>
  <div class="member">
    <div class="member__avatar-name">
      <div class="member__avatar">
        <img
          class="image"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo"
          alt=""
        />
      </div>
      <div class="member__name">Артём Грачёвский</div>
    </div>
    <div class="member__features-files">
      <div class="member__search">
        <div class="icon-search">
          <search></search>
        </div>
        <input
          class="input-search"
          type="text"
          placeholder="Поиск по ключевым словам"
        />
      </div>
      <div
        class="member__files "
        v-click-outside="hideFolder"
        @click="toggleFolder"
        v-bind:class="{ opened: openedFolder }"
      >
        <div class="folder-icon">
          <folder />
        </div>
        <div class="features-menu" v-show="openedFolder">
          <ul class="list-items">
            <li class="item" v-for="(item, index) in filesList" :key="index">
              <!-- <div class="item__icon">{{item.icon}}</div> -->
              <div class="item__icon">
                <component :is="item.icon"></component>
              </div>
              <div class="item__count">{{ item.count }}</div>
              <div class="item__name">{{ item.name }}</div>
            </li>
          </ul>
          <div class="notification">
            <div class="notification__header">
              <div class="icon">
                <notifications />
              </div>
              <div class="line">
                <div class="circle"></div>
              </div>
            </div>
            <div class="notification__footer">
              <span class="name">уведомления в окне браузера</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="member__settings"
        v-click-outside="hideSettings"
        @click="toggleSettings"
        v-bind:class="{ opened: openedSettings }"
      >
        <div class="settings-icon">
          <settings />
        </div>
        <div
          class="features-menu features-menu--settings"
          v-show="openedSettings"
        >
          <ul class="list-items list-items--settings">
            <li class="item" v-for="(item, index) in settingsList" :key="index">
              <!-- <div class="item__icon">{{item.icon}}</div> -->
              <div class="item__icon">
                <component :is="item.icon"></component>
              </div>
              <div class="item__name">{{ item.name }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import filesList from "./files-list";
import settingsList from "./settings-list";

export default {
  data() {
    return {
      openedFolder: false,
      openedSettings: false
    };
  },
  components: {
    search: () => import("@/assets/images/old/account/search.svg"),
    settings: () => import("@/assets/images/old/account/options-2-fill.svg"),
    folder: () => import("@/assets/images/old/account/folder.svg"),
    gallery: () =>
      import("@/assets/images/old/account/files-list/image-outline.svg"),
    videocam: () =>
      import("@/assets/images/old/account/files-list/videocam-outline.svg"),
    document: () =>
      import("@/assets/images/old/account/files-list/document-outline.svg"),
    exit: () =>
      import("@/assets/images/old/account/files-list/exit-outline.svg"),
    mic: () => import("@/assets/images/old/account/files-list/mic-outline.svg"),
    notifications: () =>
      import(
        "@/assets/images/old/account/files-list/notifications-outline.svg"
      ),
    trash: () =>
      import("@/assets/images/old/account/files-list/trash-outline.svg"),
    download: () =>
      import("@/assets/images/old/account/files-list/download-outline.svg")
  },

  methods: {
    toggleFolder() {
      this.openedFolder = true;
      this.openedSettings = false;
    },
    toggleSettings() {
      this.openedSettings = true;
      this.openedFolder = false;
    },

    hideFolder() {
      this.openedFolder = false;
    },
    hideSettings() {
      this.openedSettings = false;
    }
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside
  },
  computed: {
    filesList() {
      return filesList;
    },
    settingsList() {
      return settingsList;
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  flex-flow: column;
  align-self: start;
  margin-top: 22px;
  color: $purple-1;
  &__header {
    display: flex;
    margin-bottom: 8px;
    justify-content: center;
    align-items: center;
    .line {
      margin-left: 8px;
      width: 48px;
      height: 12px;
      background-color: $white-purple-2;
      border-radius: 5px;
      position: relative;
      .circle {
        cursor: pointer;
        position: absolute;
        background-color: $white-purple-1;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
  &__footer {
    text-align: center;
    .name {
      font-size: 12px;
      line-height: 1.33em;
    }
  }
}
.member {
  height: 32px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  z-index: 1;
  position: relative;
  padding: 4px 8px;
  &__avatar-name {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  &__avatar {
    width: 23px;
    height: 23px;
    border: 1px solid #5752a0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    .image {
      width: 100%;
      height: 100%;
    }
  }
  &__name {
    margin-left: 6px;
    font-size: 12px;
    line-height: 16px;
    color: $purple-1;
  }
  &__features-files {
    display: flex;
  }
  &__files {
    margin-right: 16px;
    .folder-icon {
      z-index: 2;
      position: relative;
    }
    &.opened {
      .folder-icon svg path {
        fill: $orange-2 !important;
      }
    }
    &:hover {
      .folder-icon svg path {
        fill: $orange-2 !important;
      }
    }
  }
  &__settings {
    &:hover {
      .settings-icon svg path {
        fill: $orange-2 !important;
      }
    }
    &.opened {
      .settings-icon svg path {
        fill: $orange-2 !important;
      }
    }
  }
  &__files,
  &__settings {
    position: relative;
    cursor: pointer;
    svg path {
      transition: all 0.2s ease-in-out;
    }
    .settings-icon {
      z-index: 2;
      position: relative;
    }
  }
  &__search {
    margin-right: 16px;
    position: relative;
    .icon-search {
      cursor: pointer;
      position: absolute;
      width: 16px;
      height: 15.61px;
      top: 50%;
      right: 6px;
      transform: translate(0%, -50%);
    }
    .input-search {
      padding-left: 6px;
      padding-right: 36px;
      border-radius: 5px;
      width: 100%;
      max-width: 316px;
      min-width: 316px;
      height: 24px;
      background-color: $white-purple-2;
      font-family: $f-muller;

      font-size: 14px;
      line-height: 1em;
      &::placeholder {
        color: $purple-1;
      }
    }
  }
}
.features-menu {
  &--settings {
    padding-right: 8px;
    padding-left: 8px;
    .list-items.list-items--settings .item__icon {
      margin-right: 8px;
    }
  }
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  background-color: white;
  min-width: 202px;
  padding: 40px 14px 24px;
  transform: translate(-100%, 0);
  top: 0px;
  left: 25px;
  cursor: default;
  .list-items {
    .item {
      cursor: pointer;
      display: flex;
      margin-bottom: 8px;
      align-items: center;
      font-size: 12px;
      line-height: 1.33em;
      &:last-child {
        margin-bottom: 0;
      }
      &__icon {
        margin-right: 16px;
      }
      &__count {
        margin-right: 4px;
      }
      transition: all 0.2s ease-in-out;
      &:hover {
        color: $orange-2;
        svg path {
          stroke: $orange-2 !important;
        }
      }
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .member {
    &__search {
      .input-search {
        width: 100%;
        min-width: 0;
        max-width: 100%;
      }
    }
  }
}
</style>
