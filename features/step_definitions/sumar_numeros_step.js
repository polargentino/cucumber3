const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let num1, num2, result;

Given('I have numbers {int} and {int}', function (number1, number2) {
  num1 = number1;
  num2 = number2;
});

When('I add the numbers', function () {
  result = num1 + num2;
});

Then('the result should be {int}', function (expectedResult) {
  assert.strictEqual(result, expectedResult);
});
