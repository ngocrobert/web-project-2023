<template>
    <div class="m-dialog">
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">
                    <div class="m-header-dialog">
                        {{ this.$resource['formDetail']['HeaderDialog'] }}
                    </div>
                    <!-- <label for="" class="m-checkbox">
                        <input type="checkbox" name="" id="">
                        <span>Là khách hàng</span>
                    </label>
                    
                    <label for="" class="m-checkbox">
                        <input type="checkbox" name="" id="">
                        <span>Là nhà cung cấp</span>
                    </label> -->
                    <MCheckbox checkId="khachhang" checkValue="Là khách hàng" ></MCheckbox>
                    <MCheckbox checkId="NCC" checkValue="Là nhà cung cấp" ></MCheckbox>
                </div>
                <div class="m-dialog-close flex-employee">
                    <div class="mi mi-24 mi-help tooltip">
                        <span class="tooltiptext">
                            {{ this.$resource['formDetail']['TooltipHelp'] }}
                        </span>
                    </div>
                    <div class="mi mi-24 mi-close tooltip" id="close-dialog" @click="closeForm">
                        <span class="tooltiptext">
                            {{ this.$resource['formDetail']['TooltipClose'] }}
                        </span>
                    </div>
                    <!-- <button id="close-dialog" class=""><i class="fas fa-times"></i></button> -->
                </div>
            </div>
            <!-- Dialog Body -->
            <div class="m-dialog-body"> 
                <div class="flex-employee pd-b-12">
                    <div class="p-r-26 w-1/2">
                        <div class="flex-employee pd-b-8">
                            <div class="w-2/5 pd-r-6">
                                <div class="m-row">
                                    <label for="" class="label-with-star">
                                        {{ this.$resource['formDetail']['LabelEmployeeCode'] }}
                                        <span style="color: red; ">*</span>
                                    </label>
                                    <!-- <div class="m-row">
                                                    <input id="txtEmployeeCode" type="text" class="m-input"
                                                        placeholder="Mã nhân viên">
                                                    <div class="m-error-info">Mã không được phép để trống.</div>
                                                </div> -->
                                    <MInput :required="true" ref="txtEmployeeCode" mPlaceholder="Mã nhân viên"
                                        v-model="employeeCode">
                                        <template v-slot:input-content-error>
                                            {{ this.$resource['vn-VI']['EmployeeCodeNotNull'] }}
                                        </template>
                                    </MInput>
                                </div>
                            </div>
                            <div class="w-3/5">
                                <div class="m-row">
                                    <label for="" class="label-with-star">
                                        {{ this.$resource['formDetail']['LabelEmployeeName'] }}
                                        <span style="color: red; ">*</span>
                                    </label>
                                    <!-- <div class="m-row">
                                                    <input id="txtFullName" type="text" class="m-input">
                                                    <div class="m-error-info">Tên không được phép để trống.</div>
                                                </div> -->
                                    <MInput 
                                        :required="true" 
                                        ref="txtFullName" 
                                        v-model="employee.fullName"
                                    >
                                        <template v-slot:input-content-error>
                                            {{ this.$resource['vn-VI']['EmployeeNameNotNull'] }}
                                        </template>
                                    </MInput>
                                </div>
                            </div>
                        </div>
                        <div class="flex-employee pd-b-8">
                            <!-- ComboBox Table -->
                            <MCombobox 
                                v-model="employee.departmentName"
                                @selectedItemId="selectedUnitId"
                                :boxSelected="this.boxSelected"
                            ></MCombobox>
                        </div>
                        <div class="flex-employee pd-b-8">
                            <div class="m-row w-full mg-t-8">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelEmployeePosition'] }}
                                </label>
                                <!-- <input type="text" class="m-input" id="txtPosition"> -->
                                <MInput mInputId="txtPosition" v-model="employee.positionName"></MInput>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="flex-employee pd-b-8">
                            <div class="pd-r-6 w-2/5 mg-r-6">
                                <div class="m-row">
                                    <label for="" class="label-with-star">
                                        {{ this.$resource['formDetail']['LabelEmployeeDoB'] }}
                                    </label>
                                    <input type="date" class="m-input" id="dtDateOfBirth" v-model="employee.dateOfBirth">
                                    <!-- <MInput mInputId="dtDateOfBirth"></MInput> -->
                                </div>
                            </div>
                            <div class="w-3/5">
                                <div class="m-row">
                                    <label for="" class="label-with-star">
                                        {{ this.$resource['formDetail']['LabelEmployeeGender'] }}
                                    </label>
                                    <div class="m-dialog-radio">
                                        <!-- <input type="radio" name="gender" value=0 v-model="employee.gender"><span>Nam</span>
                                        <input type="radio" name="gender" value=1 v-model="employee.gender"><span>Nữ</span>
                                        <input type="radio" name="gender" value=2
                                            v-model="employee.gender"><span>Khác</span> -->
                                            <MRadio v-model="employee.gender" radioId="male" radioLabel="Nam" radioValue="0" radioName="gender" />
                                            <MRadio v-model="employee.gender" radioId="female" radioLabel="Nữ" radioValue="1" radioName="gender" />
                                            <MRadio v-model="employee.gender" radioId="other" radioLabel="Khác" radioValue="2" radioName="gender" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="flex-employee pd-b-8">
                            <div class="w-3/5 pd-r-6">
                                <div class="m-row">
                                    <label for="" class="label-with-star">
                                        {{ this.$resource['formDetail']['LabelEmployeeIdentity'] }}
                                    </label>
                                    <!-- <input type="text" class="m-input" id="txtIdentityNumber"> -->
                                    <MInput mInputId="txtIdentityNumber" v-model="employee.identityNumber"></MInput>
                                </div>
                            </div>
                            <div class="w-2/5">
                                <div class="m-row">
                                    <label for="" class="label-with-star">
                                        {{ this.$resource['formDetail']['LabelEmployeeIdentityDate'] }}
                                    </label>
                                    <input type="date" class="m-input" id="dtDateOfCCCD" v-model="employee.identityDate">
                                </div>
                            </div>
                        </div>
                        <div class="flex-employee pd-b-8">
                            <div class="m-row w-full">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelEmployeeIdentityAddress'] }}
                                </label>
                                <!-- <input type="text" class="m-input"> -->
                                <MInput></MInput>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-tab w-full">
                    <div class="pd-b-8 w-full">
                        <div class="m-row">
                            <label for="" class="label-with-star">
                                {{ this.$resource['formDetail']['LabelEmployeeAddress'] }}
                            </label>
                            <!-- <input type="text" class="m-input" id="txtAddress"> -->
                            <MInput mInputId="txtAddress"></MInput>
                        </div>
                    </div>
                    <div class="flex-employee">
                        <div class="w-1/4 pd-r-6">
                            <div class="m-row">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelEmployeePhoneNumber'] }}
                                </label>
                                <!-- <input type="text" class="m-input" id="txtPhoneNumber"> -->
                                <MInput mInputId="txtPhoneNumber" v-model="employee.phoneNumber"></MInput>
                            </div>
                        </div>
                        <div class="w-1/4 pd-r-6">
                            <div class="m-row">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelEmployeePhone'] }}
                                </label>
                                <!-- <input type="text" class="m-input"> -->
                                <MInput></MInput>
                            </div>
                        </div>
                        <div class="w-1/4 pd-r-6">
                            <div class="m-row">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelEmployeeEmail'] }}
                                </label>
                                <!-- <input type="text" class="m-input" id="txtEmail"> -->
                                <MInput mInputId="txtEmail" v-model="employee.email"></MInput>
                            </div>
                        </div>
                    </div>
                    <div class="flex-employee">
                        <div class="w-1/4 pd-r-6">
                            <div class="m-row">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelAccountBank'] }}
                                </label>
                                <!-- <input type="text" class="m-input"> -->
                                <MInput></MInput>
                            </div>
                        </div>
                        <div class="w-1/4 pd-r-6">
                            <div class="m-row">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelNameBank'] }}
                                </label>
                                <!-- <input type="text" class="m-input"> -->
                                <MInput></MInput>
                            </div>
                        </div>
                        <div class="w-1/4 pd-r-6">
                            <div class="m-row">
                                <label for="" class="label-with-star">
                                    {{ this.$resource['formDetail']['LabelBranchBank'] }}
                                </label>
                                <!-- <input type="text" class="m-input"> -->
                                <MInput></MInput>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Dialog Footer -->
            <div class="m-dialog-footer">
                <div class="divide"></div>
                <div class="m-dialog-footer__btn flex-employee">


                    <div class="btn-right flex-employee w-full">
                        <!-- <button class="m-btn btn-save" id="btnSave">
                                        <div class="m-btn__text">Cất</div>
                                    </button> -->
                        <MButton :class="`${'btn-save'}`" @click="btnSaveOnClick">
                            {{ this.$resource['vn-VI']['BtnSave'] }}
                        </MButton>
                        <!-- <button class="m-btn">
                                        <div class="m-btn__text">Cất và Thêm</div>
                                    </button> -->
                        <MButton>
                            {{ this.$resource['vn-VI']['BtnSaveAdd'] }}
                        </MButton>
                    </div>
                    <div class="btn-left" id="btn-cancel-form">
                        <!-- <button class="m-btn btn-cancel" id="btn-cancel__form" @click="close">
                                        <div class="m-btn__text">Hủy</div>
                                    </button> -->
                        <MButton :class="`${'btn-cancel'}`" @click="closeForm">
                            {{ this.$resource['vn-VI']['BtnCancel'] }}
                        </MButton>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import MButton from '@/components/base/MButton.vue'
import MInput from '@/components/base/MInput.vue'

import MCombobox from '@/components/base/MCombobox.vue'
import MRadio from '@/components/base/MRadio.vue'
import MCheckbox from '@/components/base/MCheckbox.vue'

export default {
    name: "EmployeeDetail",
    components: {
        MButton, MInput,
        MCombobox, MRadio, 
        MCheckbox
    },
    props: ['newEmployeeCode', 'isSuccess', 'selectedEmployeeID'],
    emits: ['closeDetail', 'updateIsSuccess',],



    data() {
        return {
            employeeID: '',
            employeeCode: this.newEmployeeCode,
            employeeFullName: '',
            employeeUnit: '',
            employeeGender: this.$enum.GENDER.MALE,
            employeeDOB: '',
            identityNumber: '',
            identityDate: '',
            phoneNumber: '',
            email: '',
            salary: 10000000,
            positionName: '',
            //departmentName: '',
            employee: {
                gender: this.$enum.GENDER.MALE,
                departmentId : '',
        
            },
            departmentById: {},
            boxSelected: '',
            //addNewEmplo: this.isSuccess,
            isLoading: false,
            selectedRadioValue: 'Option 1',



        }
    },

    // computed() {
    //     this.getEmployeeByID()
    // },
    computed: {
        FormMode: function () {
            if (!this.selectedEmployeeID) {
                return this.$formAction.FormMode.Add; //1
            }
            else {
                return this.$formAction.FormMode.Edit; //2

            }

        }
        // isEdit: function () {
        //    return this.selectedEmployeeID != ''
        // }
    },

    created() {
        if (this.FormMode == this.$formAction.FormMode.Edit) {
            this.getEmployeeByID()
        }
    },

    mounted() {
        this.$refs.txtEmployeeCode?.focus();
        this.$refs.txtFullName?.focus();
        //console.log('EmployeeID: ',this.selectedEmployeeID);
    },



    methods: {
        /**
         * Hàm đóng form nhân viên chi tiết
         * Author: NXNGOC (31/07/2023)
         */
        closeForm() {
            this.$emit('closeDetail');

        },
        /**
         * Hàm lấy Employee data theo API Get by ID
         * Author: NXNGOC (31/07/2023)
         */
        getEmployeeByID() {
            this.employeeID = this.selectedEmployeeID;
            console.log('ID ', this.employeeID);
            try {
                //Lấy thông tin nhân viên theo ID bằng API
                this.$axios.get("https://cukcuk.manhnv.net/api/v1/Employees/" + this.employeeID)
                    .then(res => {
                        this.employee = res.data
                        console.log(this.employee);

                        this.addDataToForm(this.employee)


                    })
                    .catch((err) => {
                        this.$commonJS.showErrorApi(err);
                    })

                // Gán thông tin lên form
            } catch (error) {
                console.log(error);
            }

        },
       

        /**
         * Hàm gán giá trị vào form sau khi gọi GET by ID
         * @param {*} employee Employee nhận từ API Get theo ID
         * Author: NXNGOC (31/07/2023)
         */
        addDataToForm(employee) {
            this.employeeCode = employee.EmployeeCode
            this.employee.fullName = employee.FullName
            this.employee.gender = employee.Gender
            this.employee.dateOfBirth = this.$format.formatYearDate(employee.DateOfBirth)
            this.employee.departmentName = this.getDepartmetById(employee.DepartmentId)
            this.employee.identityNumber = employee.IdentityNumber
            this.employee.identityDate = employee.IdentityDate
            this.employee.phoneNumber = employee.PhoneNumber
            this.employee.email = employee.Email
            this.employee.salary = employee.Salary
            this.employee.positionName = employee.PositionName

        },
        getDepartmetById(departmentId) {
            try {
                this.$axios.get("https://cukcuk.manhnv.net/api/v1/Departments/"+ departmentId)
                            .then(res => {
                               console.log(res.data);
                               this.employee.departmentName = res.data.DepartmentName;
                               this.boxSelected = departmentId;
                               
                            })
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Ham them moi nhan vien
         * Author: NXNGOC (31/07/2023)
         */
        async btnSaveOnClick() {
            try {
                // 1. Validate dữ liệu
                var errors = []

                if (!this.employeeCode) {
                    // this.$commonJS.showNotice("Dữ liệu không hợp lệ!","Mã nhân viên không được để trống.");
                    errors.push("Mã nhân viên không được để trống.")
                }
                if (!this.employee.fullName) {
                    errors.push("Họ và tên không được để trống.")
                }
                if (!this.employee.departmentName) {
                    errors.push("Đơn vị không được để trống.")
                }
                if (new Date(this.employee.dateOfBirth) > new Date()) { 
                    errors.push("Ngày sinh không hợp lệ.");
                    
                }
                if (new Date(this.employee.identityDate) > new Date()) { 
                    errors.push("Ngày cấp không hợp lệ.");
                    
                }
                if (!this.$format.isValidEmail(this.employee.email)) {
                    errors.push("Email không hợp lệ.");
                }

                // Nếu ko hợp lệ hiển thị thông tin lỗi
                if (errors.length != 0) {
                    this.$commonJS.showNotice("Dữ liệu không hợp lệ", errors, this.$enum.PopupType.Error);
                }

                else {
                    // Nếu hợp lệ gọi API cất dữ liệu
                    if (this.FormMode == this.$formAction.FormMode.Add) {
                        // const newEmployee = {
                        //     employeeCode: this.employeeCode,
                        //     fullName: this.employeeFullName,
                        //     gender: this.employeeGender,
                        //     dateOfBirth: this.employeeDOB,
                        //     phoneNumber: this.phoneNumber,
                        //     email: this.email,
                        //     address: "",
                        //     identityNumber: this.identityNumber,
                        //     identityDate: this.identityDate,
                        //     salary: this.salary,
                        //     positionName: this.positionName,
                        //     departmentName: '',
                        // }
                        this.employee.employeeCode = this.employeeCode;
                        
                        // this.employee.gender = this.$enum.GENDER.MALE,
                        this.employee.salary = this.salary;

                        // Gọi POST API
                        this.$axios.post("https://cukcuk.manhnv.net/api/v1/Employees", this.employee)
                            .then((res) => {
                                console.log("them nv:", this.employee, res);
                                // Hiển thị form Toast thông báo thành công:
                                this.$emit("updateIsSuccess", true);
                                // Ẩn form chi tiết

                                // Load lại dữ liệu
                            })
                            .catch((err) => {
                                // const response = err.response;
                                // const statusCode = response.status;
                                // var msgError = '';
                                // switch (statusCode) {
                                //     case 500:
                                //         msgError = response.data?.userMsg;
                                //         this.$commonJS.showNotice("Thông báo", [msgError]);
                                //         break;
                                //     case 400:
                                //         msgError = response.data.userMsg;
                                //         this.$commonJS.showNotice("Thông báo", [msgError]);
                                //         break;
                                //     default:
                                //         break;
                                // }
                                // console.log(err);
                                // Hiển thị lỗi khi không gọi được API
                                this.$commonJS.showErrorApi(err);
                            })

                    }
                    else {
                        // Goi PUT Api (Sửa) khi có EmployeeID truyền vào Form
                        this.$axios.put(`https://cukcuk.manhnv.net/api/v1/Employees/${this.selectedEmployeeID}`, this.employee)
                            .then(res => {
                                console.log("Sua thanh cong:", res);
                                this.$emit("updateIsSuccess", true);
                            })
                            .catch((err) => {
                                this.$commonJS.showErrorApi(err);
                            })
                    }
                }



            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy Id Đơn vị được chọn
         * @param {*} unitSelected Đơn vị được chọn
         * Author: nxngoc (08/08/2023)
         */
        selectedUnitId(unitSelected) {
            console.log("ID don vi duoc chon: ",unitSelected.idUnit);
            this.employee.departmentId = unitSelected.idUnit;
        },
        


    },
    
}
</script>

<style scoped></style>