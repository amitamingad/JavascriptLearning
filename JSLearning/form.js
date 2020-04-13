function showPrompt(message,cb){
    let result = prompt(message);
    if(result != null){
        cb(result);
    }
    else
        cb(null);
}