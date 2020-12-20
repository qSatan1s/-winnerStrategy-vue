<template>
  <div class="account-chat">
    <div class="account-banner">
      <img
        src="@/assets/images/old/account/bar-chart-2.svg"
        alt=""
        class="image"
      />
      <div class="name">Связь с ментором</div>
    </div>
    <!-- <div class="show-for-tablet hide-for-desktop hide-for-desktop">
          <member></member>
        </div> -->
    <div class="account-footer">
      <div class="account-chat-grid">
        <div class="left">
          <chat-list/>
        </div>
        <div class="right">
          <div class="hide-for-tablet">
            <member></member>
          </div>
          <div class="account-chat__chat">
            <img
              class="chat-bg"
              src="@/assets/images/old/account/chat-bg.png"
              alt=""
            />
            <chat></chat>
          </div>
          <div class="account-chat__editor">
            <div class="mic-outline">
              <mic></mic>
            </div>
            <div class="happy">
              <happy></happy>
            </div>
            <div class="attach-sharp">
              <attach></attach>
            </div>
            <textarea class="editor" placeholder="Сообщение..."></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from './ChatList'

export default {
  components: {
    ChatList,
    member: () => import("./Member"),
    chat: () => import("./Chat"),
    attach: () => import("@/assets/images/old/account/attach-sharp.svg"),
    happy: () => import("@/assets/images/old/account/happy.svg"),
    mic: () => import("@/assets/images/old/account/mic-outline.svg")
  }
};
</script>

<style lang="scss" scoped>
.account {
  &-banner {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    background-color: $white-purple-1;
    .image {
      margin-right: 6px;
    }
    .name {
      font-size: 14px;
      // line-height: 1em;
      letter-spacing: 0.05em;
    }
  }
  &-chat {
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: $white-purple-2;
    display: flex;
    flex-flow: column;
  }
  &-footer {
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 9px 16px 19px;
  }
  &-chat__chat,
  &-chat__editor {
    border-radius: 5px;
    background-color: $orange-5;
    overflow: hidden;
  }
  &-chat-grid {
    display: flex;
    height: 100%;
    .left, .right {
      height: 100%;
    }
    .left {
      min-width: 185px;
      width: get-percent(185,1007);
      background-color: $orange-5;
      margin-right: 4px;
      border-radius: 0 0 5px 5px;
      overflow: hidden;
    }
    .right {
      width: get-percent(854,1007);
      display: flex;
      flex-flow: column;
    }
  }
  &-chat__chat {
    position: relative;
    z-index: 0;
    height: calc(100% - 80px - 4px);
    max-height: 320px;
    margin-bottom: auto;
    .chat-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  &-chat__editor {
    width: 100%;
    height: 80px;
    position: relative;
    .attach-sharp,
    .happy,
    .mic-outline {
      position: absolute;
      top: 8px;
      // transform: translate(-50%, 0);
    }
    .attach-sharp {
      left: 8px;
    }
    .happy {
      right: 48px;
    }
    .mic-outline {
      right: 8px;
    }
    .editor {
      width: 100%;
      height: 100%;
      background-color: transparent;
      padding: 13px 75px 13px 50px;
      font-size: 14px;
      line-height: 1em;
      letter-spacing: 0.05em;
      color: $purple-1;
      font-family: $f-muller;
    }
  }
}
@include mq($SmDesktopWidth, max) {
  .account {
    &-footer {
      padding: 8px;
    }
  }
}
@include mq(720px, max) {
  .account {
  }
}
@include mq($PhoneWidth, max) {
}
</style>
