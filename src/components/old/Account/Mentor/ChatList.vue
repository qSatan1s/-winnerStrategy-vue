<template>  
  <div class="chat-list__wrap">
    <div class="chat-list__search">
      <input class="input" type="text" name="" id="" placeholder="Поиск">
    </div>
    <div class="chat-list">
      <div class="item">
        <div class="item__wrap">
          <div class="item__avatar">
            <div class="image-wrap">
              <img 
                class="image" 
                src="https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo" 
                alt=""
              >
            </div>
            <div class="conntention-wrap">
              <div class="conntention conntention--offline"></div>
            </div>
          </div>
          <div class="item__info">
            <div class="conntention">Online</div>
            <div class="name">Артём Грачёвский</div>
            <div class="short-text">Последнее сообщение ...</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item__wrap">
          <div class="item__avatar">
            <div class="image-wrap">
              <img 
                class="image" 
                src="https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo" 
                alt=""
              >
            </div>
            <div class="conntention-wrap">
              <div class="conntention conntention--offline"></div>
            </div>
          </div>
          <div class="item__info">
            <div class="conntention">Online</div>
            <div class="name">Артём Грачёвский</div>
            <div class="short-text">Последнее сообщение ...</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item__wrap">
          <div class="item__avatar">
            <div class="image-wrap">
              <img 
                class="image" 
                src="https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo" 
                alt=""
              >
            </div>
            <div class="conntention-wrap">
              <div class="conntention conntention--offline"></div>
            </div>
          </div>
          <div class="item__info">
            <div class="conntention">Online</div>
            <div class="name">Артём Грачёвский</div>
            <div class="short-text">Последнее сообщение ...</div>
          </div>
        </div>
      </div>
      <div class="item" v-for="index in 10" :key="index">
        <div class="item__wrap">
          <div class="item__avatar">
            <div class="image-wrap">
              <img 
                class="image" 
                src="https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo" 
                alt=""
              >
            </div>
            <div class="conntention-wrap">
              <div class="conntention conntention--offline"></div>
            </div>
          </div>
          <div class="item__info">
            <div class="conntention">Online</div>
            <div class="name">Артём Грачёвский</div>
            <div class="short-text">Последнее сообщение ...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.chat-list__wrap {
  
  // border-radius: 0 0 5px 5px;
  // overflow: hidden;
  // height: 100%;
}
.chat-list {
  max-height: 413px;
  overflow: auto;
    /* width */
  &::-webkit-scrollbar {
    border-radius: 5px ;
    width: 8px;
    transition: all 0.3s ease-in-out;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background-color: $orange-4;
    border-radius: 5px 5px 5px 0;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: $orange-2;
    border-radius: 5px;
  }
  /* Handle on hover */
  // &::-webkit-scrollbar-thumb:hover {
  //   background-color: $orange-5;
  // }
  &__search {
    padding: 4px;
    .input {
      border-radius: 5px;
      width: 100%;
      height: 24px;
      padding-left: 6px;
      font-size: 12px;
      line-height: 1em;
      &::placeholder {
        font-size: 12px;
        line-height: 1em;
        color: $white-purple-2;
      }
    }
  }
  .item {
    &:first-child {
      background-color: $orange-4;
    }
    &:last-child {
      margin-bottom: 0;
    }
    background-color: white;
    padding: 6px 4px 5px;
    // background-color: $orange-4;
    margin-bottom: 6px;
    &__wrap {
      display: flex;
    }
    &__avatar {
      margin-right: 6px;
      position: relative;
      height: 24px;
      .conntention-wrap {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .conntention {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8px;
        height: 8px;
        background-color: white;
        position: relative;
        &::before {
          content: '';
          width: 6px;
          height: 6px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        &--offline {
          &::before {
            background-color: #efefef;
          }
        }
      }
      
      .image-wrap {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #5752A0;
        overflow: hidden;
        .image {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
    &__info {
      .conntention {
        font-size: 5px;
        line-height: 2em;
      }
      .name {
        font-size: 12px;
        line-height: 1.33em;
      }
      .short-text {
        font-size: 10px;
        line-height: 1em;
        letter-spacing: 0.05em;
      }
    }
  }
}
</style>