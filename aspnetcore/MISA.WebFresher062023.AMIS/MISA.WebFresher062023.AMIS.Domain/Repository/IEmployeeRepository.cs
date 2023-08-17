using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.WebFresher062023.AMIS.Domain
{
    public interface IEmployeeRepository
    {
        /// <summary>
        /// Hàm lấy toàn bộ nhân viên
        /// </summary>
        /// <returns>Danh sách nhân viên</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<List<Employee>> GetAllEmployeeAsync();
        /// <summary>
        /// Hàm lấy 1 nhân viên theo ID
        /// </summary>
        /// <param name="employeeId">ID nhân viên</param>
        /// <returns>nhân viên</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<Employee> GetEmployeeAsync(Guid employeeId);
        /// <summary>
        /// Tìm 1 nhân viên
        /// </summary>
        /// <param name="employeeId">ID nhân viên</param>
        /// <returns>Nhân viên</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<Employee?> FindEmployeeAsync(Guid employeeId);
        /// <summary>
        /// Hàm thêm mới 1 nhân viên
        /// </summary>
        /// <param name="employee">nhân viên</param>
        /// <returns>nhân viên được thêm</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<Employee> InsertEmployeeAsync(Employee employee);
        /// <summary>
        /// Hàm sửa 1 nhân viên
        /// </summary>
        /// <param name="employee">nhân viên</param>
        /// <returns>nhân viên được sửa</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<Employee> UpdateEmployeeAsync(Guid employeeId, Employee employee);
        /// <summary>
        /// Hàm xóa 1 nhân viên
        /// </summary>
        /// <param name="employeeId">ID nhân viên</param>
        /// <returns>xác nhận xóa thành công</returns>
        /// CreatedBy: nxngoc (15/08/2023)
        Task<int> DeleteEmployeeAsync(Guid employeeId);
        Task<int> DeleteManyEmployeeAsync(List<Employee> employees);

    }
}
