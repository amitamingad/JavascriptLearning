let promise = new Promise(function (resolve, reject){
    resolve(1);
    }
)
promise.then(result=>alert(result),error=>alert(error));