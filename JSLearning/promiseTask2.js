let promise = new Promise((resolve,reject) => {
    reject(new Error("error!!"));
});
promise.then(null,error => alert(error));

