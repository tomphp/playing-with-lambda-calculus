'use strict';

const core = require('./core');
const cond = core.cond;
const bool = require('./bool');
const ord = require('./ord');
const pair = require('./pair');
const list = require('./list');

const zero = pair.new(bool.true)(core.identity);

const succ = pair.new(bool.false);
const pred = pair.second;

const isZero = pair.first;

const equal = x => y =>
    cond(isZero(x))
        (_ => isZero(y))
        (_ => cond(isZero(y))
                  (_ => bool.false)
                  (_ => equal(pred(x))(pred(y))));

const modLoop = result => number => modulator =>
    cond(isZero(number))
        (_ => result)
        (_ => cond(equal(modulator)(succ(result)))
                  (_ => modLoop(zero)(pred(number))(modulator))
                  (_ => modLoop(succ(result))(pred(number))(modulator)));

const mod = modLoop(zero);

const compare = left => right =>
    cond(isZero(left))
        (_ => cond(isZero(right))
                  (_ => ord.eq)
                  (_ => ord.lt))
        (_ => cond(isZero(right))
                  (_ => ord.gt)
                  (_ => compare(pred(left))(pred(right))));

const add = n => m =>
    cond(isZero(n))
        (_ => m)
        (_ => add(pred(n))(succ(m)));

const subtract = x => y =>
    cond(isZero(y))
        (_ => x)
        (_ => subtract(pred(x))(pred(y)));

const multiplyLoop = result => n => m =>
    cond(isZero(m))
        (_ => result)
        (_ => multiplyLoop(add(result)(n))(n)(pred(m)));

const multiply = multiplyLoop(zero);

const lessThan = left => right => ord.isLT(compare(left)(right));

const divideLoop = count => n => divisor =>
    cond(lessThan(n)(divisor))
        (_ => count)
        (_ => divideLoop(succ(count))(subtract(n)(divisor))(divisor))

const divide = divideLoop(zero);

const one      = succ(zero);
const two      = succ(one);
const three    = succ(two);
const four     = succ(three);
const five     = succ(four);
const six      = succ(five);
const seven    = succ(six);
const eight    = succ(seven);
const nine     = succ(eight);
const ten      = succ(nine);
const eleven   = succ(ten);
const twelve   = succ(eleven);
const thirteen = succ(twelve);
const fourteen = succ(thirteen);
const fifteen  = succ(fourteen);

const fortyEight = multiply(six)(eight);

const stringifyLoop = n =>
    cond(isZero(n))
        (_ => list.nil)
        (_ => {
            const modTen = mod(n)(ten);
            const digit = add(modTen)(fortyEight);
            let digitString = list.singleton(digit);

            const prefix = stringifyLoop(divide(n)(ten));

            return list.concat(prefix)(digitString);
        });

const stringify = n =>
    cond(isZero(n))
        (_ => list.singleton(add(zero)(fortyEight)))
        (_ => stringifyLoop(n));

module.exports = {
    zero,
    isZero,
    succ,
    pred,
    equal,
    mod,
    add,
    subtract,
    multiply,
    divide,
    compare,

    stringify,

    // numbers
    one      ,
    two      ,
    three    ,
    four     ,
    five     ,
    six      ,
    seven    ,
    eight    ,
    nine     ,
    ten      ,
    eleven   ,
    twelve   ,
    thirteen ,
    fourteen ,
    fifteen  ,
};
