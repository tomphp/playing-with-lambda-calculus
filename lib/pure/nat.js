'use strict';

const core = require('./core');
const cond = core.cond;
const bool = require('./bool');
const pair = require('./pair');

const zero = pair.new(bool.true)(core.identity);

const succ = pair.new(bool.false);
const pred = pair.second;

const isZero = pair.first;

const numbersEqual = x => y =>
    cond(isZero(x))
        (_ => isZero(y))
        (_ => cond(isZero(y))
                  (_ => bool.false)
                  (_ => numbersEqual(pred(x))(pred(y))));

const modLoop = result => number => modulator =>
    cond(isZero(number))
        (_ => result)
        (_ => cond(numbersEqual(modulator)(succ(result)))
                  (_ => modLoop(zero)(pred(number))(modulator))
                  (_ => modLoop(succ(result))(pred(number))(modulator)));

const mod = modLoop(zero);

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

module.exports = {
    zero,
    isZero,
    succ,
    pred,
    numbersEqual,
    mod,

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
