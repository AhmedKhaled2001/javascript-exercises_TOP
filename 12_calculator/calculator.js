const add = function(a, b)
{
  return a +b;
	
};

const subtract = function(a, b)
{
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, val) => sum+ val, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, val) => sum * val, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(x) {
  let facArr = [];
  for(let i = 1; i <= x; i++)
  {
    facArr.push(i);
  }
	return facArr.reduce((sum, val)=> sum * val, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
