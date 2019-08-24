let num = '266219';
num1 = num.split('');
reducer = (a, b) => a*b;
num2 = num1.reduce(reducer);
console.log(num1.reduce(reducer));
num3 = String(num2**3);
console.log(num3[0]+num3[1]);



