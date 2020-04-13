let promise = new Promise((resolve,reject )=> reject(new Error('error')));
promise.catch(error => alert(error));
