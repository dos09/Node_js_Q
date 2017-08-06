var Q = require('Q');

function func(num) {
    var deferred = Q.defer();
    if(num === 0) {
        deferred.reject(new Error('rejected'));
    } else {
        deferred.resolve(num);
    }
    
    return deferred.promise;
}

function okHandler(value) {
    console.log('OK handler: ' + value);
}

function failHandler(value) {
    console.log('Fail handler: ' + value);   
}
var promise = func(1);
promise.then(okHandler, failHandler);
promise = func(0);
promise.then(okHandler, failHandler);