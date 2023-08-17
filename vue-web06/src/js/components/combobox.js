const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  selectContent = wrapper.querySelector(".select-content"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

//array of some countries
let countries = [
  "An Giang",
  "Bà Rịa-Vũng Tàu",
  "Bạc Liêu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

/**
 * Thêm các thông tin cần thiết vào Content
 * Author: NXNGOC (17/07/2023)
 * @param {*} selectedCountry 
 */

function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach((country) => {
    // if selected country and country value same then add selected class
    let isSelected = country == selectedCountry ? "selected" : "";
    // adding each country inside li and inserting all li inside options tag
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}

addCountry();

/**
 * update lại thông tin trong bảng khi search, khi được chọn
 * Author: NXNGOC (17/07/2023)
 */

function updateName(selectedLi) {
  //console.log(selectBtn);
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.value = selectedLi.innerText;
}

/**
 *  Tìm kiếm thông tin trong Combobox
 * Author: NXNGOC (17/07/2023)
 */

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchedVal = searchInp.value.toLocaleLowerCase();
  // returning all countries from array which are start with you search value
  //and mapping returned country with li and joining them
  arr = countries
    .filter((data) => {
      return data.toLocaleLowerCase().startsWith(searchedVal);
    })
    .map((data) => `<li onclick="updateName(this)">${data}</li>`)
    .join("");
  //console.log(arr);
  options.innerHTML = arr ? arr : `<p>Oops! Not found</p>`;
});

selectBtn.addEventListener("click", (event) => {
  //console.log(selectBtn);
  wrapper.classList.toggle("active");
  event.stopPropagation();
  selectContent.style.display = "block"; // Hiển thị nội dung của vùng có class là "select-content"
});

document.addEventListener("click", function (event) {
  if (!selectBtn.contains(event.target)) {
    selectContent.style.display = "none"; // Ẩn nội dung của vùng có class là "select-content"
    wrapper.classList.remove("active"); 
  }
});

// selectBtn.addEventListener("click", function (event) {
//   event.stopPropagation();
//   selectContent.style.display = "block"; // Hiển thị nội dung của vùng có class là "select-content"
// });


