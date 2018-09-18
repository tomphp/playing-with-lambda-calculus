'use strict';

const nat = require('../lib/pure/nat');
const list = require('../lib/pure/list');
const listJS = require('../lib/integration/list');
const boolJS = require('../lib/integration/bool');


const assert = require('chai').assert;

describe('list', () => {
    describe('isNil', () => {
        it('returns true for nil', () => {
            assert.isTrue(boolJS.toJS(list.isNil(list.nil)));
        });

        it('returns false for cons', () => {
            assert.isFalse(boolJS.toJS(list.isNil(list.cons(1)(list.nil))));
        });
    });

    describe('foldr', () => {
        it('returns folds to a single value', () => {
            const xs = listJS.fromJS(['a', 'b', 'c']);

            assert.equal(list.foldr(acc => val => acc + val)('')(xs), 'abc');
        });
    });

    describe('foldl', () => {
        it('returns folds to a single value', () => {
            const xs = listJS.fromJS(['a', 'b', 'c']);

            assert.equal(list.foldl(acc => val => acc + val)('')(xs), 'cba');
        });
    });

    describe('map', () => {
        it('returns the transformed list', () => {
            const xs = listJS.fromJS([1, 2, 3, 4]);

            assert.deepEqual(listJS.toJS(list.map(x => x + 1)(xs)), [2, 3, 4, 5]);
        });
    });

    describe('toJS', () => {
        const xs = list.cons(1)(list.cons(2)(list.nil));

        assert.deepEqual(listJS.toJS(xs), [1, 2]);
    });
});
