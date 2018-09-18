'use strict';

const natJS = require('./nat')

function toJS(letter) {
    return String.fromCharCode(natJS.toJS(letter));
}

module.exports = {toJS};