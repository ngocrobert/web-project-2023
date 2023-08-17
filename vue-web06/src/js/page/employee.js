window.onload = function () {
  // Gán sự kiện cho các thành phần
  loadData();
  initEvents();
  //load dữ liệu cho table
};

/**
 * Hàm load dữ liệu từ API
 * Author: NXNGOC (19/07/2023)
 */
function loadData() {
  try {
    console.log("loadData!!!");
    // Gọi API
    fetch("https://cukcuk.manhnv.net/api/v1/Employees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (const employee of data) {
          const employeeId = employee.EmployeeId;
          const employeeCode = employee.EmployeeCode;
          //const fullName = employee["FullName"];
          const gender = employee["Gender"];
          //console.log(employeeCode);
          let trData = document.createElement("tr");
          trData.innerHTML = `<tr class="">
                                <td class="m-td text-align-center multiple-cell">
                                    <input type="checkbox" name="checkRow" />
                                    <input type="hidden" name="employeeID" value="${employeeId}">
                                </td>
                                <td class="m-td text-align-left">${employeeCode}</td>
                                <td class="m-td text-align-left">${
                                  employee.FullName
                                }</td>
                                <td class="m-td text-align-left">${formatGender(
                                  gender
                                )}</td>
                                <td class="m-td text-align-center">${formatDate(
                                  employee.DateOfBirth
                                )}</td>
                                <td class="m-td text-align-left">${
                                  employee.IdentityNumber
                                }</td>
                                <td class="m-td text-align-left">${
                                  employee.PositionName
                                }</td>
                                <td class="m-td text-align-left">${
                                  employee.DepartmentName
                                }</td>
                                <td class="m-td text-align-right">${formatMoney(
                                  employee.Salary
                                )}</td>
                                <td class="m-td text-align-left">987645</td>
                                <td class="m-td text-align-left">ACB</td>
                                <td class="m-td text-align-left">ACB HN</td>
                                <td class="m-td text-align-center multiple-cell z-edit">
                                    <div class="m-dropdown">
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
                                    </div>
                                </td>
                            </tr>`;

          // append vào tbody của table
          document.querySelector("#tbEmployeeList tbody").append(trData);
        }
      });
    //đẩy dữ liệu lên table:
  } catch (error) {
    console.log(error);
  }
}

/**
 * Tạo các sự kiện cho các thành phần
 * Author: NXNGOC (18/07/2023)
 */
function initEvents() {
  try {
    // Add
    const btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", btnAddOnClick);

    document
      .getElementById("close-dialog")
      .addEventListener("click", btnCloseDialogOnClick);
    document
      .querySelector("#btn-cancel__form")
      .addEventListener("click", btnCloseDialogOnClick);

    // Save
    document
      .querySelector("#btnSave")
      .addEventListener("click", btnSaveOnClick);

    // Close Popup Warnings
    document
      .querySelector("#close-popup")
      .addEventListener("click", () => { btnClosePopupOnClick(".m-popup--notice") });
    document
      .querySelector(".btn-agree-close")
      .addEventListener("click", () => { 
        btnClosePopupOnClick(".m-popup--notice")  
      });

    // Close Popup Warnings Delete
    document.querySelector(".btn-cancel-delete").addEventListener("click", () => { btnClosePopupOnClick(".m-popup-delete") });  
    document.querySelector("#close-popup--delete").addEventListener("click", () => { btnClosePopupOnClick(".m-popup-delete") });

    // Validate cho Input
    validateInput("#txtEmployeeCode");
    validateInput("#txtFullName");
    //validateInput("#txtUnit");

    // Edit form

    // CSS Row selected
    setTimeout(() => {
      addCSSRowSelected();
      dbClickRowEmployee();
      showListFunction();
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hiển thị form Add khi Click
 * Author: NXNGOC (19/07/2023)
 */
function btnAddOnClick() {
  document.querySelector(".m-dialog").style.display = "block";
  // focus vào ô nhập liệu đầu tiên
  document.querySelector(".m-dialog-body input").focus();

  // Lấy mã nhân viên mới:
  // 1. Gọi api lấy mã nhân viên
  fetch("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
    .then((res) => res.text())
    .then((text) => {
      document.querySelector(".m-dialog-body input").value = text;
    });
  // 2. Gán giá trị mã nhân viên
}

/**
 * Đóng form Add khi Click
 * Author: NXNGOC (19/07/2023)
 */

function btnCloseDialogOnClick() {
  document.querySelector(".m-dialog").style.display = "none";
  resetPage();
  // let formEmployee = document.querySelector(".m-dialog");
  // formEmployee.style.display = "none";
  // document.querySelector("#close-dialog").addEventListener("click", () => {
  //     formEmployee.reset();
  // })
}

/**
 * Đóng form thống báo lỗi
 * Author: NXNGOC (19/07/2023)
 */
function btnClosePopupOnClick(nameClose) {
  document.querySelector(nameClose).style.display = "none";
  if (nameClose == ".m-popup--notice") {
    focusInputError("#txtFullName");
  }
}

/**
 * Khai báo biến thông tin Nhân viên
 * Author: NXNGOC (25/07/2023)
 */
var employeeID;
var employeeCode = document.querySelector("#txtEmployeeCode");
var fullName = document.querySelector("#txtFullName");
var gender = document.getElementsByName("gender");
var dob = document.querySelector("#dtDateOfBirth");
var phoneNumber = document.querySelector("#txtPhoneNumber");
var email = document.querySelector("#txtEmail");
var address = document.querySelector("#txtAddress");
var identityNumber = document.querySelector("#txtIdentityNumber");
var identityDate = document.querySelector("#dtDateOfCCCD");
//var salary;
var positionName = document.querySelector("#txtPosition");
var unit = document.querySelector("#txtUnit input");

/**
 * Cất thông tin nhân viên
 * Author: NXNGOC (19/07/2023)
 */
function btnSaveOnClick() {
  try {
    // Validate dữ liệu
    // 1. Các thông tin bắt buộc nhập: mã nhân viên, họ tên

    // let employeeCode = document.querySelector("#txtEmployeeCode").value;
    // let fullName = document.querySelector("#txtFullName").value;
    // let unit = document.querySelector("#txtUnit input").value;
    // let position = document.querySelector("#txtPosition").value;

    if (employeeCode.value == "" || employeeCode.value == null) {
      showWarning(
        "Dữ liệu không hợp lệ",
        "Mã nhân viên không được phép để trống."
      );
      return;
      // document.querySelector("#txtEmployeeCode").classList.add("m-input-error");
    } else if (fullName.value == "" || fullName.value == null) {
      // Hiển thị thông báo lỗi validate:
      showWarning("Dữ liệu không hợp lệ", "Tên không được phép để trống.");
      return;
      //set style lỗi validate
      //document.querySelector("#txtFullName").classList.add("m-input-error");
      //    document.querySelector("#txtFullName").focus();
    } else if (unit.value === "" || unit.value === null) {
      showWarning("Dữ liệu không hợp lệ", "Đơn vị không được phép để trống.");
      document.querySelector("#txtUnit").classList.add("m-input-error");
      return;
    }

    // 2. ngày sinh, ngày làm cccd không được lớn hơn ngày hiện tại
    // lấy ngày sinh, ngày làm cccd vừa nhập
    let dobValidate = document.querySelector("#dtDateOfBirth").value;
    let cccdDate = document.querySelector("#dtDateOfCCCD").value;
    //chuyển sang dạng Date
    dobValidate = new Date(dobValidate);
    //identityDate.value = new Date(identityDate.value);
    //kiểm tra ngày hiện tại vs ngày sinh/ ngày làm cccd
    if (dobValidate > new Date()) {
      showWarning("Dữ liệu không hợp lệ", "Ngày sinh không hợp lệ.");
      return;
    } else {
      dob.value = formatYearDate(dobValidate);
    }
    if (cccdDate > new Date()) {
      showWarning("Dữ liệu không hợp lệ", "Ngày cấp không hợp lệ.");
      return;
    } else {
      identityDate.value = formatYearDate(cccdDate);
    }

    // 3. các thông tin cần đúng định dạng (email)
    if (!isValidEmail(email.value)) {
      showWarning("Dữ liệu không hợp lệ", "Email không hợp lệ.");
      return;
    }
    
    // Gọi POST Api để lưu
    if (employeeID == null) { // nếu employeeID = null => thêm mới nhân viên
      createEmployee("https://cukcuk.manhnv.net/api/v1/Employees");
    }

    // Gọi PUT Api để lưu
    else { // nếu employeeID != null => sửa thông tin nhân viên
      updateEmployee("https://cukcuk.manhnv.net/api/v1/Employees/" + employeeID);
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm gọi thêm Nhân viên qua Api
 * @param {*} url POST Api
 */
function createEmployee(url) {
  try {
    // 1. Build object:
    const newEmployee = {
      employeeCode: employeeCode.value,
      fullName: fullName.value,
      gender: getValueGender(),
      dateOfBirth: dob.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      address: address.value,
      identityNumber: identityNumber.value,
      identityDate: identityDate.value,
      salary: 10000000,
      positionName: positionName.value,
      departmentName: unit.value,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    };
    // 2. Gọi API
    console.log(newEmployee);
     var hasErrorApi = false;
      fetch(url, config)
      .then((res) => {
            let status = res.status;
            if (status >= 400) {
              hasErrorApi = true;
            }
    
            return res.json();
          })
      .then((res) => {
            console.log(res);
            // Hiển thị Toast thông báo thành công:
            //document.querySelector(".m-toast-box:has(.m-toast-success)").style.visibility = 'visible';
            const toastBox = document.querySelector(".m-toast-box");
            const toastSuccessEle = toastBox.querySelector(".m-toast-success");
            if (hasErrorApi == true) {
              // Hiển thị thông báo LỖI:
              showWarning("Thông báo", res.userMsg);
            } else {
              toastSuccessEle.style.visibility = "visible";
              // Tự ẩn
              setTimeout(() => {
                toastSuccessEle.style.visibility = "hidden";
              }, 2000);
            }
          })
   } catch (error) {
      console.log(error);
   }    
}

/**
 * Hàm lấy thông tin nhân viên khi double click 1 dòng
 * Author: NXNGOC (24/07/2023)
 */
async function dbClickRowEmployee() {
  try {
    // 1. double click vào 1 dòng thì form thông  tin nhân viên hiện ra
    const tableRows = document.querySelectorAll("#tbEmployeeList tbody tr");
    //let employeeID;
    let dataEmployee;
    await tableRows.forEach((row) => {
      row.addEventListener("dblclick", () => {
        // lấy ra ID nhân viên của dòng được chọn
        employeeID = row.querySelector("input[name='employeeID']").value;
        console.log("Employee ID: " + employeeID);
        document.querySelector(".m-dialog").style.display = "block";

        //2. lấy thông tin employee theo GET Api bởi ID
        dataEmployee = getEmployeeByID(employeeID);
        //console.log(dataEmployee);
        
      
      });
    });

    // 4. Chỉnh sửa các thông tin muốn
    // 5. Ấn Cất và gọi Api PUT lưu thông tin chỉnh sửa theo ID
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm GET lấy thông tin theo ID
 * @param {*} employeeID employeeID
 */
async function getEmployeeByID(employeeID) {
  await fetch("https://cukcuk.manhnv.net/api/v1/Employees/" + employeeID)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // 3. Gắn vào các trường trong form
      addDataToForm(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

/**
 * Hàm gán giá trị cho form sau GET By ID
 * @param {*} dataEmployee thông tin nhân viên lấy theo ID
 * Author: NXNGOC (24/07/2023)
 */
function addDataToForm(dataEmployee) {
  // Gán giá trị cho ô Radio
  gender[2].checked = true;
  if (dataEmployee.Gender === 0) gender[0].checked = true;
  if (dataEmployee.Gender === 1) gender[1].checked = true;

  // Gán giá trị cho form chi tiết
  employeeCode.value = dataEmployee.EmployeeCode;
  fullName.value = dataEmployee.FullName;
  // console.log(employeeCode.value, fullName.value);
  gender = dataEmployee.Gender;
  dob.value = formatYearDate(dataEmployee.DateOfBirth);
  phoneNumber.value = dataEmployee.PhoneNumber;
  email.value = dataEmployee.Email;
  address.value = dataEmployee.Address;
  identityNumber.value = dataEmployee.IdentityNumber
  identityDate.value = formatYearDate(dataEmployee.IdentityDate);
  salary = formatMoney(dataEmployee.Salary);
  positionName.value = dataEmployee.PositionName;
  unit.value = dataEmployee.DepartmentName;
}

/**
 * Hàm SỬA thông tin nhân viên
 * @param {*} employeeID ID của nhân viên cần UPDATE
 * Author: NXNGOC (24/07/2023)
 */
async function updateEmployee(url) {
  // 1. Build Object
   let updateEmployee = {
    employeeCode: employeeCode.value,
    fullName: fullName.value,
    gender: getValueGender(),
    dateOfBirth: dob.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    address: address.value,
    identityNumber: identityNumber.value,
    identityDate: identityDate.value,
    salary: 10000000,
    positionName: positionName.value,
    departmentName: unit.value,
   };
   
  // 2. Gọi PUT Api 
   var hasErrorApi = false;
  await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateEmployee),
        })
          .then(res => {
             let status =  res.status;
             if (status >= 400) {
              hasErrorApi = true;
            }
    
            return res.json();
          })
          .then((res) => {
            console.log(res);
            // Hiển thị Toast thông báo thành công:
            //document.querySelector(".m-toast-box:has(.m-toast-success)").style.visibility = 'visible';
            const toastBox = document.querySelector(".m-toast-box");
            const toastSuccessEle = toastBox.querySelector(".m-toast-success");
            if (hasErrorApi == true) {
              // Hiển thị thông báo LỖI:
              showWarning("Thông báo", res.userMsg);
            } else {
              toastSuccessEle.style.visibility = "visible";
              // Tự ẩn
              setTimeout(() => {
                toastSuccessEle.style.visibility = "hidden";
              }, 2000);
              employeeID = '';
            }
          })
          .catch((error) => {
            console.log(error);
          });
          
}

/**
 * Hàm xóa 1 nhân viên theo ID
 * @param {*} employeeID ID nhân viên muốn xóa
 * Author: NXNGOC (25/07/2023)
 */
async function deleteEmployee(employeeID) {
  try {
    // 1. Lấy employeeID muốn xóa
   // 2. Thông báo xác nhận có muốn xóa không?
   // 3. Gửi employeeID cần xóa lên DELETE Api
   var hasErrorApi = false;
   await fetch("https://cukcuk.manhnv.net/api/v1/Employees/"+employeeID, { method: 'DELETE' })
          .then((res) => {
                let status = res.status;
                if (status >= 400) {
                  hasErrorApi = true;
                }
        
                return res.json();
              })
          .then((res) => {
                console.log(res);
                // Hiển thị Toast thông báo thành công:
                //document.querySelector(".m-toast-box:has(.m-toast-success)").style.visibility = 'visible';
                const toastBox = document.querySelector(".m-toast-box");
                const toastSuccessEle = toastBox.querySelector(".m-toast-success");
                let toastTxt = toastSuccessEle.querySelector(".m-toast-txt")
                toastTxt.innerHTML = "Xóa thành công nhân viên!";
                if (hasErrorApi == true) {
                  // Hiển thị thông báo LỖI:
                  showWarning("Thông báo", res.userMsg);
                } else {
                  toastSuccessEle.style.visibility = "visible";
                  // Tự ẩn
                  setTimeout(() => {
                    toastSuccessEle.style.visibility = "hidden";
                  }, 2000);
                }
              })
  } catch (error) {
     console.log(error);
  }
   
}

/**
 * Hiển thị nội dung thông báo lỗi
 * Author: NXNGOC (19/07/2023)
 * @param {*} msg nội dung
 */

function showWarning(title, msg) {
  // 1. Hiển thị dialog thông báo
  document.querySelector(".m-popup--notice").style.display = "block";

  // 2. Thay đổi nội dung thông báo
  document.querySelector(".m-popup--notice .m-popup-title").innerHTML = title;
  document.querySelector(".m-popup--notice .m-popup-body__text").innerHTML =
    msg;
  // thay đổi Icon của Popup
  const eleIconPopup = document.querySelector(".m-popup--notice .mi-error");
  eleIconPopup.classList.remove("mi-error");
  eleIconPopup.classList.add("mi-error");
}

/**
 * Hàm thông báo xác nhận trước khi muốn xóa
 * @param {*} title tiêu đề thông báo
 * @param {*} msg nội dung thông báo
 * Author: NXNGOC (25/07/2023)
 */
function showAlertDelete(title, msg) {
  // 1. Hiển thị dialog thông báo
  document.querySelector(".m-popup-delete").style.display = "block";

  // 2. Thay đổi nội dung thông báo
  document.querySelector(".m-popup-delete .m-popup-title").innerHTML = title;
  document.querySelector(".m-popup-delete .m-popup-body__text").innerHTML = msg;
  // thay đổi Icon của Popup
  const eleIconPopup = document.querySelector(".m-popup-delete .mi-error");
  eleIconPopup.classList.remove("mi-error");
  eleIconPopup.classList.add("mi-warning");
}

/**
 * Validate cho các thẻ Input
 * @param {*} nameInput
 * Author: NXNGOC (20/07/2023)
 */

function validateInput(nameInput) {
  let input = document.querySelector(nameInput);

  input.addEventListener("keydown", function (e) {
    if (e.keyCode === 9 && input.value.trim() === "") {
      e.preventDefault();
      input.classList.add("m-input-error");
    } else {
      input.classList.remove("m-input-error");
    }
  });

  input.addEventListener("blur", function () {
    if (input.value.trim() == "" || input.value.trim == null) {
      input.classList.add("m-input-error");
    } else {
      input.classList.remove("m-input-error");
    }
  });
}

/**
 * Hàm focus các Input sau khi thông báo lỗi
 * @param {*} nameInput
 * Author: NXNGOC (20/07/2023)
 */
function focusInputError(nameInput) {
  document.querySelector(nameInput).focus();
}

/**
 * Hàm reset lại trang
 * Author: NXNGOC (20/07/2023)
 */
function resetPage() {
  location.reload();
}

/**
 * Hàm thêm CSS vào khi 1 dòng được chọn
 * Author: NXNGOC (23/07/2023)
 */
function addCSSRowSelected() {
  const rows = document.querySelectorAll("[name='checkRow']");

  /**
   * Thêm vào khi 1 checkbox trong bảng được chọn
   * Author: NXNGOC
   */
  rows.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Tìm phần tử cha gần nhất là thẻ tr và thêm/xóa lớp 'ColorChange'
      const closestTr = this.closest("tr");
      closestTr.classList.toggle("row-selected");
    });
  });
}

/**
 * Hàm định dạng giới tính
 * Author: NXNGOC (24/07/2023)
 * @param {*} genderVal giá trị lấy từ API
 * @returns giới tính dạng string
 */
function formatGender(genderVal) {
  if (genderVal == 0) {
    return "Nam";
  } else if (genderVal == 1) {
    return "Nữ";
  } else {
    return "Khác";
  }
}

/**
 * Hàm định dạng ngày sinh
 * @param {*} dob giá trị Date lấy từ Api
 * @returns ngày sinh dạng dd/MM/yyyy
 * Author: NXNGOC (24/07/2023)
 */
function formatDate(dob) {
  // chuyển đổi ngày sinh sang dạng dd/MM/yyyy
  if (dob) {
    dob = new Date(dob);
    let day = dob.getDate();
    let month = dob.getMonth() + 1;
    let year = dob.getFullYear();

    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  } else {
    return "";
  }
}

/**
 * Hàm định dạng ngày sinh cho PUT
 * @param {*} dob giá trị Date lấy từ Api
 * @returns ngày sinh dạng yyyy/MM/dd
 * Author: NXNGOC (24/07/2023)
 */
function formatYearDate(dob) {
  // chuyển đổi ngày sinh sang dạng dd/MM/yyyy
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
}

/**
 * Hàm định dạng tiền
 * @param {*} debit giá trị tiền lấy từ API
 * @returns tiền dạng VND: 100.000
 * Author: NXNGOC (24/7/2023)
 */
function formatMoney(debit) {
  if (debit)
    return (debit = new Intl.NumberFormat("vi-VN", {
      currency: "VND",
      style: "currency",
    }).format(debit));
  else return "";
}

/**
 * Kiểm tra tính hợp lệ của số điện thoại
 * Author: NXNGOC (24/7/2023)
 */
// function checkNumberPhone(element, number) {
//   const value = getValueOfElement(element);
//   if (
//     /[^\d\s()+-]/g.test(value) ||
//     (value.length != number && value.length != 0)
//   )
//     return false;
//   else return true;
// }

/**
 * Hàm kiểm tra định dạng Email nhập vào
 * @param {*} email giá trị lấy từ input Email
 * @returns True/ False
 * Author: NXNGOC (24/7/2023)
 */
function isValidEmail(email) {
  // Biểu thức chính quy để kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Kiểm tra xem chuỗi có phù hợp với biểu thức chính quy không
  return emailRegex.test(email);
}

/**
 * Hàm lấy giá trị giới tính
 * @returns 0: Nam, 1: Nữ, 2: Khác, null
 */
function getValueGender() {
  let radioGenders = document.getElementsByName("gender");
  for (let i = 0; i < radioGenders.length; i++) {
    if (radioGenders[i].checked) {
      return radioGenders[i].value;
    }
  }
  return null;
}

/**
 * Hàm hiển thị danh form chức năng khi click
 * Author: NXNGOC (25/07/2023)
 */
function showListFunction() {
  const mOptionMenus = document.querySelectorAll(".m-dropdown");
  //console.log(mOptionMenus);
  mOptionMenus.forEach((mOptionMenu) => {
      let mBtnSelect = mOptionMenu.querySelector(".m-dropdown-select i");
      let mSelectTxt = mOptionMenu.querySelector(".m-dropdown-select span");
      let closestTrOption = mOptionMenu.closest("tr");
      //console.log(mBtnSelect);
      mBtnSelect.addEventListener("click", () => {
          closestTrOption.classList.toggle("list-function");
          mOptionMenu.classList.toggle("active")
      });

      // Click nút SỬA => Hiển thị form thông tin chi tiết
      mSelectTxt.addEventListener("click", () => {
        // lấy ra ID nhân viên của dòng được chọn
        employeeID = closestTrOption.querySelector("input[name='employeeID']").value;
        console.log("Employee ID: " + employeeID);
        document.querySelector(".m-dialog").style.display = "block";
        //2. lấy thông tin employee theo GET Api bởi ID
        getEmployeeByID(employeeID);
      });

      // Click nút Xóa => Hiển thị thông báo xác nhận xóa theo ID không?
      let mBtnDelete = mOptionMenu.querySelector("li[name='delete-function']"); // lấy vị trí chứa 'Xóa'
      mBtnDelete.addEventListener("click", () => {
        employeeID = closestTrOption.querySelector("input[name='employeeID']").value;
        console.log("Employee ID: " + employeeID);
        showAlertDelete("Xóa nhân viên", "Bạn có thực sự muốn xóa nhân viên đã chọn không?");
        // Gán sự kiện cho nút 'Có' -> đồng ý xóa
        let btnAgreeDelete = document.querySelector("#agree-delete");
        btnAgreeDelete.addEventListener("click", () => { 
            //Gọi hàm Xóa theo ID
            deleteEmployee(employeeID);
            // Ẩn popup các chức năng 
            document.querySelector(".m-popup-delete").style.display = "none";
         });
      })

  })
}