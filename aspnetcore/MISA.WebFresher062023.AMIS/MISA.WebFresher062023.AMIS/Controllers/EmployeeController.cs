using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MISA.WebFresher062023.AMIS.Application;
using MySqlConnector;

namespace MISA.WebFresher062023.AMIS.Controllers
{
    [Route("api/v1/[controller]s")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }


        /// <summary>
        /// Hàm lấy danh sách tất cả nhân viên
        /// </summary>
        /// <returns>Danh sách tất cả nhân viên</returns>
        /// Created by: nxngoc (10/08/2023)
        [HttpGet]
        public async Task<IActionResult> GetAllEmployeeAsync()
        {
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            //var connection = new MySqlConnection(connectionString);

           // var sql = "SELECT * FROM Employee;";

           // var result = await connection.QueryAsync<Employee>(sql);

            var result = await _employeeService.GetAllEmployeeAsync();

            return StatusCode(StatusCodes.Status200OK, result);
        }


        /// <summary>
        /// Hàm lấy 1 nhân viên
        /// </summary>
        /// <returns>1 nhân viên</returns>
        /// Created by: nxngoc (10/08/2023)
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetEmployeeAsync(Guid id)
        {
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            //var connection = new MySqlConnection(connectionString);

            //var sql = $"SELECT * FROM Employee WHERE EmployeeId = @id;";

            //var param = new DynamicParameters();
            //param.Add("id", id);

            //var result = await connection.QuerySingleOrDefaultAsync<Employee>(sql,param);

            //if (result == null)
            //{
            //    throw new Exception("Không tìm thấy nhân viên!");
            //}

            var result = await _employeeService.GetEmployeeAsync(id);

            return StatusCode(StatusCodes.Status200OK, result);
        }

        /// <summary>
        /// Thêm mới nhân viên
        /// </summary>
        /// <returns>Nhân viên</returns>
        /// Author: nxngoc (10/08/2023)
        [HttpPost]
        public async Task<IActionResult> AddEmployeeAsync([FromBody] EmployeeCreateDto employee)
        {
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            //var connection = new MySqlConnection(connectionString);

            //var sql = "INSERT INTO employee (EmployeeId, EmployeeCode, FullName, Gender, DateOfBirth, DepartmentId) VALUE (@EmployeeId, @EmployeeCode, @FullName, @Gender, @DateOfBirth, @DepartmentId);";

            //var param = new DynamicParameters();
            //param.Add("EmployeeId", Guid.NewGuid());
            //param.Add("EmployeeCode", employee.EmployeeCode);
            //param.Add("FullName", employee.FullName);
            //param.Add("Gender", employee.Gender);
            //param.Add("DateOfBirth", employee.DateOfBirth);
            //param.Add("DepartmentId", employee.DepartmentId);

            //var result = await connection.ExecuteAsync(sql, param);

            //if (result == 0)
            //{
            //    throw new Exception("Lỗi! Không thể thêm nhân viên");
            //    StatusCode(StatusCodes.Status400BadRequest);
            //}

            var result = await _employeeService.InsertEmployeeAsync(employee);

            return StatusCode(StatusCodes.Status201Created);
            
        }

        /// <summary>
        /// Sửa nhân viên
        /// </summary>
        /// <returns>Nhân viên</returns>
        /// Author: nxngoc (11/08/2023)
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateEmployeeAsync(Guid id, [FromBody] EmployeeUpdateDto employee)
        {
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            //var connection = new MySqlConnection(connectionString);

            //var sql = "UPDATE employee SET FullName = @FullName, Gender = @Gender, DateOfBirth = @DateOfBirth, DepartmentId = @DepartmentId WHERE EmployeeID = @EmployeeID;";

            //var param = new DynamicParameters();
            //param.Add("FullName", employee.FullName);
            //param.Add("Gender", employee.Gender);
            //param.Add("DateOfBirth", employee.DateOfBirth);
            //param.Add("DepartmentId", employee.DepartmentId);
            //param.Add("EmployeeID", id);


            //var result = await connection.ExecuteAsync(sql, param);

            //if (result == 0)
            //{
            //    throw new Exception("Lỗi! Không thể sửa nhân viên");
            //    StatusCode(StatusCodes.Status400BadRequest);
            //}

            var result = await _employeeService.UpdateEmployeeAsync(id, employee);

            return StatusCode(StatusCodes.Status204NoContent);


        }

        /// <summary>
        /// Xoá 1 nhân viên
        /// </summary>
        /// <returns>Nhân viên</returns>
        /// Author: nxngoc (11/08/2023)
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteEmployeeAsync(Guid id)
        {
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            //var connection = new MySqlConnection(connectionString);

            //var sql = $"DELETE FROM employee WHERE EmployeeID = @id;";

            //var param = new DynamicParameters();
            //param.Add("id", id);

            //var result = await connection.QuerySingleOrDefaultAsync<Employee>(sql, param);

            var result = await _employeeService.DeleteEmployeeAsync(id);

            return StatusCode(StatusCodes.Status200OK, result);
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteManyEmployeeAsync(List<Guid> ids)
        {
            var result = await _employeeService.DeleteManyEmployeeAsync(ids);

            return StatusCode(StatusCodes.Status200OK, result);
        }
    }
}
