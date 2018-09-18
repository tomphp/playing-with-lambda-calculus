const list = require('../pure/list');

function toJS(xs) {
    const append = acc => value => {
        acc.push(value);
        return acc;
    };

    return list.foldl(append)([])(xs);
}

function fromJS(array) {
    return array.reduce((acc, value) => list.cons(value)(acc), list.nil);
}

module.exports = {toJS, fromJS};