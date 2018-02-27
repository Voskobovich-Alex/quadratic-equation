module.exports = function solveEquation(equation) {
var str = equation.split(' ');
var a = str[0];
var b = str[3]+str[4];
var c = str[7]+str[8];
var x1,x2;
var diz;
var rezult = new Array(1,2);
diz = (b*b) - (4*a*c);
if (diz >=0) {
	x1 =(- b + ( Math.sqrt(diz) ) ) / (2 * a);
	x2 =(- b - ( Math.sqrt(diz) ) ) / (2 * a);
	rezult[0]=Math.round(x1);
	rezult[1]=Math.round(x2);
} if (diz < 0) {
	rezult[0]=0;
	rezult[1]=0;
}
rezult.sort(function (i, j) {
    return i - j;
});
return rezult;
}
