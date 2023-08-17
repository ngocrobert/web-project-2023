using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.WebFresher062023.AMIS.UnitTests
{
    [TestFixture]
    public class CalculatorTests
    {
        [TestCase(1, 2, 3)]
        [TestCase(2, 3, 5)]
        [TestCase(-1, 7, 6)]
        [TestCase(int.MaxValue, int.MaxValue, int.MaxValue * (long)2)]

        /// <summary>
        /// Ham Test cong thanh cong 2 so nguyen
        /// </summary>
        /// CreatedBy: nxngoc (13/08/2023)
        public void Add_ValidInput_SumTwoNumber(int x, int y, long expectedResult)
        {
            //ham kich ban
            // Arrange : cbi data

            //var x = 1;
            //var y = 2;
            //var expectedResult = 3;


            // Action: hanh dong
            var actualResult =  new Calculator().Add(x, y);

            // Assert: tra ra kq
            Assert.That(actualResult, Is.EqualTo(expectedResult));
        }

        [TestCase(1, 2, -1)]
        [TestCase(2, 3, -1)]
        [TestCase(-1, 7, -8)]

        /// <summary>
        /// Ham Test tru thanh cong 2 so nguyen
        /// </summary>
        /// CreatedBy: nxngoc (13/08/2023)
        public void Sub_ValidInput_SubTwoNumber(int x, int y, long expectedResult)
        {
            //ham kich ban
            // Arrange : cbi data

            //var x = 1;
            //var y = 2;
            //var expectedResult = 3;


            // Action: hanh dong
            var actualResult = new Calculator().Sub(x, y);

            // Assert: tra ra kq
            Assert.That(actualResult, Is.EqualTo(expectedResult));
        }
        [TestCase(1, 2, 2)]
        [TestCase(-5, 2, -10)]
        [TestCase(int.MaxValue, int.MinValue, int.MaxValue * (long)int.MinValue)]
        /// <summary>
        /// Ham Test nhan thanh cong 2 so nguyen
        /// </summary>
        /// CreatedBy: nxngoc (13/08/2023)
        public void Multiply_ValidInput_MulTwoNumber(int x, int y, long expectedResult)
        {
            //ham kich ban
            // Arrange : cbi data

            //var x = 1;
            //var y = 2;
            //var expectedResult = 3;


            // Action: hanh dong
            var actualResult = new Calculator().Mul(x, y);

            // Assert: tra ra kq
            Assert.That(actualResult, Is.EqualTo(expectedResult));
        }

        [TestCase(1, 2, 0.5)]
        [TestCase(1, 3, (double)1 / 3)]
        [TestCase(int.MaxValue, 2, ((double)int.MaxValue / 2))]
        /// <summary>
        /// Ham Test chia thanh cong 2 so nguyen
        /// </summary>
        /// CreatedBy: nxngoc (13/08/2023)
        public void Div_ValidInput_DivTwoNumber(int x, int y, double expectedResult)
        {
            //ham kich ban
            // Arrange : cbi data

            //var x = 1;
            //var y = 2;
            //var expectedResult = 3;


            // Action: hanh dong
            var actualResult = new Calculator().Div(x, y);

            // Assert: tra ra kq
            //Assert.That(actualResult, Is.EqualTo(expectedResult));
            Assert.That(Math.Abs(actualResult - expectedResult), Is.LessThan(10e-3));
        }

        /// <summary>
        /// Ham Test chia cho 0
        /// </summary>
        /// CreatedBy: nxngoc (13/08/2023)
        [TestCase(1, 0, "Cannot divide by 0")]
        public void DivByZero_ValidInput_ThrowException(int x, int y, string expectedResult)
        {
            //ham kich ban
            // Arrange : cbi data

            //var x = 1;
            //var y = 2;
            //var expectedResult = 3;


            // Action: hanh dong
           
            var calculator = new Calculator();

            // Assert: tra ra kq
            //Assert.That(actualResult, Is.EqualTo(expectedResult));
            var exception = Assert.Throws<Exception>(() => calculator.Div(x, y));
            Assert.That(exception.Message, Is.EqualTo(expectedResult));
        }

        /// <summary>
        /// Hàm test cộng thành công các số nguyên dương trong chuỗi
        /// </summary>
        /// <param name="numbers">chuỗi chứa các số nguyên dương</param>
        /// <param name="expected">tổng thu về</param>
        /// CreatedBy: nxngoc (13/08/2023)
        [TestCase("1, 2,     3", 6)]
        [TestCase("1,2,3,4,5", 15)]
        [TestCase("", 0)]
        public void OverrideAdd_ValidInput_Success(string numbers, long expectedResult)
        {
            // Act
            var actualResult = new Calculator().Add(numbers);

            // Assert
            Assert.That(actualResult, Is.EqualTo(expectedResult));
        }
        /// <summary>
        ///  Hàm test trả về Exception khi trong chuỗi có toán tử âm
        /// </summary>
        /// <param name="numbers">chuỗi chứa các toán tử</param>
        /// <param name="expected">Exception thông báo</param>
        /// CreatedBy: nxngoc (13/08/2023)
        [TestCase("1,2,3,-4", "Không chấp nhận toán tử âm: -4")]
        public void OverrideAdd_NegativeNumber_ThrowException(string numbers, string expected)
        {
            // Act & Assert
            var calculator = new Calculator();

            var exception = Assert.Throws<Exception>(() => calculator.Add(numbers));
            Assert.That(exception.Message, Is.EqualTo(expected));
        }
    }
}
