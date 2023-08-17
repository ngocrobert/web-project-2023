using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.WebFresher062023.AMIS.Application
{
    public interface IEmployeeService
    {
        /// <summary>
        /// Hàm lấy toàn bộ nhân viên
        /// </summary>
        /// <returns>Danh sách nhân viên</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<List<EmployeeDto>> GetAllEmployeeAsync();
        /// <summary>
        /// Hàm lấy 1 nhân viên theo ID
        /// </summary>
        /// <param name="employeeId">ID nhân viên</param>
        /// <returns>nhân viên</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<EmployeeDto> GetEmployeeAsync(Guid employeeId);
        /// <summary>
        /// Hàm thêm 1 nhân viên
        /// </summary>
        /// <param name="employeeCreateDto">nhân viên thêm</param>
        /// <returns>nhân viên được thêm</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<EmployeeCreateDto> InsertEmployeeAsync(EmployeeCreateDto employeeCreateDto);

        /// <summary>
        /// Hàm sửa 1 nhân viên
        /// </summary>
        /// <param name="employeeId">Id của nhân viên</param>
        /// <param name="employeeUpdateDto">Nhân viên cần sửa</param>
        /// <returns>nhân viên được sửa</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<EmployeeUpdateDto> UpdateEmployeeAsync(Guid employeeId, EmployeeUpdateDto employeeUpdateDto);
        /// <summary>
        /// Hàm xóa 1 nhân viên
        /// </summary>
        /// <param name="employeeId">ID nhân viên</param>
        /// <returns>xác nhận xóa thành công</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<int> DeleteEmployeeAsync(Guid employeeId);
        Task<int> DeleteManyEmployeeAsync(List<Guid> employeeIds);

    }
}
