let urls = ['https://api.github.com/users/iliakan',
            'https://api.github.com/users/remy',
            'https://no-such-url'];
let promises = urls.map(url => fetch(url));
for(let val of promises.values()){
    alert(val);
}
Promise.all(promises).then(responses => responses.forEach(respons => alert(respons.text)),
                            error => alert(error));