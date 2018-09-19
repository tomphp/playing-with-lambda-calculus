'use strict';

const assert = require('chai').assert;

const ord = require('../lib/pure/ord');
const boolJS = require('../lib/integration/bool');

describe('ord', () => {
    describe('isLT', () => {
        it('returns true for lt', () => {
            assert.isTrue(boolJS.toJS(ord.isLT(ord.lt)));
        });

        it('returns false all others', () => {
            assert.isFalse(boolJS.toJS(ord.isLT(ord.eq)));
            assert.isFalse(boolJS.toJS(ord.isLT(ord.gt)));
        });
    });

    describe('isLTE', () => {
        it('returns true for lt and eq', () => {
            assert.isTrue(boolJS.toJS(ord.isLTE(ord.lt)));
            assert.isTrue(boolJS.toJS(ord.isLTE(ord.eq)));
        });

        it('returns false all others', () => {
            assert.isFalse(boolJS.toJS(ord.isLTE(ord.gt)));
        });
    });

    describe('isEQ', () => {
        it('returns true for eq', () => {
            assert.isTrue(boolJS.toJS(ord.isEQ(ord.eq)));
        });

        it('returns false all others', () => {
            assert.isFalse(boolJS.toJS(ord.isEQ(ord.lt)));
            assert.isFalse(boolJS.toJS(ord.isEQ(ord.gt)));
        });
    });

    describe('isGTE', () => {
        it('returns true for gte', () => {
            assert.isTrue(boolJS.toJS(ord.isGTE(ord.gt)));
            assert.isTrue(boolJS.toJS(ord.isGTE(ord.eq)));

        });

        it('returns false all others', () => {
            assert.isFalse(boolJS.toJS(ord.isGTE(ord.lt)));
        });
    });

    describe('isGT', () => {
        it('returns true for gt', () => {
            assert.isTrue(boolJS.toJS(ord.isGT(ord.gt)));
        });

        it('returns false all others', () => {
            assert.isFalse(boolJS.toJS(ord.isGT(ord.lt)));
            assert.isFalse(boolJS.toJS(ord.isGT(ord.eq)));
        });
    });
});