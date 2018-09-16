'use strict';

const boolTrue  = t => f => t;
const boolFalse = t => f => f;

const not = b => t => f => b(f)(t);

const and = b1 => b2 => t => f => b1(b2(t)(f))(f);
const or  = b1 => b2 => t => f => b1(b2(t)(t))(b2(t)(f));

module.exports = {true: boolTrue, false: boolFalse, not, and, or};