'use strict';

const assert = require('chai').assert;

const pair = require('../lib/pure/pair');

describe('pair', () => {
    describe('first', () => {
        it('returns first item', () => {
            assert.equal(pair.first(pair.new(1)(2)), 1);
        });
    });

    describe('second', () => {
        it('returns second item', () => {
            assert.equal(pair.second(pair.new(1)(2)), 2);
        });
    });
});