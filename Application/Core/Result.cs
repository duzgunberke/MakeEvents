namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSucces { get; set; }
        public T Value { get; set; }
        public string Error { get; set; }
        

        public static Result<T> Succes(T value)=>new Result<T> {IsSucces =true,Value =value};
        public static Result<T> Failure(string error)=>new Result<T> {IsSucces =false,Error =error};
    }
}