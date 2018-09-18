'use strict';

const newPair = first => second => select => select(first)(second);

const first  = p => p(f => s => f);
const second = p => p(f => s => s);

module.exports = {new: newPair, first, second};
