let promise = new Promise((resolve,reject) => {
    let script = document.createElement('script');
    script.src = './promiseTassk3.js';
    script.onload = () => resolve("done");
    script.onerror = () => reject(new Error('Error on loading the script'));
    document.head.appendChild(script);
});

promise.then((result)=>alert(result),error => alert(error));