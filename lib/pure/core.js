'use strict';

const identity = x => x;

const cond = statement => t => f => statement(t)(f)(identity);

module.exports = {identity, cond};