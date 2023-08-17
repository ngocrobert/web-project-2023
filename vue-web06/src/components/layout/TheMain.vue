<template>
    <div class="container">
        <!-- <EmployeeList ></EmployeeList> -->
        <router-view></router-view>
    </div>
    <!-- Notice Vue -->
    <MPopup v-if="showNotice" :popupTitle="popupTitle" :popupMessage="popupMessage" :typePopup="typePopup"
        @onClosePopup="onCloseNotice"
        @onDeletePopup="onDeleteFunction"
        ></MPopup>
</template>

<script>
import MPopup from '../base/MPopup.vue';
export default {
    name: "TheMain",
    components: { MPopup },
    created() {
        // Bật hàm lắng nghe sự kiện hiển thị thông báo
        this.$emitter.on("showNotice", this.onShowNotice)
        //this.$emitter.on("onSelectedEmployee", this.onSelectEmployee)
    },

    data() {
        return {
            showNotice: false,
            popupTitle: 'Default Title',
            popupMessage: 'Default Message',
            typePopup: this.$enum.PopupType.Error,
            employeeSelected: '',
        }
    },


    methods: {
        /**
         * Hàm hiển thị thông báo
         * @param {*} title tiêu đề thông báo
         * @param {*} mess nội dung thông báo
         * Author: NXNGOC(31/07/2023)
         */
        onShowNotice(title, mess, type) {
            this.popupTitle = title;
            this.popupMessage = mess;
            this.typePopup = type;
            this.showNotice = true;
        },
        /**
         * Hàm ẩn thông báo
         * Author: NXNGOC (31/07/2023)
         */
        onCloseNotice() {
            this.showNotice = false;
        },

        // onSelectEmployee(employeeID) {
        //     this.employeeSelected = employeeID;
        //     console.log(this.employeeSelected);
        // },
        /**
         * Hàm tạo sự kiện xóa khi hiển xác nhận trên Popup
         * Author: NXNGOC (08/08/2023)
         */
        onDeleteFunction() {
            this.$commonJS.deleteFunction(1);
        },
        /**
         * Hàm đóng Popup sau khi xóa xong
         * Author: NXNGOC (08/08/2023)
         */
        confirmDelete() {
            this.$emitter.on("closeNoticeAuto", (agree) => {
                this.showNotice = agree;
            })
        }

    },
    beforeUpdate() {
        this.confirmDelete();
    },
    unmounted() {
        // Tắt hàm lắng nghe sự kiện hiển thị thông báo
        this.$emitter.off("showNotice")
        this.$emitter.off("closeNoticeAuto")
        // this.$emitter.off("onSelectedEmployee")
    },
}
</script>

<style scoped></style>