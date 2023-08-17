<template>
  <!-- <div class="m-row"> -->
  <!-- <label for="">6. Input Icon</label> -->
  <div class="m-row" :class="{ 'input-required': required }">
    <input
      type="text"
      class="m-input m-input-icon m-icon-20"
      ref="minput"
      :id="mInputId"
      :class="[inputIcon, { 'm-input-error': !valid }]"
      :placeholder="mPlaceholder"
      v-model="dataValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="onBlur"
    />
  </div>
  <div class="m-error-info" v-if="!valid">
    <slot name="input-content-error"></slot>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "MInput",
  props: ["mPlaceholder", "inputIcon", "mInputId", "modelValue", "required"],
  emits: ["update:modelValue"],
  methods: {
    /**
     * Hàm focus vào ô input
     * Author: NXNGOC (31/07/2023)
     */
    focus() {
      this.$nextTick(function () {
        this.$refs.minput.focus();
      });
    },
    /**
     * Hàm xem ktra user đã thoát khỏi ô input chưa
     * Author: NXNGOC (31/07/2023)
     */
    onBlur() {
      if (!this.dataValue && this.required == true) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    },
  },
  watch: {
    /**
     * Theo dõi sự thay đổi của value thẻ input
     * Author: NXNGOC (31/07/2023)
     */
    modelValue: function (newValue) {
      this.dataValue = newValue;
    },
  },
  data() {
    return {
      valid: true,
      dataValue: this.modelValue,
    };
  },
};
</script>

<style scoped>
@import url(../../css/components/input.css);
</style>
