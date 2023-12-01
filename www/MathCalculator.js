var exec = require('cordova/exec');
// 'coolMethod' is the name of the method exposed in the native code 
module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

// 'add' is the name of the method exposed in the native code
// 'arg0' is the argument passed to the native code
// 'success' and 'error' are callback functions
// 'MathCalculator' is the name of the native class
module.exports.add = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [arg0]);
};

module.exports.substract = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'substract', [arg0]);
};