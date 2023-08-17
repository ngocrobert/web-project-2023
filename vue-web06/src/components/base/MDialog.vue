<template>
  <div class="m-row">
    <label for="">9. Dialog</label>
    <div class="m-row">
      <button
        id="btnShowDialog"
        class="m-btn m-btn-icon m-btn-icon-add"
        @click="showDialog"
      >
        <div class="m-btn__text">Hiển thị dialog</div>
      </button>
    </div>
    <div class="m-dialog" v-if="isShowDialog">
      <div class="m-dialog-content">
        <div class="m-dialog-header">
          <div class="m-dialog-title">{{ title }}</div>
          <button id="close-dialog" class="m-dialog-close">
            <i class="fas fa-times" @click="showDialog"></i>
          </button>
        </div>

        <div class="m-dialog-body">
          Mô tả
          <slot name="dialog-body"></slot>
        </div>

        <div class="m-dialog-footer">
          <MButton btnIcon="btn-cancel">
            <div class="m-btn__text">Hủy</div>
          </MButton>
          <MButton>
            <div class="m-btn__text">Lưu</div>
          </MButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "./MButton.vue";

export default {
  name: "MDialog",
  components: {
    MButton,
  },
  props: {
    title: String,
  },
  data() {
    return {
      isShowDialog: false,
    };
  },
  methods: {
    showDialog() {
      this.isShowDialog = !this.isShowDialog;
    },
  },
};
</script>

<style scoped></style>
