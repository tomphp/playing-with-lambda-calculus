'use strict';

const bool = require('./lib/pure/bool');
const core = require('./lib/pure/core');
const cond = core.cond;
const nat = require('./lib/pure/nat');
const list = require('./lib/pure/list');
const listJS = require('./lib/integration/list');
const ascii = require('./lib/pure/ascii');
const asciiJS = require('./lib/integration/ascii');

const fizzbuzz = fb => f => b => n => fb;
const fizz     = fb => f => b => n => f;
const buzz     = fb => f => b => n => b;
const number   = number => fb => f => b => n => n(number);

const fizzString = list.cons(ascii.F)(list.cons(ascii.I)(list.cons(ascii.Z)(list.cons(ascii.Z)(list.nil))));
const buzzString = list.cons(ascii.B)(list.cons(ascii.U)(list.cons(ascii.Z)(list.cons(ascii.Z)(list.nil))));
const fizzBuzzString = list.concat(fizzString)(buzzString);

const isDivisibleBy = divisor => number => nat.isZero(nat.mod(number)(divisor));

const isFizz = isDivisibleBy(nat.three);
const isBuzz = isDivisibleBy(nat.five);
const isFizzBuzz = n => bool.and(isFizz(n))(isBuzz(n));

const doFizzBuzz = n =>
    cond(isFizzBuzz(n))
        (_ => fizzbuzz)
        (_ => cond(isFizz(n))
                  (_ => fizz)
                  (_ => cond(isBuzz(n)
                            (_ => buzz)
                            (_ => number(n)))));

const toString = fizzbuzz =>
    fizzbuzz(fizzBuzzString)(fizzString)(buzzString)(nat.stringify);

// RUNTIME

function printFizzBuzz(number) {
    const result = doFizzBuzz(number);
    const asciiList = list.map(asciiJS.toJS)(toString(result));
    const output = listJS.toJS(asciiList).join('');

    console.log(output);
}

printFizzBuzz(nat.zero);
printFizzBuzz(nat.one);
printFizzBuzz(nat.two);
printFizzBuzz(nat.three);
printFizzBuzz(nat.four);
printFizzBuzz(nat.five);
printFizzBuzz(nat.six);
printFizzBuzz(nat.seven);
printFizzBuzz(nat.eight);
printFizzBuzz(nat.nine);
printFizzBuzz(nat.ten);
printFizzBuzz(nat.eleven);
printFizzBuzz(nat.twelve);
printFizzBuzz(nat.thirteen);
printFizzBuzz(nat.fourteen);
printFizzBuzz(nat.fifteen);