const format = {
    /**
     * Hàm format tiền
     * @param {*} number Số tiền
     * @returns dạng tiền đã được format
     * Author: NXNGOC
     */
    formatMoney: function (number) {
        if (number) {
            const value = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(number)
            return value;
        }
        else return "";
    },
    /**
     * Hàm format ngày/tháng/năm
     * @param {*} date ngày-tháng-năm dạng date
     * @returns chuỗi ngày/tháng/năm đã được format
     * Author: NXNGOC
     */
    formatDate: function (date) {
        try {
            if (!date) {
                return "";
            }
            date = new Date(date);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${day < 10 ? "0" + day : day}/${
                month < 10 ? "0" + month : month
              }/${year}`;
        } catch (error) {
            console.log(error);
            return ""
        }
    },
    /**
     * Hàm format năm/tháng/ngày
     * @param {*} date chuỗi ngày/tháng/năm
     * @returns chuỗi năm-tháng-ngày
     * Author: NXNGOC
     */
    formatYearDate: function (dob) {
        // chuyển đổi ngày sinh sang dạng yyyy-MM-dd
        if (dob) {
            dob = new Date(dob);
            let day = dob.getDate();
            let month = dob.getMonth() + 1;
            let year = dob.getFullYear();

            // return `${day < 10 ? "0" + day : day}/${
            //   month < 10 ? "0" + month : month
            // }/${year}`;
            return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
        } else {
            return "";
        }
    },
    /**
     * Hàm kiểm tra định dạng Email
     * @param {*} email chuỗi email
     * @returns Boolean value
     * Author: NXNGOC
     */
    isValidEmail: function (email) { 
        // Biểu thức chính quy để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Kiểm tra xem chuỗi có phù hợp với biểu thức chính quy không
        return emailRegex.test(email);
    },
    /**
     * Hàm định dạng giới tính
     * @param {*} genderVal giá trị lấy từ Api
     * @returns giới tính dạng string
     * Author: NXNGOC
     */
    formatGender: function (genderVal) {
        if (genderVal == 0) {
            return "Nam";
          } else if (genderVal == 1) {
            return "Nữ";
          } else {
            return "Khác";
          }
    }
}

export default format;