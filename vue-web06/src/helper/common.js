import emitter from "tiny-emitter/instance";

const commonJS = {
    /**
     * Hàm hiển thị thông báo
     * @param {*} noticeTitle Tiêu đề thông báo
     * @param {*} noticeMess Nội dung thông báo
     * @param {*} noticeType Loại thông báo
     * Author: NXNGOC (30/07/2023)
     */
  showNotice(noticeTitle, noticeMess, noticeType) {
    emitter.emit("showNotice", noticeTitle, noticeMess, noticeType);
  },
  /**
   * Hàm tạo sự kiện xóa khi click xác nhận
   * Author: NXNGOC (30/07/2023)
   */
  deleteFunction(agree) {
    emitter.emit("deleteFunction", agree);
  },
  closeNoticeAuto(hidden) {
    emitter.emit("closeNoticeAuto", hidden);
  },
  /**
   * Hàm hiển thị thông báo lỗi từ Api
   * @param {*} err nội dung lỗi
   * Author: NXNGOC (30/07/2023)
   */
  showErrorApi(err) {
    const response = err.response;
    const statusCode = response.status;
    var msgError = "";
    switch (statusCode) {
      case 500:
        msgError = response.data?.userMsg;
        this.showNotice("Thông báo", [msgError]);
        break;
      case 400:
        msgError = response.data.userMsg;
        this.showNotice("Thông báo", [msgError]);
        break;
      default:
        break;
    }
    console.log(err);
  },
};

export default commonJS;
