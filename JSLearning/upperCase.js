function  ucletter(str) {
    let firstc = str[0];
    return (firstc.toUpperCase()+str.slice(1,str.length))

}

let result = ucletter("amma");
alert(result);