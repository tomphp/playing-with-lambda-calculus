'use strict';

const list = require('../pure/list');

module.exports = list;

module.exports.toJS = xs => {
    return list.foldr(acc => val => {
        acc.unshift(val);
        return acc
    })([])(xs);
};

module.exports.fromJS = array => {
    return array.reverse().reduce((acc, value) => list.cons(value)(acc), list.nil);
};