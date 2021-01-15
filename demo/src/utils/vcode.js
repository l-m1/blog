//随机验证码
export function getVcode() {
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var str = '';
    for(var i=0;i<6;i++){
        var num = Math.round(Math.random()*(15-0)+0);
        str += arr[num];
    }
    return str;
}