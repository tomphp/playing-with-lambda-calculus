'use strict';

const boolJS = require('../integration/bool');
const nat = require('../pure/nat');

module.exports = nat;

module.exports.toJS = number => {
    let result = 0;

    while (!boolJS.toJS(nat.isZero(number))) {
        result++;
        number = nat.pred(number);
    }

    return result;
};

module.exports.fromJS = number => {
    let result = nat.zero;

    for (let n = 0; n < number; n++) {
        result = nat.succ(result);
    }

    return result;
};