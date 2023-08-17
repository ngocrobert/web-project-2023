namespace MISA.WebFresher062023.AMIS
{
    public class Calculator
    {
        /// <summary>
        /// Ham cong 2 so nguyen
        /// </summary>
        /// <param name="x">Toan hang 1</param>
        /// <param name="y">Toan hang 2</param>
        /// <returns>Tong 2 so nguyen</returns>
        /// CreatedBy: nxngoc (13/08/2023)
        public long Add(int x, int y)
        {
            return x + (long)y;
        }
        /// <summary>
        /// Ham tru 2 so nguyen  
        /// </summary>
        /// <param name="x">Toan hang 1</param>
        /// <param name="y">Toan hang 2</param>
        /// <returns>Hieu 2 so nguyen</returns>
        /// CreatedBy: nxngoc (13/08/2023)
        public long Sub(int x, int y)
        {
            return x - (long) y;
        }
        /// <summary>
        /// Ham nhan 2 so nguyen
        /// </summary>
        /// <param name="x">Toan hang 1</param>
        /// <param name="y">Toan hang 2</param>
        /// <returns>Tich 2 so nguyen</returns>
        /// CreatedBy: nxngoc (13/08/2023)
        public long Mul(int x, int y)
        {
            //throw new NotImplementedException();
            return x * (long)y;
        }
        /// <summary>
        /// Ham chia 2 so nguyen
        /// </summary>
        /// <param name="x">Toan hang 1</param>
        /// <param name="y">Toan hang 2</param>
        /// <returns>Thuong 2 so nguyen</returns>
        /// CreatedBy: nxngoc (13/08/2023)
        public double Div(int x, int y)
        {
            //throw new NotImplementedException();
            if (y == 0)
            {
                throw new Exception("Cannot divide by 0");
            }
            return x / (double)y;
        }

        /// <summary>
        /// Hàm Tong 2 string (overload)
        /// </summary>
        /// <param name="numbers">chuoi chua toan tu, phan cach băng dau , </param>
        /// <returns>Tong cac toan tu trong chuoi</returns>
        /// <exception cref="Exception">Co toan tu am</exception>
        /// CreatedBy: nxngoc (13/08/2023)
        public long Add(string numbers)
        {
            if (string.IsNullOrEmpty(numbers))
                return 0;

            var splittedNumbers = numbers.Split(',');
            long sum = 0;
            
            string negaNumbers = "";

            foreach (var number in splittedNumbers)
            {
                int n = int.Parse(number);
                
                if (n < 0)
                {
                    negaNumbers += number + ", ";
                }
                sum += int.Parse(number);
            }

            // kiem tra chuoi co toan tu am ko
            if (!string.IsNullOrEmpty(negaNumbers))
            {
                throw new Exception($"Không chấp nhận toán tử âm: {negaNumbers.TrimEnd(',', ' ')}");
            }

            return sum;
        }
    }
}
