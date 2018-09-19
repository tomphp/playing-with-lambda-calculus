'use strict';

const assert = require('chai').assert;

const ascii = require('../lib/integration/ascii');

describe('ascii', () => {
    describe('toJS', () => {
        it('converts newlines letters to JS strings', () => {
            assert.equal(ascii.toJS(ascii.newline), '\n');
        });

        it('converts uppercase letters to JS strings', () => {
            assert.equal(ascii.toJS(ascii.A), 'A');
            assert.equal(ascii.toJS(ascii.B), 'B');
            assert.equal(ascii.toJS(ascii.C), 'C');
            assert.equal(ascii.toJS(ascii.D), 'D');
            assert.equal(ascii.toJS(ascii.E), 'E');
            assert.equal(ascii.toJS(ascii.F), 'F');
            assert.equal(ascii.toJS(ascii.G), 'G');
            assert.equal(ascii.toJS(ascii.H), 'H');
            assert.equal(ascii.toJS(ascii.I), 'I');
            assert.equal(ascii.toJS(ascii.J), 'J');
            assert.equal(ascii.toJS(ascii.K), 'K');
            assert.equal(ascii.toJS(ascii.L), 'L');
            assert.equal(ascii.toJS(ascii.M), 'M');
            assert.equal(ascii.toJS(ascii.N), 'N');
            assert.equal(ascii.toJS(ascii.O), 'O');
            assert.equal(ascii.toJS(ascii.P), 'P');
            assert.equal(ascii.toJS(ascii.Q), 'Q');
            assert.equal(ascii.toJS(ascii.R), 'R');
            assert.equal(ascii.toJS(ascii.S), 'S');
            assert.equal(ascii.toJS(ascii.T), 'T');
            assert.equal(ascii.toJS(ascii.U), 'U');
            assert.equal(ascii.toJS(ascii.V), 'V');
            assert.equal(ascii.toJS(ascii.W), 'W');
            assert.equal(ascii.toJS(ascii.X), 'X');
            assert.equal(ascii.toJS(ascii.Y), 'Y');
            assert.equal(ascii.toJS(ascii.Z), 'Z');
        });

        it('converts numbers letters to JS strings', () => {
            assert.equal(ascii.toJS(ascii.zero), '0');
            assert.equal(ascii.toJS(ascii.one), '1');
            assert.equal(ascii.toJS(ascii.two), '2');
            assert.equal(ascii.toJS(ascii.three), '3');
            assert.equal(ascii.toJS(ascii.four), '4');
            assert.equal(ascii.toJS(ascii.five), '5');
            assert.equal(ascii.toJS(ascii.six), '6');
            assert.equal(ascii.toJS(ascii.seven), '7');
            assert.equal(ascii.toJS(ascii.eight), '8');
            assert.equal(ascii.toJS(ascii.nine), '9');
        });
    });

});