<template>
  <div class="m-radio">
    <label :for="radioId" class="radio">
      <input
        type="radio"
        :name="radioName"
        :id="radioId"
        :value="radioValue"
        class="radio__input"
        v-model="selectedValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div class="radio__radio"></div>
      {{ radioLabel }}
    </label>
  </div>
</template>

<script>
export default {
  name: "MRadio",
  props: ["radioId", "radioValue", "radioName", "radioLabel", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
        selectedValue: this.modelValue,
    }
  },
  watch: {
    modelValue: function(newValue) {
        this.selectedValue = newValue;
    }
  },
};
</script>

<style scoped>
@import url(../../css/components/radio.css);
/* .m-radio:hover .radio__radio {
    background: red;
} */

/* .m-radio:hover .radio__radio {
    background: #009879;
    width: 100%;
    height: 100%;
} */
</style>
