<template>
  <!-- <div class="m-row"> -->
  <!-- <label for="">Select Box</label> -->
  <div class="m-dropdown">
    <div class="m-dropdown-select">
      <span class="select-txt" @click="onFunctionSelected">{{
        displayDropText()
      }}</span>
      <!-- <span class="select-txt" v-if="isEdit">{{ selectedOption }}</span> -->
      <i class="fas fa-angle-down" @click="toggleDropdown"></i>
    </div>
    <div class="m-dropdown-list" v-show="isDropdownOpen">
      <ul class="m-options">
        <li
          class="m-option"
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
        >
          <span class="m-option-text">{{ option }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "MDropdown",
  props: ["selectText", "selectData", "rowIndex", "typeDropdown"],
  emits: ["dropdown-click", "txt-click", "li-click"],
  data() {
    return {
      options: this.selectData,
      isDropdownOpen: false,
      selectedOption: this.selectText,
    };
  },
  computed: {
    isNoEdit: function () {
      return this.typeDropdown == this.$enum.DropDownType.NoEdit;
    },
    isEdit: function () {
      return this.typeDropdown == this.$enum.DropDownType.Edit;
    },
  },
  methods: {
    /**
     * Hàm mở/đóng list danh sách
     * Author: NXNGOC (30/07/2023)
     */
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.onDropdownClick();
    },
    /**
     * Hàm thay đổi text được chọn
     * Author: NXNGOC (31/07/2023)
     * @param {*} option lựa chọn
     */
    selectOption(option) {
      this.selectedOption = option;
      this.toggleDropdown;
      this.$emit("li-click");
    },
    /**
     * Hàm truyền sự kiện click 1 dòng nào đó
     * Author: NXNGOC (31/07/2023)
     */
    onDropdownClick() {
      this.$emit("dropdown-click", this.rowIndex);
    },
    /**
     * Hàm hiển thị type của text
     * Author: NXNGOC (31/07/2023)
     */
    displayDropText() {
      if (this.isNoEdit) {
        //được phép sửa text
        return this.selectText;
      }
      if (this.isEdit) {
        // không được phép sửa text
        return this.selectedOption;
      }
    },
    /**
     * Hàm thực hiện hành động khi click txtDropdown
     * Author: NXNGOC (31/07/2023)
     */
    onFunctionSelected() {
      this.$emit("txt-click");
    },
    // onDeleteFunction() {
    //   this.$emit("li-click");
    // }
  },
};
</script>

<style scoped></style>
