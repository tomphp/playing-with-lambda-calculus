'use strict';

const assert = require('chai').assert;

const ascii = require('../lib/pure/ascii');
const asciiJS = require('../lib/integration/ascii');

describe('ascii', () => {
    describe('toJS', () => {
        it('converts newlines letters to JS strings', () => {
            assert.equal(asciiJS.toJS(ascii.newline), '\n');
        });

        it('converts uppercase letters to JS strings', () => {
            assert.equal(asciiJS.toJS(ascii.A), 'A');
            assert.equal(asciiJS.toJS(ascii.B), 'B');
            assert.equal(asciiJS.toJS(ascii.C), 'C');
            assert.equal(asciiJS.toJS(ascii.D), 'D');
            assert.equal(asciiJS.toJS(ascii.E), 'E');
            assert.equal(asciiJS.toJS(ascii.F), 'F');
            assert.equal(asciiJS.toJS(ascii.G), 'G');
            assert.equal(asciiJS.toJS(ascii.H), 'H');
            assert.equal(asciiJS.toJS(ascii.I), 'I');
            assert.equal(asciiJS.toJS(ascii.J), 'J');
            assert.equal(asciiJS.toJS(ascii.K), 'K');
            assert.equal(asciiJS.toJS(ascii.L), 'L');
            assert.equal(asciiJS.toJS(ascii.M), 'M');
            assert.equal(asciiJS.toJS(ascii.N), 'N');
            assert.equal(asciiJS.toJS(ascii.O), 'O');
            assert.equal(asciiJS.toJS(ascii.P), 'P');
            assert.equal(asciiJS.toJS(ascii.Q), 'Q');
            assert.equal(asciiJS.toJS(ascii.R), 'R');
            assert.equal(asciiJS.toJS(ascii.S), 'S');
            assert.equal(asciiJS.toJS(ascii.T), 'T');
            assert.equal(asciiJS.toJS(ascii.U), 'U');
            assert.equal(asciiJS.toJS(ascii.V), 'V');
            assert.equal(asciiJS.toJS(ascii.W), 'W');
            assert.equal(asciiJS.toJS(ascii.X), 'X');
            assert.equal(asciiJS.toJS(ascii.Y), 'Y');
            assert.equal(asciiJS.toJS(ascii.Z), 'Z');
        });

        it('converts numbers letters to JS strings', () => {
            assert.equal(asciiJS.toJS(ascii.zero), '0');
            assert.equal(asciiJS.toJS(ascii.one), '1');
            assert.equal(asciiJS.toJS(ascii.two), '2');
            assert.equal(asciiJS.toJS(ascii.three), '3');
            assert.equal(asciiJS.toJS(ascii.four), '4');
            assert.equal(asciiJS.toJS(ascii.five), '5');
            assert.equal(asciiJS.toJS(ascii.six), '6');
            assert.equal(asciiJS.toJS(ascii.seven), '7');
            assert.equal(asciiJS.toJS(ascii.eight), '8');
            assert.equal(asciiJS.toJS(ascii.nine), '9');
        });
    });

});