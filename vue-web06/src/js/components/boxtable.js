const tableWrapper = document.querySelector(".table-wrapper"),
  tbSelectBtn = tableWrapper.querySelector(".select-btn"),
  tableContent = tableWrapper.querySelector(".table-content"),
  tableSearchInp = tableWrapper.querySelector("input");
 

let units = {
    codeUnit: "944UVB0F",
    nameUnit: "CÔNG TY CỔ PHẦN MISA"
};

/**
 * Thêm đơn vị vào table
 * Author: NXNGOC
 */

function addUnit() {

    var table = document.getElementById("boxTable");
    var newRow = table.createTFoot();
    var row = newRow.insertRow(0);
    var cellCode = row.insertCell(0);
    var cellName = row.insertCell(1);
    cellCode.innerHTML = units.codeUnit;
    cellName.innerHTML = units.nameUnit;
}

addUnit();

const tableOptions = tableWrapper.querySelector(".box-table tfoot");

var rowUnits = tableOptions.querySelectorAll(".box-table tfoot tr");

rowUnits.forEach((row) => {
  tableSearchInp.value = "";
    row.addEventListener("click", () => {
        row.classList.toggle('selected');
        tableSearchInp.value = rowUnits[0].cells[1].textContent;
    })
}) 

tbSelectBtn.addEventListener("click", (event) => {
  //console.log(tbSelectBtn);
  tableWrapper.classList.toggle("active");
  event.stopPropagation();
  tableContent.style.display = "block"; // Hiển thị nội dung của vùng có class là "select-content"
});

document.addEventListener("click", function (event) {
  if (!tbSelectBtn.contains(event.target)) {
    tableContent.style.display = "none"; // Ẩn nội dung của vùng có class là "select-content"
    tableWrapper.classList.remove("active");
  }
});
