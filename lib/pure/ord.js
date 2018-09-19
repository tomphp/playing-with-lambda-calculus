'use strict';

const bool = require('./bool');

const lt  = lt => eq => gt => lt;
const eq  = lt => eq => gt => eq;
const gt  = lt => eq => gt => gt;

const isLT  = c => c(bool.true)(bool.false)(bool.false);
const isLTE = c => c(bool.true)(bool.true)(bool.false);
const isEQ  = c => c(bool.false)(bool.true)(bool.false);
const isGTE = c => c(bool.false)(bool.true)(bool.true);
const isGT  = c => c(bool.false)(bool.false)(bool.true);

module.exports = {lt, eq, gt, isLT, isLTE, isEQ, isGTE, isGT};