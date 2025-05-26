const globalErrorHandler=(err,req,res,next)=>{
    let message=err.message;
    let statusCode=err.statusCode;
    let stack=err.stack;
    
    res.status(statusCode).json({
        message,
        statusCode,
        stack
    })
    

}

export default globalErrorHandler