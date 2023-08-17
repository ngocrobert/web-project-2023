﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.WebFresher062023.AMIS.Domain
{
    public class NotFoundException : Exception
    {
        public int ErrorCode { get; set; }
        public NotFoundException() { }
        public NotFoundException(int errorCode)
        {
            ErrorCode = errorCode;
        }
        public NotFoundException(string message) : base(message) { }
        public NotFoundException(string message, int errorCode) : base(message)
        {
            ErrorCode = errorCode;
        }
    }
}
