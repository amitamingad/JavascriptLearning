function checkSpam(str) {
    if(str.toLocaleLowerCase().indexOf("viagra")!= -1 || str.toLocaleLowerCase().indexOf("xxxx") != -1) {
        return true;
    }else
        return false;

}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));