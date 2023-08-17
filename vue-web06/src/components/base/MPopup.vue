<template>
    <div>
      <!-- <div class="m-row">
        <label for="">10. Popup</label>
        <div class="m-row">
          <button @click="togglePopup" class="m-btn m-btn-icon m-btn-icon-add">
            <div class="m-btn__text">
              Hiển thị Popup
            </div>
          </button>
        </div>
      </div> -->
      <div v-if="showPopup" class="m-popup">
        <div class="m-popup-content">
          <div class="m-popup-header">
            <div class="m-popup-title">{{ popupTitle }}</div>
            <button @click="hidePopup" class="m-popup-close"><i class="fas fa-times"></i></button>
          </div>
          <div class="m-popup-body">
            <div 
                class="mi mi-20"
                :class="{'mi-error' : isError, 'mi-warning' : isConfirm}"></div>
            <div>
                <div v-for="(msg, index) in popupMessage" :key="index">
                    {{ msg }}
                </div>
            </div>
          </div>
            <div class="m-popup-footer m-popup-warning" v-if="isError">
                <button class="m-btn btn-agree-close">
                   <div class="m-btn__text" @click="hidePopup">{{ this.$resource['vn-VI']['BtnClosePopup'] }}</div>
                </button>
            </div>
          <div class="m-popup-footer" v-if="isConfirm">
            <button class="m-btn btn-cancel" @click="hidePopup">
              <div class="m-btn__text">{{ this.$resource['vn-VI']['BtnDisAgreePopup'] }}</div>
            </button>
            <button class="m-btn" @click="deletePopup">
              <div class="m-btn__text">{{ this.$resource['vn-VI']['BtnAgreePopup'] }}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MPopup",
    props: {
    popupTitle: {
      type: String,
      default: '', // Default value for popupTitle if not provided from App.vue
    },
    popupMessage: {
      type: Array,
       // Default value for popupMessage if not provided from App.vue
    },
    typePopup: {
        type: Number,
        default: 1
    }
    // showPopup: {
    //     type: Boolean,
    //     default: false,
    // }
  },
  emits: ['onClosePopup', 'onDeletePopup'],
    data() {
      return {
        showPopup: true,
        
      };
    },
    computed: {
        isError: function() {
            return this.typePopup == this.$enum.PopupType.Error;
        },
        isConfirm: function() {
            return this.typePopup == this.$enum.PopupType.Question;
        }
    },
    methods: {
    //     togglePopup() {
    //   // If showPopup is true, it will be toggled to false, and vice versa.
    //   this.showPopup = !this.showPopup;

    //   if (this.showPopup) {
    //     // 2. Thay đổi nội dung thông báo
       

    //     // Thay đổi Icon của Popup
    //     this.popupIcon = "mi-error";
    //   }
    // },
    /**
     * Hàm ẩn Popup
     * Author: NXNGOC
     */
    hidePopup() {
        this.$emit("onClosePopup");
      },
      deletePopup() {
        this.$emit("onDeletePopup");
      }
    },
  };
  </script>