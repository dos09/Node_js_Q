var Q = require('Q');

function func(num) {
    if(num === 0) {
        throw new Error('kochan');
    }
    
    return num;
}

function okHandler(value) {
    console.log('OK handler: ' + value);
}

function failHandler(value) {
    console.log('Fail handler: ' + value);   
}

Q.fcall(func, 100).then(okHandler, failHandler);
Q.fcall(func, 0).then(okHandler, failHandler);