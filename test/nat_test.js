'use strict';

const assert = require('chai').assert;

const ord = require('../lib/pure/ord');
const nat = require('../lib/integration/nat');
const list = require('../lib/integration/list');
const ascii = require('../lib/integration/ascii');
const bool = require('../lib/integration/bool');

describe('nat', () => {
    describe('toJS', () => {
        it('returns the number', () => {
            assert.equal(nat.toJS(nat.zero), 0);
            assert.equal(nat.toJS(nat.succ(nat.zero)), 1);
            assert.equal(nat.toJS(nat.succ(nat.succ(nat.zero))), 2);
        });
    });

    describe('fromJS', () => {
        it('returns a natural number', () => {
            assert.equal(nat.toJS(nat.fromJS(8)), 8);
            assert.equal(nat.toJS(nat.fromJS(11)), 11);
        })
    });

    describe('equal', () => {
        it('returns bool.true for zero and zero', () => {
            assert.isTrue(bool.toJS(nat.equal(nat.zero)(nat.zero)));
        });

        it('returns bool.false for zero and two', () => {
            assert.isFalse(bool.toJS(nat.equal(nat.zero)(nat.two)));
        });

        it('returns bool.false for two and zero', () => {
            assert.isFalse(bool.toJS(nat.equal(nat.zero)(nat.two)));
        });

        it('returns bool.true for five and five', () => {
            assert.isTrue(bool.toJS(nat.equal(nat.five)(nat.five)));
        });
    });

    describe('ord', () => {
        it('returns gt if the first number is greater', () => {
            assert.isTrue(bool.toJS(ord.isGT(nat.compare(nat.six)(nat.three))));
        });

        it('returns eq if the numbers are equal', () => {
            assert.isTrue(bool.toJS(ord.isEQ(nat.compare(nat.three)(nat.three))));
        });

        it('returns lt if the first number is less', () => {
            assert.isTrue(bool.toJS(ord.isLT(nat.compare(nat.three)(nat.ten))));
        });
    });

    describe('add', () => {
        it('adds two numbers', () => {
            assert.equal(nat.toJS(nat.add(nat.two)(nat.four)), 6);
            assert.equal(nat.toJS(nat.add(nat.three)(nat.seven)), 10);
        });
    });

    describe('subtract', () => {
        it('returns the subtracted result', () => {
            assert.equal(nat.toJS(nat.subtract(nat.five)(nat.two)), 3);
            assert.equal(nat.toJS(nat.subtract(nat.three)(nat.one)), 2);
        });
    });

    describe('multiply', () => {
        it('multiplies numbers', () => {
            assert.equal(nat.toJS(nat.multiply(nat.two)(nat.five)), 10);
            assert.equal(nat.toJS(nat.multiply(nat.three)(nat.three)), 9);
        });
    });

    describe('divide', () => {
        it('returns zero when dividing zero', () => {
            assert.equal(nat.toJS(nat.divide(nat.zero)(nat.five)), 0);
        });

        it('returns two when dividing two by one', () => {
            assert.equal(nat.toJS(nat.divide(nat.two)(nat.one)), 2);
        });

        it('returns two when dividing four by two', () => {
            assert.equal(nat.toJS(nat.divide(nat.four)(nat.two)), 2);
        });

        it('returns two when dividing five by two', () => {
            assert.equal(nat.toJS(nat.divide(nat.five)(nat.two)), 2);
        });
    });

    describe('toString', () => {
        function toJSString(n) {
            const numString = nat.stringify(n);
            const jsString = list.map(ascii.toJS)(numString);

            return list.toJS(jsString);
        }

        it('returns 0 for zero', () => {
            assert.deepEqual(toJSString(nat.zero), ['0']);
        });

        it('returns 1 for one', () => {
            assert.deepEqual(toJSString(nat.one), ['1']);
        });

        it('returns 12 for twelve', () => {
            assert.deepEqual(toJSString(nat.twelve), ['1', '2']);
        });
    });
});