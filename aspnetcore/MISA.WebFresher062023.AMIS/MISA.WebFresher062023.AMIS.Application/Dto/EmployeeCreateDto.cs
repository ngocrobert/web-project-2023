using MISA.WebFresher062023.AMIS.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.WebFresher062023.AMIS.Application
{
    public class EmployeeCreateDto
    {
        /// <summary>
        /// Mã của nhân viên
        /// </summary>
        public string EmployeeCode { get; set; }
        [Required]
        [MaxLength(100)]
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
        /// Mã phòng ban
        /// </summary>
        public Guid DepartmentId { get; set; }

    }
}
