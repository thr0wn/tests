/**
 * Counter for log purposes
 * @private
 * @type {Integer}
*/
let index = 0;

/**
 * Value
 * @typedef {boolean|number|string} value 
*/

/**
 * Values to be tested.
 * @typedef {object} values
 * @property {value} value1 - First value.
 * @property {value} value2 - Second value.
*/

/**
 * Options of test functions.
 * @typedef {object} options
 * @property {string} message - Message to print while running the test.
*/

/**
 * Options of execTest.
 * @typedef {options} execOptions
 * @property {test} test - Function to be evaluated against input values.
 */

/**
 * Test function type definition.
 * @typedef {function} test
 * @param {values} values - input values.
 * @param {options} options - test options.
 * @returns {boolean}
*/

/**
 * Collection of tests.
 * @namespace tests
 * @type {object}
*/
const tests = {};

/**
 * Test that uses operator '==='.
 * @memberOf tests
 * @method
 * @param {value} value1 - First value.
 * @param {value} value2 - Second value.
 * @param {string} message - Message to print while running the test.
 * @returns {boolean}
*/
tests.equals = (value1, value2, message) => {
  const test = () => value1 === value2;
  return execTest({value1, value2}, { message, test });
};

/**
 * Function that tests two values and print a message depending on a condition function.
 * @function
 * @param {values} values - Input values.
 * @param {execOptions} execOptions - Test options.
 * @returns {boolean}
*/
function execTest({ value1, value2} , { message, test }) {
  console.info(`Assertion ${index}${message ? `: ${message}` : ""}`)
  const result = test(value1, value2);
  if (result) {
    console.info("\tsuccess");
  }
  else {
    console.error(`\terror: ${value1} !== ${value2}`);
  }
  index++
  return result;
};

module.exports = tests;
