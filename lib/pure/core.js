'use strict';

const identity = x => x;

const compose = f => g => x => f(g(x));

const cond = statement => t => f => statement(t)(f)(identity);

module.exports = {identity, compose, cond};