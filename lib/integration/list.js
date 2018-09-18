'use strict';

const list = require('../pure/list');

function toJS(xs) {
    return list.foldr(acc => val => {
        acc.unshift(val);
        return acc
    })([])(xs);
}

function fromJS(array) {
    return array.reverse().reduce((acc, value) => list.cons(value)(acc), list.nil);
}

module.exports = {toJS, fromJS};