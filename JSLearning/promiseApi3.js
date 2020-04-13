let promises = [new Promise(resolve => resolve("done")),
                new Promise((resolve,reject) => reject(new Error("rejected"))),
                new Promise(resolve => resolve("done"))];
Promise.all(promises).then(result =>alert(result),error => alert(error));
