'use strict';

const assert = require('chai').assert;

const nat = require('../lib/pure/nat');
const natJS = require('../lib/integration/nat');
const boolJS = require('../lib/integration/bool');

describe('nat', () => {
    describe('toJS', () => {
        it('returns the number', () => {
            assert.equal(natJS.toJS(nat.zero), 0);
            assert.equal(natJS.toJS(nat.succ(nat.zero)), 1);
            assert.equal(natJS.toJS(nat.succ(nat.succ(nat.zero))), 2);
        });
    });

    describe('fromJS', () => {
        it('returns a natural number', () => {
            assert.equal(natJS.toJS(natJS.fromJS(8)), 8);
            assert.equal(natJS.toJS(natJS.fromJS(11)), 11);
        })
    });

    describe('numbersEqual', () => {
        it('returns bool.true for zero and zero', () => {
            assert.isTrue(boolJS.toJS(nat.numbersEqual(nat.zero)(nat.zero)));
        });

        it('returns bool.false for zero and two', () => {
            assert.isFalse(boolJS.toJS(nat.numbersEqual(nat.zero)(nat.two)));
        });

        it('returns bool.false for two and zero', () => {
            assert.isFalse(boolJS.toJS(nat.numbersEqual(nat.zero)(nat.two)));
        });

        it('returns bool.true for five and five', () => {
            assert.isTrue(boolJS.toJS(nat.numbersEqual(nat.five)(nat.five)));
        });
    });

    describe('add', () => {
        it('adds two numbers', () => {
            assert.equal(natJS.toJS(nat.add(nat.two)(nat.four)), 6);
            assert.equal(natJS.toJS(nat.add(nat.three)(nat.seven)), 10);
        });
    });

    describe('multiply', () => {
        it('multiplies numbers', () => {
            assert.equal(natJS.toJS(nat.multiply(nat.two)(nat.five)), 10);
            assert.equal(natJS.toJS(nat.multiply(nat.three)(nat.three)), 9);
        });
    });
});