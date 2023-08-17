using MISA.WebFresher062023.AMIS.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace MISA.WebFresher062023.AMIS.Application
{
    public class EmployeeService : IEmployeeService
    {

        private readonly IEmployeeRepository _employeeRepository;
        

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async Task<List<EmployeeDto>> GetAllEmployeeAsync()
        {
            var employees = await _employeeRepository.GetAllEmployeeAsync();

            var employeesDto = employees.Select( employee =>  EmployeeToEmployeeDto(employee)).ToList();

            return employeesDto;
        }

        public async Task<EmployeeDto> GetEmployeeAsync(Guid employeeId)
        {
            var employee = await _employeeRepository.GetEmployeeAsync(employeeId);

            var employeeDto =  EmployeeToEmployeeDto(employee);

            return employeeDto;

        }

        public async Task<EmployeeCreateDto> InsertEmployeeAsync(EmployeeCreateDto employeeCreateDto)
        {
            var employee = EmployeeDtoToEmployee(employeeCreateDto);
            var result = await _employeeRepository.InsertEmployeeAsync(employee);
            var resultDto = EmployeeToCreateEmployeeDto(result);

            return resultDto;

            //throw new Exception();
        }

        public async Task<EmployeeUpdateDto> UpdateEmployeeAsync(Guid employeeId, EmployeeUpdateDto employeeUpdateDto)
        {
            var employee = EmployeeDtoToEmployee(employeeUpdateDto);
            var result = await _employeeRepository.UpdateEmployeeAsync(employeeId, employee);
            var resultDto = EmployeeToUpdateEmployeeDto(result);

            return resultDto;

            //throw new Exception();
        }
        public async Task<int> DeleteEmployeeAsync(Guid employeeId)
        {
            var employee = await _employeeRepository.GetEmployeeAsync(employeeId);

            var result = await _employeeRepository.DeleteEmployeeAsync(employeeId);

            return result;
        }

        public Task<int> DeleteManyEmployeeAsync(List<Guid> employeeIdS)
        {
            throw new NotImplementedException();
        }

        //private EmployeeDto EmployeeToEmployeeDto(Employee employee)
        //{
        //    var employeeDto = new EmployeeDto();
        //    return employeeDto;
        //}
        private EmployeeDto EmployeeToEmployeeDto(Employee employee)
        {
            var employeeDto = new EmployeeDto()
            {
                EmployeeId = employee.EmployeeId,
                EmployeeCode = employee.EmployeeCode,
                FullName = employee.FullName,
                Gender = employee.Gender,
                //Email = employee.Email,
                //PhoneNumber = employee.PhoneNumber,
                //Address = employee.Address,
                DateOfBirth = employee.DateOfBirth,
                DepartmentId = employee.DepartmentId,
            };
            return employeeDto;
        }

        private EmployeeCreateDto EmployeeToCreateEmployeeDto(Employee employee)
        {
            var employeeDto = new EmployeeCreateDto()
            {
                
                EmployeeCode = employee.EmployeeCode,
                FullName = employee.FullName,
                Gender = employee.Gender,
                //Email = employee.Email,
                //PhoneNumber = employee.PhoneNumber,
                //Address = employee.Address,
                DateOfBirth = employee.DateOfBirth,
                DepartmentId = employee.DepartmentId,
            };
            return employeeDto;
        }

        private Employee EmployeeDtoToEmployee(EmployeeCreateDto employeeCreateDto)
        {
            var employee = new Employee()
            {
                
                EmployeeCode = employeeCreateDto.EmployeeCode,
                FullName = employeeCreateDto.FullName,
                Gender = employeeCreateDto.Gender,
                DateOfBirth = employeeCreateDto.DateOfBirth,
                DepartmentId = employeeCreateDto.DepartmentId,
            };
            return employee;
        }

        private EmployeeUpdateDto EmployeeToUpdateEmployeeDto(Employee employee)
        {
            var employeeDto = new EmployeeUpdateDto()
            {

                EmployeeCode = employee.EmployeeCode,
                FullName = employee.FullName,
                Gender = employee.Gender,
                //Email = employee.Email,
                //PhoneNumber = employee.PhoneNumber,
                //Address = employee.Address,
                DateOfBirth = employee.DateOfBirth,
                DepartmentId = employee.DepartmentId,
            };
            return employeeDto;
        }
        private Employee EmployeeDtoToEmployee(EmployeeUpdateDto employeeUpdateDto)
        {
            var employee = new Employee()
            {

                EmployeeCode = employeeUpdateDto.EmployeeCode,
                FullName = employeeUpdateDto.FullName,
                Gender = employeeUpdateDto.Gender,
                DateOfBirth = employeeUpdateDto.DateOfBirth,
                DepartmentId = employeeUpdateDto.DepartmentId,
            };
            return employee;
        }
    }
}
