<template>
   <!-- <MButton >
    <div class="m-btn__text">Dong y</div>
   </MButton>
   <MButton :class="`${'m-btn-icon m-btn-icon-add'}`"
           >
    <div class="m-btn__text">Dong y</div>
   </MButton>
   <MButton :class="`${'m-btn-secondary'}`">
    <div class="m-btn__text" >Dong y</div>
   </MButton>

   <MInput inputIcon="m-icon-search" mPlaceholder="Tìm kiếm thông tin theo mã" ></MInput>

   <MToast toastClass="text-success" toastTitle="Thành công">
     <template v-slot:toast-icon>
        <i class="fas fa-check-circle" style="color: #50b83c;"></i>
     </template>
     <template v-slot:toast-text>Thêm 1 nhân viên mới.</template>
   </MToast>

   <MDialog :title="dialogTitle" >
   </MDialog>

   <div>
    <div class="m-row">
          <button @click="openPopup" class="m-btn m-btn-icon m-btn-icon-add">
            <div class="m-btn__text">
              Hiển thị Popup
            </div>
          </button>
        </div>
     <MPopup  :popupTitle="popupTitle" :popupMessage="popupMessage" ref="popupComponent"  ></MPopup>
   </div>

   <br>
   <br>
   <MCheckbox checkId="check1" checkValue="Nam">
      <template v-slot:titleCheck>
        <label for="check1">Nam</label>
      </template>
   </MCheckbox>
   <MCheckbox checkId="check2" checkValue="Nu">
   </MCheckbox>

   <MRadio radioValue="Nam" radioId="nam" ></MRadio>
   <MRadio radioValue="Nu" radioId="nu  " ></MRadio>

   <MDropdown select-text="Sửa" :select-data="selectData" ></MDropdown>
   <MCombobox ></MCombobox> -->

   <TheHeader ></TheHeader>
   <TheMenu ></TheMenu>
   <TheMain ></TheMain>

</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheMain from './components/layout/TheMain.vue'
import TheMenu from './components/layout/TheMenu.vue'

// import MButton from './components/base/MButton.vue';
// import MInput from './components/base/MInput.vue';
// import MToast from './components/base/MToast.vue';
// import MDialog from './components/base/MDialog.vue';
// import MPopup from './components/base/MPopup.vue';
// import MCheckbox from './components/base/MCheckbox.vue';
// import MRadio from './components/base/MRadio.vue';

// import MDropdown from './components/base/MDropdown.vue';
// import MCombobox from './components/base/MCombobox.vue';



export default {
  name: 'App',
  components: {
    //MButton, MInput, MToast, MDialog, MPopup, MCheckbox, MRadio, MDropdown, MCombobox
    TheHeader, TheMain, TheMenu
  },
  data() {
    return {
      dialogTitle: 'html',
      isShowDrop: false,
      selectData: ["Nhân bản", "Xóa", "Ngừng sử dụng"],
      popupTitle: 'Default Title',
      popupMessage: 'Default Message',
    }
  },
  methods: {
    openPopup() {
      this.popupTitle = 'Chao';
      this.popupMessage = 'can xoa la';
      this.$refs.popupComponent.togglePopup();
    }
  },
}
</script>

<style>
@import url(./css/main.css);
@import url(./assets/font/fontawesome-5.15.1/css/all.min.css);
</style>
