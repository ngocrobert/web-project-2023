namespace MISA.WebFresher062023.AMIS
{
    public class Employee
    {
        /// <summary>
        /// Id của nhân viên
        /// </summary>
        public Guid EmployeeId { get; set; }
        /// <summary>
        /// Mã của nhân viên
        /// </summary>
        public string EmployeeCode { get; set; }
        /// <summary>
        /// Họ tên của nhân viên
        /// </summary>
        public string FullName { get; set; }
        /// <summary>
        /// Ngày sinh của nhân viên
        /// </summary>
        public DateTime DateOfBirth { get; set; }
        /// <summary>
        /// Giới tính của nhân viên
        /// </summary>
        public Gender Gender { get; set; }
        /// <summary>
        /// Email của nhân viên
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Số ĐT di động
        /// </summary>
        public string PhoneNumber { get; set; }
        /// <summary>
        /// Số ĐT cố định
        /// </summary>
        public string LandlineNumber { get; set; }
        /// <summary>
        /// Địa chỉ
        /// </summary>
        public string Address { get; set; }
        /// <summary>
        /// Mã phòng ban
        /// </summary>
        public Guid DepartmentId { get; set; }
        /// <summary>
        /// Ngày tạo
        /// </summary>
        public DateTime CreatedDate { get; set; }
        /// <summary>
        /// Người tạo
        /// </summary>
        public string CreatedBy { get; set; }
        /// <summary>
        /// Ngày sửa
        /// </summary>
        public DateTime ModifiedDate { get; set; }
        /// <summary>
        /// Người sửa
        /// </summary>
        public string ModifiedBy { get; set; }


    }
}
