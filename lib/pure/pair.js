'use strict';

const newPair = first => second => select => select(first)(second);

const first  = pair => pair(f => s => f);
const second = pair => pair(f => s => s);

module.exports = {new: newPair, first, second};
