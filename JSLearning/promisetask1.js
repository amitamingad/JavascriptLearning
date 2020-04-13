function loadScript(src) {
    return new Promise(resolve => {
        let script = document.createElement('script');
        script.src = src;
        resolve('done');
    })
}
let promise = loadScript('./promisetask.js');
promise.then(result => {alert(result)});

