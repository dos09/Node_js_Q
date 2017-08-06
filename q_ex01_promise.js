var Q = require('Q');
//returns rejected promise
function getRejected(reason) {
    console.log('getRejected');
    return Promise.reject(reason);
}
//returns resolved promise
function getResolved(value) {
    console.log('getResolved');
    return Q(value);
}

function okHandler(value) {
    console.log('OK handler: ' + value);
}

function failHandler(value) {
    console.log('Fail handler: ' + value);   
}

var yes1, yes2, no;
yes1 = getResolved('yes 1');
yes2 = getResolved('yes 2');
no = getRejected('no');
yes1.then(okHandler, failHandler); //output: OK handler: yes 1
no.then(okHandler, failHandler); //output: Fail handler: no
//will call okHandler with input the array [yes1, yes2], because all promises are resolved
Q.all(
      [yes1, yes2]
).then(okHandler, failHandler); //output: OK handler: yes 1,yes 2
//will call failHandler with the first rejected promise
Q.all(
      [yes1, yes2, getRejected('fail them'), getRejected('fail again')]
).then(okHandler, failHandler); //output: Fail handler: fail them

