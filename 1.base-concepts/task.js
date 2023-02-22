"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2)-(4*a*c);
  let x1=0;
  let x2=0;
  if (d===0) {
    x1 = -b/(2*a);
    arr.push(x1);
  }
  if (d>0) {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  }
return arr;
}

solveEquation(2, 3, 4)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(percent)) {
        return false;
      }
      if (isNaN(contribution)) {
        return false;
      }
      if (isNaN(amount)) {
        return false;
      }
      let P = percent / 100 / 12;
      let S = amount - contribution;
      let M = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
      let sum = M * countMonths;
      return Number(sum.toFixed(2));
    }