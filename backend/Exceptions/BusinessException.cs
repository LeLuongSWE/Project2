namespace Backend.Exceptions;

public class BusinessException : Exception
{
    public int ErrorCode { get;  }
    public BusinessException(string message, int errorCode = 0) : base(message) => ErrorCode = errorCode;
}