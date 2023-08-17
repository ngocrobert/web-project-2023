using Dapper;
using MISA.WebFresher062023.AMIS.Domain;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.WebFresher062023.AMIS.Infrastructure
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly string _connectionString;
        public EmployeeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        
        public async Task<List<Employee>> GetAllEmployeeAsync()
        {
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            var connection = new MySqlConnection(_connectionString);

            var sql = "SELECT * FROM employee;";

            var result = await connection.QueryAsync<Employee>(sql);

            return result.ToList();
        }

        public async Task<Employee> GetEmployeeAsync(Guid employeeId)
        {
            var employee = await FindEmployeeAsync(employeeId);
            if (employee == null)
            {
                throw new NotFoundException();
            }

            return employee;
        }

        public async Task<Employee?> FindEmployeeAsync(Guid employeeId)
        {   // Tim khong thay tra ve null
            //var connectionString = "Server=127.0.0.1;Port=3309;Database=misa.web202306_mf1621_nxngoc;Uid=root;Pwd=1;";
            var connection = new MySqlConnection(_connectionString);

            var sql = $"SELECT * FROM Employee WHERE EmployeeId = @id;";

            var param = new DynamicParameters();
            param.Add("id", employeeId);

            var result = await connection.QuerySingleOrDefaultAsync<Employee>(sql, param);

            return result;
        }

        public async Task<Employee> InsertEmployeeAsync(Employee employee)
        {
            try
            {
                var connection = new MySqlConnection(_connectionString);

                //var sql = "INSERT INTO employee (EmployeeId, EmployeeCode, FullName, Gender, DateOfBirth, DepartmentId) VALUE (@EmployeeId, @EmployeeCode, @FullName, @Gender, @DateOfBirth, @DepartmentId);";
                var sql = $"INSERT INTO employee (EmployeeId, EmployeeCode, FullName, Gender, DateOfBirth, DepartmentId) VALUE (@EmployeeId, @EmployeeCode, @FullName, @Gender, @DateOfBirth, @DepartmentId);";

                var param = new DynamicParameters();
                param.Add("EmployeeId", Guid.NewGuid());
                param.Add("EmployeeCode", employee.EmployeeCode);
                param.Add("FullName", employee.FullName);
                param.Add("Gender", employee.Gender);
                param.Add("DateOfBirth", employee.DateOfBirth);
                param.Add("DepartmentId", employee.DepartmentId);

                var result = await connection.QuerySingleOrDefaultAsync(sql, param);

                return result;
            }
            catch (Exception e)
            {
               
                Console.WriteLine(e);
                throw new Exception();
            }
            
        }

        public async Task<Employee> UpdateEmployeeAsync(Guid employeeId, Employee employee)
        {
            //throw new NotImplementedException();

            var connection = new MySqlConnection(_connectionString);
            var sql = "UPDATE employee SET FullName = @FullName, Gender = @Gender, DateOfBirth = @DateOfBirth WHERE EmployeeID = @EmployeeID;";

            var param = new DynamicParameters();
            param.Add("FullName", employee.FullName);
            param.Add("Gender", employee.Gender);
            param.Add("DateOfBirth", employee.DateOfBirth);
            //param.Add("DepartmentId", employee.DepartmentId);
            param.Add("EmployeeID", employeeId);

            var result = await connection.QuerySingleOrDefaultAsync(sql, param);

            return result;

        }
        public async Task<int> DeleteEmployeeAsync(Guid employeeId)
        {
            var connection = new MySqlConnection(_connectionString);

            var sql = $"DELETE FROM employee WHERE EmployeeID = @id;";

            var param = new DynamicParameters();
            param.Add("id", employeeId);

            var result = await connection.ExecuteAsync(sql, param);

            return result;

        }

        public async Task<int> DeleteManyEmployeeAsync(List<Employee> employees)
        {
            var connection = new MySqlConnection(_connectionString);

            var sql = $"DELETE FROM employee WHERE EmployeeID IN @ids;";

            var param = new DynamicParameters();
            param.Add("ids", employees.Select(employee => employee.EmployeeId));

            var result = await connection.ExecuteAsync(sql, param);

            return result;
        }

        
    }
}
