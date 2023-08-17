<template>
        <div class="m-page-header">
            <div class="m-page-title">Nhân viên</div>
            <div class="m-page-button">
                <!-- <button id="btnAdd" class="m-btn" @click="isShowDetail = !isShowDetail">Thêm mới nhân viên</button> -->
                <MButton @click="toggleFormDetail">
                     {{ this.$resource['vn-VI']['BtnAdd'] }}
                </MButton>
            </div>
        </div>
        <div class="m-page-toolbar">
            <div class="m-toolbar-search">
                <!-- <input type="text" class="m-input m-input-icon m-icon-20 m-icon-search"
                    placeholder="Tìm kiếm theo mã, tên nhân viên"> -->
                <MInput inputIcon="m-icon-search" mPlaceholder="Tìm kiếm theo mã, tên nhân viên"></MInput>

            </div>
            <div class="m-toolbar-reload mi mi-24 mi-reload" @click="loadTableData"></div>
        </div>
        <!-- Table -->
        <div class="m-page-table">
            <div class="m-row-table">
                <div class="m-outer-wrapper">
                    <div class="row-table">
                        <table class="m-table scroller" id="tbEmployeeList">
                            <thead>
                                <tr style="position: relative; z-index: 13;">
                                    <th class="text-align-center multiple-cell">
                                        <!-- <input type="checkbox"> -->
                                        <MCheckbox ></MCheckbox>
                                    </th>
                                    <th class="text-align-left multiple-cell" style="min-width: 150px;"
                                        title="MÃ NHÂN VIÊN">
                                        {{ this.$resource['formListTable']['THemployeeCode'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="min-width: 255px;"
                                        title="TÊN NHÂN VIÊN">
                                        {{ this.$resource['formListTable']['THemployeeName'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="width: 120px; min-width: 120px;"
                                        title="GIỚI TÍNH">
                                        {{ this.$resource['formListTable']['THemployeeGender'] }}
                                    </th>
                                    <th class="text-align-center multiple-cell" style="width: 150px; min-width: 150px;"
                                        title="NGÀY SINH">
                                        {{ this.$resource['formListTable']['THemployeeDoB'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="width: 200px; min-width: 200px;"
                                        title="SỐ CMND">
                                        {{ this.$resource['formListTable']['THemployeeIdentity'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="min-width: 250px;"
                                        title="CHỨC DANH">
                                        {{ this.$resource['formListTable']['THemployeePosition'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="width: 200px; min-width: 200px;"
                                        title="ĐƠN VỊ">
                                        {{ this.$resource['formListTable']['THemployeeUnit'] }}
                                    </th>
                                    <th class="text-align-right multiple-cell" style="width: 200px; min-width: 200px;"
                                        title="LƯƠNG">
                                        {{ this.$resource['formListTable']['THemployeeSalary'] }}
                                        </th>
                                    <th class="text-align-left multiple-cell" style="width: 150px; min-width: 150px;"
                                        title="SỐ TÀI KHOẢN">
                                        {{ this.$resource['formListTable']['THemployeeAccountBank'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="width: 250px; min-width: 250px;"
                                        title="TÊN NGÂN HÀNG">
                                        {{ this.$resource['formListTable']['THemployeeNameBank'] }}
                                    </th>
                                    <th class="text-align-left multiple-cell" style="width: 250px; min-width: 250px;"
                                        title="CHI NHÁNH TK NGÂN HÀNG">
                                        {{ this.$resource['formListTable']['THemployeeBranchBank'] }}
                                    </th>
                                    <th class="text-align-center multiple-cell" style="width: 120px; min-width: 120px;"
                                        title="CHỨC NĂNG">
                                        {{ this.$resource['formListTable']['THFunction'] }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="(item, index) in employees" :key="item.EmployeeId" @dblclick="rowOnDbClick(item.EmployeeId)">
                                    <td class="m-td text-align-center multiple-cell">
                                        <!-- <input type="checkbox" name="checkRow" /> -->
                                        <MCheckbox checkName="checkRow"></MCheckbox>
                                        <input type="hidden" name="employeeID" :value="item.EmployeeId">
                                    </td>
                                    <td class="m-td text-align-left">{{ item.EmployeeCode }}</td>
                                    <td class="m-td text-align-left">{{ item.FullName }}</td>
                                    <td class="m-td text-align-left">{{ $format.formatGender(item.Gender) }}</td>
                                    <td class="m-td text-align-center">{{ $format.formatDate(item.DateOfBirth) }}</td>
                                    <td class="m-td text-align-left">{{ item.IdentityNumber }}</td>
                                    <td class="m-td text-align-left">{{ item.PositionName }}</td>
                                    <td class="m-td text-align-left">{{ item.DepartmentName }}</td>
                                    <td class="m-td text-align-right">{{ $format.formatMoney(item.Salary) }}</td>
                                    <td class="m-td text-align-left">987645</td>
                                    <td class="m-td text-align-left">ACB</td>
                                    <td class="m-td text-align-left">ACB HN</td>
                                    <td class="m-td text-align-center multiple-cell z-edit">
                                        <!-- <div class="m-dropdown">
                                            <div class="m-dropdown-select">
                                                <span class="select-txt">Sửa</span>
                                                <i class="fas fa-angle-down"></i>
                                            </div>
                                            <div class="m-dropdown-list">
                                                <ul class="m-options">
                                                    <li class="m-option">
                                                        <span class="m-option-text">Nhân bản</span>
                                                    </li>
                                                    <li class="m-option" name="delete-function">
                                                        <span class="m-option-text">Xóa</span>
                                                    </li>
                                                    <li class="m-option">
                                                        <span class="m-option-text">Ngừng sử dụng</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> -->
                                        <MDropdown :typeDropdown=0 
                                                select-text="Sửa" 
                                                :select-data="dropDownData" 
                                                @dropdown-click="onDropdownClick(index)" 
                                                :row-index="index"
                                                @txt-click="rowOnDbClick(item.EmployeeId)"
                                                @li-click="onClickDelete(item.EmployeeId)"
                                        ></MDropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Paging -->
                <div class="m-paging">
                    <div class="m-paging-left">
                        Tổng số:
                        <div class="total">12</div>
                        bản ghi
                    </div>

                    <div class="m-paging-right">
                        <span>Số bản ghi/trang</span>
                        <div class="m-paging-size">
                            <select name="" id="" class="m-page-select">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                            <!-- <MDropdown :typeDropdown=1 select-text="10" :select-data="dropDownPaging"></MDropdown> -->
                        </div>
                        <div class="m-from-to">
                            <span>1 - 12</span>
                            bản ghi
                        </div>
                        <div class="m-paging-button">
                            <div class="m-btn-page prev"></div>
                            <div class="m-btn-page next disabled"></div>
                        </div>
                    </div>
                </div>
                <!-- Dialog Form -->
                <EmployeeDetail v-if="isShowDetail" 
                        @closeDetail="toggleFormDetail" 
                        :newEmployeeCode="newEmployeeCode" 
                        :isSuccess="isShowToast" 
                        :selectedEmployeeID="selectedEmployeeID"
                        @updateIsSuccess="toggleIsSuccess"></EmployeeDetail>
                <!-- Thông báo -->
               
                
            </div>
        </div>
        <!-- Toast Message -->
        <MToast toastClass="text-success" toastTitle="Thành công" v-show="isShowToast">
                    <template v-slot:toast-icon>
                        <i class="fas fa-check-circle" style="color: #50b83c;"></i>
                    </template>
                    <!-- <template v-slot:toast-text>Thêm 1 nhân viên mới.</template> -->
                    <template v-slot:toast-text>{{ setTextToast() }}</template>

        </MToast>
        <!-- Thông báo Trước Khi Xóa-->

        <!-- LOADING -->
        <MLoading v-if="isLoading"></MLoading>
</template>

<script>
import EmployeeDetail from './EmployeeDetail.vue'

import MButton from '@/components/base/MButton.vue'
import MInput from '@/components/base/MInput.vue'
import MDropdown from '@/components/base/MDropdown.vue'
import MCheckbox from '@/components/base/MCheckbox.vue'

import MToast from '@/components/base/MToast.vue'

    export default {
        name: "EmployeeList",
        components: { 
            EmployeeDetail, 
            MButton, MInput, MDropdown, MCheckbox,
            MToast
        },
        created() {
            // load data từ Api về
            // this.$axios.get("https://cukcuk.manhnv.net/api/v1/Employees")
            //     .then(res => {
            //         this.employees = res.data
            //     })
            //     .catch((err) => {
            //         this.$commonJS.showErrorApi(err);
            //     })
            this.loadTableData();
           

        },
        updated() {
            // lấy code cho nhân viên mới từ Api
            // fetch("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
            //     .then((res) => res.text())
            //     .then((text) => {
            //         this.newEmployeeCode = text;
            //     });
            this.$axios.get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
                .then(res => {
                   // console.log(res.data);
                   this.newEmployeeCode = res.data;
                })
                .catch((err) => {
                    this.$commonJS.showErrorApi(err);
                })
            
            this.addCSSRowSelected(); // Call the method to apply the CSS changes when the page is loaded
        },
        data() {
            return {
                employees: [],
                isShowDetail: false,
                newEmployeeCode : "",
                isShowToast: false,
                dropDownData: ["Nhân bản", "Xóa", "Ngừng sử dụng"],
                dropDownPaging: [10,20,50],
                isLoading: false,
                selectedEmployeeID: '',
                isDelete: false,
                textToast: '',

            }
        },
        methods: {

            /**
             * Ẩn / Hiện form detail
             * Author: NXNGOC (31/07/2023)
             */
            toggleFormDetail() {
                this.isShowDetail = !this.isShowDetail
                this.selectedEmployeeID = ''
            },

            /**
             * Hàm thay đổi trạng thái thông báo
             * Author: NXNGOC (31/07/2023)
             */
            toggleIsSuccess() {
                this.isShowToast = !this.isShowToast; // Toggle the value of isSuccess
                this.isShowDetail = false;
                this.loadTableData();
                // thời gian hiển thị của Toast
                setTimeout(() => {
                    this.isShowToast = false;
                }, 3000);
            },
            /**
             * Hàm thêm CSS vào khi 1 dòng được chọn
             * Author: NXNGOC (23/07/2023)
             */
            addCSSRowSelected() {
                const rows = document.querySelectorAll("[name='checkRow']");

                rows.forEach((checkbox) => {
                    checkbox.addEventListener("change", () => {
                    const closestTr = checkbox.closest("tr");
                    closestTr.classList.toggle("row-selected");
                    });
                });
            },
            /**
             * Hàm giúp hiển thị danh sách chức năng trên Table
             * @param {*} rowIndex địa chỉ hàng NV được chọn
             * Author: NXNGOC
             */
            onDropdownClick(rowIndex){
                const selectedRow = document.querySelectorAll("tr")[rowIndex+1];
                console.log(selectedRow);
                selectedRow.classList.toggle("list-function");
            },

            /**
             * Hàm load lại data
             * Author: NXNGOC (31/07/2023)
             */
            async loadTableData() {
                // loading 
                this.isLoading = true;

                // load data từ Api về
                await this.$axios.get("https://cukcuk.manhnv.net/api/v1/Employees")
                                .then(res => {
                                    this.employees = res.data
                                    this.isLoading = false
                                })
                                .catch((err) => {
                                    this.$commonJS.showErrorApi(err);
                                })
            },
            /**
             * Hàm hiển thị form chi tiết NV khi double click vào 1 dòng
             * @param {*} employeeId
             * Author: NXNGOC (31/07/2023)
             */
            rowOnDbClick(employeeId) {
                this.isShowDetail = true;
                this.selectedEmployeeID = employeeId;
                return this.selectedEmployeeID;
                //this.$emitter.emit("onSelectedEmployee", employeeId);
                //this.$emit('onSelectedEmployee', employeeId);
            },
            onClickDelete(employeeId) {
                var deleteConfirm = []
                if (employeeId != null) {
                    deleteConfirm.push("Bạn có thực sự muốn xóa nhân viên đã chọn không?");
                    this.$commonJS.showNotice("Xóa nhân viên", deleteConfirm, this.$enum.PopupType.Question,);
                    this.$emitter.on("deleteFunction", (agree) => {
                        if (agree) {
                            this.deleteEmployeeByID(employeeId);
                        }
                    })
                    // if(this.isDelete){
                        
                    // }
                }
            },
            deleteEmployeeByID(employeeId) {
                try {
                    console.log('Xoa nhan vien id:', employeeId);
                    this.$axios.delete("https://cukcuk.manhnv.net/api/v1/Employees/"+employeeId)
                                    .then(res => {
                                        console.log('xoa thanh cong: ',res);
                                        this.$commonJS.closeNoticeAuto(false);
                                        this.loadTableData();
                                    })
                                    .catch((err) => {
                                        this.$commonJS.showErrorApi(err);
                                    })
                } catch (error) {
                    console.log(error);
                }
            },
            setTextToast(){
                if(this.selectedEmployeeID) {
                    return this.textToast = 'Sửa 1 nhân viên.';
                }
                else {
                    return this.textToast = 'Thêm 1 nhân viên mới';
                }
            }
        },
        unmounted() {
            this.$emitter.off("deleteFunction")
        }

        // watch: {
        //     selectedEmployeeID(newVal, oldVal) {
        //         console.log('Moi: ', newVal);
        //         console.log('Cu: ', oldVal);
        //     }
        // },
        
        
    }
</script>

<style scoped>

</style>