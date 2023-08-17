<template>
    <div class="m-row table-wrapper">
      <label for="" class="label-with-star">Đơn vị
        <span style="color: red; ">*</span>
      </label>
      <div 
          class="select-btn"
          :class="{'m-input-error' : !valid}"
          @click="toggleTableContent"
      >
        <input 
            v-model="searchInput" 
            @input="updateSearchInput"
            type="text" placeholder=""
            @blur="onBlur"
          >
        <i class="fas fa-angle-down"></i>
      </div>
      <div class="m-error-info" v-if="!valid">
        Đơn vị không được phép để trống.
      </div>
      <div class="table-content" v-show="tableContentVisible">
        <div class="scroll-table">
          <table class="box-table" id="boxTable">
            <thead>
              <tr>
                <th>Mã đơn vị</th>
                <th>Tên đơn vị</th>
              </tr>
            </thead>
            <tbody class="table-options">
              <tr v-for="unit in units" :key="unit.codeUnit" @click="selectUnit(unit)" :class="{'box-selected' : unit.isRowSelected}">
                      <td>{{ unit.codeUnit }}</td>
                      <td>{{ unit.nameUnit }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-table-footer">
          <div class="table-footer-icon mi mi-16 mi mi-green--pen"></div>
          <div class="table-footer-text ">Cập nhật cơ cấu tổ chức</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "MCombobox",
    props: ['modelValue','boxSelected'],
    emits: ['update:modelValue', 'selectedItemId'],
    data() {
      return {
        searchInput: this.modelValue,
        tableContentVisible: false,
        units: [{
            idUnit: '',
            codeUnit: '',
            nameUnit: '',
            isRowSelected: false,
        }],
        valid: true,
      };
    },
    computed: {
      /**
       * Hàm hiển thị lỗi khi trống
       * Author: NXNGOC (31/07/2023)
       */
      showError() {
        return this.searchInput.trim() === "";
      },
    },
    methods: {
      /**
       * Hàm hiển thị danh sách data của Combobox
       * Author: NXNGOC (31/07/2023)
       */
      toggleTableContent(event) {
        this.tableContentVisible = !this.tableContentVisible;
        event.stopPropagation();
      },
      /**
       * Hàm thêm đơn vị được chọn vào mảng units
       * Author: NXNGOC (31/07/2023)
       */
      selectUnit(unit) {
        this.searchInput = unit.nameUnit;
        this.valid = true;
        // Add your logic for handling the selected unit here
        this.units.forEach((item) => {
            item.isRowSelected = item === unit;
        })
        // Gửi Object đơn vị được chọn ra ngoài
        // this.$emit('update:modelValue',  $event.target.value)
        this.$emit("update:modelValue", unit.nameUnit);
        this.$emit('selectedItemId', unit);
      },
      /**
       * Gọi API lấy mã đơn vị, tên đơn vị
       * Author: NXNGOC (31/07/2023)
       */
      fetchUnitsFromApi() {
        const apiUrl = "https://cukcuk.manhnv.net/api/v1/Departments";
        axios
          .get(apiUrl)
          .then((response) => {
            this.units = response.data.map((item) => ({
              idUnit: item.DepartmentId,
              codeUnit: item.DepartmentCode,
              nameUnit: item.DepartmentName,
            }));
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      },

      updateSearchInput() {
        this.$emit("update:modelValue", this.searchInput)
      },

      onBlur() { 
        if (!this.searchInput) {
            this.valid = false;
        }
        else {
            this.valid = true;
        }
      }

    },

    mounted() {
      this.fetchUnitsFromApi();
      document.addEventListener("click", () => {
        this.tableContentVisible = false;
      });

    //   this.$watch('boxSelected', (newSelectedUnit) => {
    //   if (newSelectedUnit) {
    //     console.log('Don vi dc chon sua: ',newSelectedUnit);
    //     this.units = this.units.map((unit) => ({
    //       ...unit,
    //       isRowSelected: unit.idUnit == newSelectedUnit,
    //     }));
    //   }
    // });
    },

    watch: {
      modelValue: {
        handler(newVal) {
          this.searchInput = newVal;
        }
      },
      boxSelected: {
        handler(newVal) {
          if(newVal && newVal !== false) {
            this.units = this.units.map((unit) => ({
              ...unit,
              isRowSelected: unit.idUnit === newVal
            }))
          }
        }
      }
    },
  };
  </script>

<style scoped>

/* .m-row .table-content .box-table  {
    max-height: 70px;
    overflow-y: scroll;
    padding-right: 4px;
} */

.table-content tr:hover {
  background-color: rgba(80,184,60,0.1) !important;
  cursor: pointer;
}
</style>