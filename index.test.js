var tests = require('./index.js');

const sum = (a, b) => a + b;

tests.equals(1, 1, "1 equals 1");
tests.equals(sum(1, 1), 2, "sum(1, 1) === 2");
