'use strict';

const assert = require('chai').assert;

const bool = require('../lib/pure/bool');
const boolJS = require('../lib/integration/bool');

describe('core', () => {
    describe('boolJS.toJS', () => {
        it('returns true for bool.true', () => {
            assert.isTrue(boolJS.toJS(bool.true));
        });

        it('returns false for bool.false', () => {
            assert.isFalse(boolJS.toJS(bool.false));
        });
    });

    describe('not', () => {
        it('returns bool.false for bool.true', () => {
            assert.isFalse(boolJS.toJS(bool.not(bool.true)));
        });

        it('returns bool.true for bool.false', () => {
            assert.isTrue(boolJS.toJS(bool.not(bool.false)));
        });
    });

    describe('and', () => {
        it('returns bool.true for bool.true and bool.true', () => {
            assert.isTrue(boolJS.toJS(bool.and(bool.true)(bool.true)));
        });

        it('returns bool.false for bool.true and bool.false', () => {
            assert.isFalse(boolJS.toJS(bool.and(bool.true)(bool.false)));
        });

        it('returns bool.false for bool.false and bool.true', () => {
            assert.isFalse(boolJS.toJS(bool.and(bool.false)(bool.true)));
        });

        it('returns bool.false for bool.false and bool.false', () => {
            assert.isFalse(boolJS.toJS(bool.and(bool.false)(bool.false)));
        });
    });

    describe('or', () => {
        it('returns bool.true for bool.true and bool.true', () => {
            assert.isTrue(boolJS.toJS(bool.or(bool.true)(bool.true)));
        });

        it('returns bool.true for bool.true and bool.false', () => {
            assert.isTrue(boolJS.toJS(bool.or(bool.true)(bool.false)));
        });

        it('returns bool.true for bool.false and bool.true', () => {
            assert.isTrue(boolJS.toJS(bool.or(bool.false)(bool.true)));
        });

        it('returns bool.false for bool.false and bool.false', () => {
            assert.isFalse(boolJS.toJS(bool.or(bool.false)(bool.false)));
        });
    });
});