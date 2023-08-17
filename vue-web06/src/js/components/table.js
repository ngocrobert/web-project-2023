const checkboxes = document.querySelectorAll("[name='checkRow']");

/**
 * Thêm vào khi 1 checkbox trong bảng được chọn
 * Author: NXNGOC
 */
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      // Tìm phần tử cha gần nhất là thẻ tr và thêm/xóa lớp 'ColorChange'
      const closestTr = this.closest('tr');
      closestTr.classList.toggle('row-selected');
    });
  });